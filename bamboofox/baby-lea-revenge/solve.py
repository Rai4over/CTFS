#-*- coding:utf-8 -*-
from pwn import *
import base64
import string
import hashlib
import itertools
context.log_level = 'debug'

def cbcByteFlip(iv, pos, plaintext, want):
    iv = list(iv)
    iv[pos] = chr(ord(iv[pos]) ^ ord(plaintext) ^ ord(want))
    return ''.join(iv)

def getniv():
    iv = 'STARWAR888888888'
    niv = cbcByteFlip(iv, 5, 's', 'a')
    niv = cbcByteFlip(niv, 6, 'o', 'd')
    niv = cbcByteFlip(niv, 8, 'e', 'i')
    niv = cbcByteFlip(niv, 9, 'o', 'n')
    niv = cbcByteFlip(niv, 15, '\x04', 'a')
    return niv

sig = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'

allChar = string.ascii_letters + string.digits

def proof(shaStr, shaRe):
    for a in allChar:
        for b in allChar:
            for c in allChar:
                for d in allChar:
                    if hashlib.sha256(a + b + c + d + shaStr).hexdigest() == shaRe:
                        return a + b + c + d

# your token: U1RBUldBUjg4ODg4ODg4OG0AB0WxU6FETxPbuDchHJ4=\n

r = remote('bamboofox.cs.nctu.edu.tw', 58791)
data = r.recv()
shaStr = data[14:30]
shaRe = data[35:99]
# print shaStr, shaRe
r.sendline(proof(shaStr, shaRe))
token = "U1RBUldBUjg4ODg4ODg4OG0AB0WxU6FETxPbuDchHJ4="
ntoken = base64.b64encode(getniv() + base64.b64decode(token)[16:])
# print "ntoken: ", ntoken
r.recvuntil('input your token: ')
r.sendline(ntoken)
r.recvuntil('input your authentication code: ')
r.sendline(sig)
print r.recv()
