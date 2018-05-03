#! /usr/bin/python
import os
from Crypto.Cipher import AES
from Crypto import Random

def checkPad(data):
    num = ord(data[-1])
    if num < 1 or num > 16: 
        print "decrypt error"
        return "null:null"
    for i in xrange(1,num+1):
        if data[-i] != chr(num):
            print "you are not admin"
            exit(0)
    return data[:-num]
    

def signin():
    token = raw_input("give me you token:")
    iv = token[:32].decode('hex')
    cipherText = token[32:].decode('hex')
    aes = AES.new(key,AES.MODE_CBC,iv)
    plainText = aes.decrypt(cipherText)
    name,passwd = checkPad(plainText).split(':')
    if name == 'admin' and passwd == 'alvndasjncakslbdvlaksdn':
        print flag
    else:
        print "you are not admin"

def make_token(name, passwd):
    iv = rand.read(16)
    aes = AES.new(key,AES.MODE_CBC,iv)
    plainText = name+":"+passwd
    num = 16 - len(plainText)%16
    if num == 0:
        num == 16
    plainText += chr(num)*num
    token = iv.encode('hex') + aes.encrypt(plainText).encode('hex')
    return token

def signup():
    name = raw_input("you name:")
    passwd = raw_input("you password:")
    if name == "" or passwd == "":
        print "you must have name and passwd"
        exit(0)
    if name == "admin":
        print "we have already have a admin"
        exit(0)
    token = make_token(name, passwd)
    print "here is you token:",token
    
rand = Random.new() #use crypto safe random
for name in os.listdir('.'):
    if 'flag' in name:
        fp = open(name)
        flag,key = fp.readlines()[:2]
        fp.close()
        break
flag = flag.strip()
key = key.strip().decode('hex')

menu = '''
+++++++++++++++++++++++++++++++++++++++++++++++++++++++
         welcome to explorer's strange crypto
+++++++++++++++++++++++++++++++++++++++++++++++++++++++
what do you want to do?
1.sign in 
2.sing up
'''

print menu,

choose = raw_input('enter you choose:')
if choose == '1':
    signin()
elif choose == '2':
    signup()
else:
    print "invalid choose"

"""
admim:alvndasjncakslbdvlaksdn
token:2a303f251bf0c9ebc0246702a2335187ce223f8064dae0585ce53da6787473e299b426667292242b3850ca19e5054231
payload:2a303f2518f0c9ebc0246702a2335187ce223f8064dae0585ce53da6787473e299b426667292242b3850ca19e5054231
   """