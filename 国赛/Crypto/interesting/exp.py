# -*- coding:utf-8 -*-

def byte_flip(iv, pos, plaintext, want):
    iv = list(iv)
    iv[pos] = chr(ord(iv[pos]) ^ ord(plaintext) ^ ord(want))
    return ''.join(iv)

c="bMPWOsg+YH0eSwchPY6HTEvf3ESETSrEQ3/M1d0lUm0=".decode("base64")
iv = c[:16]
plaintext = ";admin=0;group=0"