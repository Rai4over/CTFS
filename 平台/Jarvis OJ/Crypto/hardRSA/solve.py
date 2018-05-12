# -*- coding:utf-8 -*-
from Crypto.PublicKey import RSA
import gmpy2

def hex2str(hex_stream):
    replaced = ['0x', 'L', ' ', '\\x', '\t', '\n', ',', ';', '.', ':', '%']
    for a in replaced:
        hex_stream = hex_stream.replace(a, '')
    num = hex_stream
    num = (len(num) % 2) * '0' + num
    ret = num.decode('hex')
    return ret

# with open('pubkey.pem', 'rb') as f:
#     key = RSA.importKey(f)
#     N = key.n
#     e = key.e
# print N, e
with open('flag.enc', 'rb') as f:
    c = int(f.read().encode('hex'), 16)

N = 87924348264132406875276140514499937145050893665602592992418171647042491658461
e = 2
p = 275127860351348928173285174381581152299
q = 319576316814478949870590164193048041239

mp = pow(c, (p + 1) / 4, p)
mq = pow(c, (q + 1) / 4, q)
#print mp, mq
yp = gmpy2.invert(p, q)
yq = gmpy2.invert(q, p)

r = (yp * p * mq + yq * q * mp) % N
s = (yp * p * mq - yq * q * mp) % N

print hex2str(hex(r))
print hex2str(hex(N - r))
print hex2str(hex(s))
print hex2str(hex(N - s))

#flag：PCTF{sp3ci4l_rsa}