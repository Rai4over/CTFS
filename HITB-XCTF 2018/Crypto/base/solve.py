from pwn import *
import string
# context.log_level = 'debug' 

r = remote('47.91.210.116', 9999)
r.recvuntil("Input:")
for i in string.printable:
    r.sendline('586s' + i)
    r.recvuntil(' => "')
    print i, r.recvuntil("\n").split('\n')
    r.recvuntil("Input:")

