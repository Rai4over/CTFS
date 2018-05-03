from pwn import *
from hashlib import sha256
import random
import string

context.log_level = 'debug'

p = remote('47.89.11.82',10012)

def pow(p):
   p.recvuntil('xxxx+')
   d = p.recv(16)
   p.recvuntil('==')
   re = p.recvuntil('\n')[:-1]
   print d
   print re
   while 1:
       salt = ''.join(random.sample(string.ascii_letters + string.digits, 4))
       if sha256(salt+d).hexdigest() == re:
           return salt
      
strs = pow(p)
print strs
p.send(strs)
p.interactive()
