# -*- coding:utf-8 -*-
from Crypto.PublicKey import RSA
import gmpy2

with open('pubkey.pem', 'rb') as f:
    key = RSA.importKey(f)
    N = key.n
    e = key.e

print N, e
#N = 87924348264132406875276140514499937145050893665602592992418171647042491658461
#e = 65537
#factordb在线分解
#p = 275127860351348928173285174381581152299
#q = 319576316814478949870590164193048041239

#flag：PCTF{256b_i5_m3dium}