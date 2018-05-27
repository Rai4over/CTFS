# -*- coding:utf-8 -*-
from pwn import *
import base64
context.log_level = 'debug'

def addiv(iv, pos):
    iv = list(iv)
    iv[pos] = chr(ord(iv[pos]) + 1)
    return ''.join(iv)

def newmid(iv, pos, mid):
    iv = list(iv)
    mid = chr(ord(iv[pos]) ^ (16 - pos)) + mid
    return mid

def newiv(mid, pos):
    mid = list(mid)
    iv = ('0' * pos * 2).decode('hex')
    tmp = 17 - pos
    for i in mid:
        iv = iv + chr(ord(i) ^ tmp)
    return iv


host = "game.suctf.asuri.org"
port = 10003

iv = ('0' * 32).decode('hex')
c = ('1' * 32).decode('hex')
mid = ''
pos = 15

f = open('res.txt', 'a')
while pos >= 0:
    r = remote(host, port)
    r.sendline(base64.b64encode(iv + c))
    res = base64.b64decode(r.recv(1024).split('\n')[2])
    r.close()
    if res[-(16 - pos):] == chr(16 - pos) * (16 - pos):
        mid = newmid(iv, pos, mid)
        iv = newiv(mid, pos)
        pos = pos - 1
        print iv.encode('hex'), mid.encode('hex')
        f.write("{} {} {}\n".format(str(pos + 1), iv.encode('hex'), mid.encode('hex')))
        continue
    iv = addiv(iv, pos)
f.close()

# 0 e576ef9589dc46fc2548aa43065b0fb9 f467fe8498cd57ed3459bb52174a1ea8
# flag{iv=key_is_danger}