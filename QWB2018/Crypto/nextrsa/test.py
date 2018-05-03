from gmpy2 import invert
from Crypto.Util.number import getPrime

m = "2333333333"
m = int(m.encode('hex'), 16)

p = getPrime(1024)
q = getPrime(1024)
n = p * q
phi = (p - 1) * (q - 1)
print "p = {:#x}\nq = {:#x}\nn = {:#x}".format(p, q, n)
e = 65537
c = pow(m, e, n)
print "c = {:#x}".format(c)

d = invert(e, phi)
m = pow(c, d, n)
print "m = {}".format(hex(m)[2:].decode('hex'))