# -*- coding:utf-8 -*-
from pwn import *
import base64
import gmpy2 as gm
import time
context.log_level = 'debug'

host = "game.suctf.asuri.org"
port = 10002
N = 36193562045147198226267685786822513311372299890288906766214451758408242669170809891962145407277585270045757267352741959591666164323206252522725650747399322790206415639159080845612923648630789946593188406828731691439931929756857366720659518874963050327900921198273525530080232505943436085962475711466384128327
P = "password"
g = 2
k = 3
I = "username"
seed = gm.random_state(int(time.time()))

r = remote(host, port)
a = gm.mpz_rrandomb(seed, 20)
# A = gm.powmod(g, a, N)
A = 0
message = I + "," + str(A).encode("base_64").replace("\n", "")

r.sendline(message)
message = r.recv(1024)
message = message.split(",")
# print message
salt = int(message[0].decode("base_64"))
B = int(message[1].decode("base_64"))
# print salt, B

uH = hashlib.sha256(str(A) + str(B)).hexdigest()
u = int(uH, 16)
xH = hashlib.sha256(str(salt) + "sadhosnaoi").hexdigest()
x = int(xH, 16)
S = B - k * gm.powmod(g, x, N)
S = gm.powmod(S, (a + u*x), N)
# K = hashlib.sha256(str(S)).hexdigest()
K = hashlib.sha256('0').hexdigest()
h = hashlib.sha256(K + str(salt)).hexdigest()

r.sendline(h)
r.recvuntil('{')
r.close()

# SRP算法
# https://cryptopals.com/sets/5/challenges/37
