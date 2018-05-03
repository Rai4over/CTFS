from pwn import *
import string
# context.log_level = 'debug'

flag = 'fd18f4a112ca67951fc95afb92b74d8}'
for i in range(40, 100):
    r = remote('116.85.48.103', 5002)
    r.recvuntil('\n')
    r.sendline('b9ba15b341c847c8beba85273f9b7f90')
    r.recvuntil('\n')
    r.sendline('a' * i)
    enc = r.recvuntil('\n').rstrip()
    for k in string.printable:
        r.recvuntil('\n')
        r.sendline(k + flag)
        enc2 = r.recvuntil('\n').rstrip()
        if enc[-96:] == enc2:
            flag = k + flag
            print i, "[+]flag: " + str(flag)
            break
    r.close()

# 8
# 23 [+]flag: 1fc95afb92b74d8}
# 39 [+]flag: fd18f4a112ca67951fc95afb92b74d8}
# 55 [+]flag: flag is: DDCTF{afd18f4a112ca67951fc95afb92b74d8}
# Connection for mission: aaaaaaaaaaaaaaaaaaaaaaaa, your mission's flag is: DDCTF{aaaaaaaaaaaaaaaaa1fc95afb92b74d8}bbbbbbbbbbbbbbb
# Connection for mission: aaaaaaaa, your mission's flag is: DDCTF{aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa}
