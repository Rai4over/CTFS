#-*- coding:utf-8 -*-
import gmpy2

def str2int(s):
    return int(s.encode('hex'), 16)

def int2str(i):
    tmp = hex(i)[2:].strip('L')
    tmp = ('0' if len(tmp)%2 else '') + tmp
    return tmp.decode('hex')

f = open('send.bak', 'rb') 
print f.read()
