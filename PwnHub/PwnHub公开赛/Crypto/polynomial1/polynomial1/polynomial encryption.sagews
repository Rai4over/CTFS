p=131
K=GF(p)
flag='xxxxxxxxxxxxxxxxxxxxxxxxxxx'
P.<x>=PolynomialRing(K)
f=x^47 + 12*x + 129
R=P.quotient_ring(f)
m=0
for i in range(n):
      m=m+K(ord(flag[i]))*x^i
e=2333
c=R(m)^e
print "ciphertext:",list(c)

'''
ciphertext: [41, 85, 111, 59, 96, 126, 66, 65, 13, 30, 14, 130, 12, 119, 8, 0, 19, 99, 126, 86, 51, 6, 114, 66, 115, 51, 45, 75, 81, 102, 76, 82, 72, 108, 102, 42, 98, 101, 77, 25, 124, 98, 16, 23, 118, 114, 119]
'''




