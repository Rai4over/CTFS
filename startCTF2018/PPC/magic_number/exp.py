from pwn import *
import time
# context.log_level = 'debug'

def get_one(l, r):
    mid = (l + r) / 2
    if mid == l:
        print l, r
        res.append(str(l))
        return
    p.sendline("? {} {}".format(str(l), str(mid)))
    ln = int(p.recvuntil('\n').strip())
    if ln == 1:
        get_one(l, mid)
    else:
        get_one(mid, r)

def get_more(l, r, n):
    mid = (l + r) / 2
    if mid == l:
        print l, r, n
        for i in range(n):
            res.append(str(l))
        return 
    p.sendline("? {} {}".format(str(l), str(mid)))
    ln = int(p.recvuntil('\n').strip())
    rn = int(n) - int(ln)
    if ln == 1:
        get_one(l, mid)
    elif ln != 0:
        get_more(l, mid, ln)

    if rn == 1:
        get_one(mid, r)
    elif rn != 0:
        get_more(mid, r, rn)


p = remote('47.89.18.224', 10011)

for rounds in range(10):
    print "rounds = " + str(rounds)
    p.recvuntil(': n = ')
    n = int(p.recvuntil('\n').strip())
    print "n = " + str(n)
    time.sleep(1)
    res = []
    get_more(0, 1024, n)
    if len(res) == n:
        data = "!"
        for i in res:
            data = data + " " + str(i)
        print "data = " + data + "\n"
    p.sendline(data)
    time.sleep(1)

p.interactive()

# *ctf{magic algorithm produces magic numbers!}