#!/usr/bin/python
# -*- coding: utf-8 -*-
from hashlib import sha256
def xor(a,b):
    return ''.join([chr(ord(i)^ord(j)) for i,j in zip(a,b)])
def HASH(data):
    return sha256(data).digest()[:8]
def bes_encrypt(subkeys, data):
    i = 0
    d1 = data[:8]
    d2 = data[8:]
    for i in subkeys:
       d1 = xor(xor(HASH(d2),i),d1)
       d1,d2 = d2,d1
    return d2 + d1
def key_schedule(key):
    subKeys = []
    subKey = key
    for i in xrange(16):
        subKey = HASH(subKey)
        subKeys.append(subKey)
    return subKeys
def bes(key,data):
    subKeys = key_schedule(key)
    return bes_encrypt(subKeys, data).encode('hex')
#the result  is "1fde6a7b2ff15d0abad691215ca5d470"
if __name__ == "__main__":
    print bes('explorer','??flag_is_here??')

"""hctf{rEvers3_ tHe_kEy!}"""


