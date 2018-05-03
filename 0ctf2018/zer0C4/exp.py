from pwn import *
import hashlib
import string
import os
context.log_level = 'debug'

def proof(sstr, sres):
    for i in string.printable:
        for k in string.printable:
            for j in string.printable:
                for n in string.printable:
                    if hashlib.sha256(i + j + k + n + sstr).hexdigest() == sres:
                        return i + j + k + n

while 1:
    r = remote('202.120.7.220', 1234)
    data = r.recvuntil('\n')
    sstr = data[12:28]
    sres = data[33:97]
    r.sendline(proof(sstr, sres))
    r.recvuntil("the key.\n")
    r.sendline('2')
    r.recvuntil('original key: ')
    r.sendline(os.urandom(16))
    data = r.recv()
    if "Wrong" not in data:
        f = open('flag.txt', 'a')
        f.write(data)
        f.close()
    r.close()

