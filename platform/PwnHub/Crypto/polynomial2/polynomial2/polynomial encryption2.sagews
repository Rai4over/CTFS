p=131
K=GF(p)
flag='xxxxx'
P.<x>=PolynomialRing(K)
f=x^65 + 9*x^64 + 115*x^63 + 102*x^62 + 90*x^61 + 71*x^60 + 11*x^59 + 9*x^58 + 84*x^57 + 68*x^56 + 76*x^55 + 12*x^54 + 128*x^53 + 95*x^52 + 4*x^51 + 46*x^50 + 30*x^49 + 96*x^48 + 59*x^47 + 86*x^46 + 73*x^45 + 41*x^44 + 112*x^43 + 43*x^42 + 29*x^41 + 106*x^40 + 127*x^39 + 9*x^38 + 130*x^37 + 5*x^36 + 87*x^35 + 55*x^34 + 37*x^33 + 82*x^32 + 26*x^31 + 42*x^30 + 69*x^29 + 68*x^28 + 3*x^27 + 89*x^26 + 30*x^25 + 79*x^24 + 125*x^23 + 126*x^22 + 44*x^21 + 119*x^19 + 44*x^18 + 113*x^17 + 70*x^16 + 9*x^15 + 5*x^14 + 54*x^13 + 5*x^12 + 91*x^11 + 105*x^10 + 107*x^9 + 45*x^8 + 8*x^7 + 8*x^6 + 55*x^5 + 89*x^4 + 122*x^3 + 113*x^2 + 28*x + 58
e=2333
R=P.quotient_ring(f)
m=0
for i in range(len(flag)):
    m=m+K(ord(flag[i]))*x^i
c=R(m)^e
print "ciphertext:",list(c)
'''
ciphertext: [87 16 59 87 13 10 80 128 121 62 3 52 85 93 79 17 62 27 9 25 50 91 14 39 30 15 45 130 10 73 87 6 51 122 87 120 123 63 18 67 24 106 2 112 83 47 8 4 61 69 76 84 29 76 97 33 31 48 111 10 88 44 69 16 66]
'''

# F(x)^(p^(a)-1) == 1 mod (G(x))