# -*- coding:utf-8 -*-
from pwn import *
import hashlib
import gmpy2
from rsaWienerAttack import *
context.log_level = 'debug'


def egcd(a, b):
    if a == 0:
        return (b, 0, 1)
    else:
        g, y, x = egcd(b % a, a)
        return (g, x - (b // a) * y, y)


def proof(s256):
    for i in range(0, 256):
        for j in range(0, 256):
            for k in range(0, 256):
                sss = chr(i) + chr(j) + chr(k)
                if hashlib.sha256(sss).hexdigest()[0:8] == s256:
                    return str(sss)


def stage1(c):
    p = 289540461376837531747468286266019261659
    q = 306774653454153140532319815768090345109
    e = 65537
    c = int(c, 16)
    d = gmpy2.invert(e, (p-1)*(q-1))
    m = pow(c, d, p*q)
    return hex(m).replace("L", "")


def stage6(c, N):
    i = 0
    while 1:
        if (gmpy2.iroot(c + i * N, 3)[1] == 1):
            print i
            return gmpy2.iroot(c + i * N, 3)
        i = i + 1


def stage8(n, e1, e2, c1, c2):
    s = egcd(e1, e2)
    s1 = s[1]
    s2 = s[2]
    if s1 < 0:
        s1 = - s1
        c1 = gmpy2.invert(c1, n)
    elif s2 < 0:
        s2 = - s2
        c2 = gmpy2.invert(c2, n)
    m = (pow(c1, s1, n) * pow(c2, s2, n)) % n
    return m


def stage9(n, c, e):
    N = 1
    for i in n:
        N *= i
    Ni = []
    for i in n:
        Ni.append(N / i)
    T = []
    for i in xrange(e):
        T.append(long(gmpy2.invert(Ni[i], n[i])))
    X = 0
    for i in xrange(e):
        X += c[i] * Ni[i] * T[i]
    m = X % N
    m = gmpy2.iroot(m, e)
    return m


r = remote('39.107.33.90', 9999)
r.recvuntil('teamtoken:')
r.sendline('icqd8e1541e0c9ab90e336e8afbeb22f')
# 1 factordb分解
r.recvuntil("[0:8]=='")
s256 = r.recv(8)
p256 = proof(s256)
r.sendline(p256.encode('hex'))
r.recvuntil("# c=")
c = r.recv(66)
r.sendline(stage1(c))
# 2 wiener-attack
r.recvuntil("# n=")
n = int(r.recv(514), 16)
e = int(r.recvuntil("# c=")[5:-4], 16)
# print e
c = int(r.recv(514), 16)
d = hack_RSA(e, n)
m = pow(c, d, n)
r.sendline(hex(m).replace("L", ""))
# 3 Coppersmith’s short-pad attack && Known High Bits Message Attack
r.recvuntil("@ x=")
r.sendline(hex(3704324190009897835).replace("L", ""))
# r.interactive()
# 4 暴力
p = 114791494681514143990268371423282183138226784645868909558224024738011633713833580549522009721245299751435183564384247261418984397745114977301564583085777881485180217075670585703780063072373569054286277474670485124459902688373648390826470893613150198411843162021692225644621249349903453125961550887837378298881
q = 132940802289018336261987415312533953042764596984032548157327529495089307889127354914528507277209940457450746338751400025568015673025956762534143027257695791611900765053802453566263676389771478041671317414828940200119172760057249923066534954345956113954028278683477795444749575874548525999126508093286460575953
e = 0x10001
r.recvuntil("# c=")
c = int(r.recvuntil('\n')[:-1], 16)
# print "c ======= " + str(c)
d = gmpy2.invert(e, (p - 1) * (q - 1))
m = pow(c, d, p * q)
r.recvuntil("@ m=")
r.sendline(hex(m).replace("L", ""))
# 5 yafu分解
r.recvuntil("# c=")
c = int(r.recvuntil('\n')[:-1], 16)
p = 2681888537
q = 120393827811847730665892922601047874074897457839754965824187553709286586875999984122668238470178081377988439748992735957987417809407665405412580451688753139556272709693049760814986485709769800614157806922562929660004878835280427602632657375319022388348710785821982994403660254841027504457789884082670526620753
e = 0x10001
d = gmpy2.invert(e, (p - 1) * (q - 1))
m = pow(c, d, p * q)
r.recvuntil("@ m=")
r.sendline(hex(m).replace("L", ""))
# 6 低加密指数 短明文
n = 0x7003581fa1b15b80dbe8da5dec35972e7fa42cd1b7ae50a8fc20719ee641d6080980125d18039e95e435d2a60a4d5b0aaa42d5c13b0265da4930a874ddadcd9ab0b02efcb4463a33361a84df0c02dfbd05c0fdc01e52821c683bd265e556412a3f55e49517778079cb1c1c1c22ef8a6e0bccd5e78888ff46167a471f6bff25664a34311c5cb8d6c1b1e7ac2ab0e6676d594734e8f7013b33806868c151316d0cf762a50066c596244fd70b4cb021369aae432e174da502a806e7a8ab13dad1f1b83ac73c0e9e39648630923cbd5726225f17cc0d15afadb7d2c2952b6e092ffc53dcff2914bfddedd043bbdf9c6f6b6b5a6269c5bd423294b9deac4f268eaadb
r.recvuntil("# c=")
c = int(r.recvuntil('\n')[:-1], 16)
m = stage6(c, n)
r.recvuntil("@ m=")
r.sendline(hex(int(m[0])).replace("L", ""))
# 7 共享素数
p = 172556869675477627998498055209836071784247150005171563227746896156122872188366409207785861691629822624239290434962401079375795926547190033528901472629460098214484911362406299395686098456884802352767604762878851834535300869832185076070001884294619607750730223241159644270340312192959960438465036924150469626273
q1 = 132351070426725062043554691080648210190952108157658335988407251230007075283172499240825840919032041018784725171991038079646749244434399109751200470150528052302049968282955114052567000382702788528085267361900807404612963675383296948833387201551997975485346080119293646868147213281855400241807127491238274887591
q2 = 142712204088308994057536283419724413794506016166476894328600394909477811164746138340181564452439035177705892406900049909054445185976447566687912817760888522575392942071446149843167125603211027327213321217046810724727383186248415705825602583825139689729004506328064673686005047611032077069064661986088327406489
e = 0x10001
r.recvuntil("# c1=")
c1 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# c2=")
c2 = int(r.recvuntil('\n')[:-1], 16)
d1 = gmpy2.invert(e, (p - 1) * (q1 - 1))
m1 = pow(c1, d1, p * q1)
d2 = gmpy2.invert(e, (p - 1) * (q2 - 1))
m2 = pow(c2, d2, p * q2)
r.recvuntil("@ m1=")
r.sendline(hex(m1).replace("L", ""))
r.recvuntil("@ m2=")
r.sendline(hex(m2).replace("L", ""))
# 8 共模
n = 0xace2aa1121d22a2153389fba0b5f3e24d8721f5e535ebf5486a74191790c4e3cdd0316b72388e7de8be78483e1f41ca5c930df434379db76ef02f0f8cd426348b62c0155cdf1d5190768f65ce23c60a4f2b16368188954342d282264e447353c62c10959fee475de08ec9873b84b5817fecb74899bedde29ef1220c78767f4de11ef1756404494ae1ce4af184cbc1c7c6de8e9cd16f814bca728e05bc56b090112f94fff686bf8122a3b199eb41080860fa0689ed7dbc8904184fb516b2bbf6b87a0a072a07b9a26b3cda1a13192c03e24dec8734378d10f992098fe88b526ce70876e2c7b7bd9e474307dc6864b4a8e36e28ce6d1b43e3ab5513baa6fa559ff
r.recvuntil("# e1=")
e1 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# c1=")
c1 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# e2=")
e2 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# c2=")
c2 = int(r.recvuntil('\n')[:-1], 16)
m = stage8(n, e1, e2, c1, c2)
r.recvuntil("@ m=")
r.sendline(hex(m).replace("L", ""))
# 9 CRT
e = 3
r.recvuntil("# n1=")
n1 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# c1=")
c1 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# n2=")
n2 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# c2=")
c2 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# n3=")
n3 = int(r.recvuntil('\n')[:-1], 16)
r.recvuntil("# c3=")
c3 = int(r.recvuntil('\n')[:-1], 16)
n = [n1, n2, n3]
c = [c1, c2, c3]
m = stage9(n, c, e)
print m
r.recvuntil("@ m=")
r.sendline(hex(int(m[0])).replace("L", ""))
# r.recv(1024)
# r.recv(1024)
r.interactive()

# flag{s1mp13_rs4_f0r_y0u_+_h4pp9_f0r_qwb}
