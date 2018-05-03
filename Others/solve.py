from binascii import unhexlify

f = open("data.txt", "r")

a = []
b = []
c = []
n = []

for i in range(5):
    a.append(int(f.readline().strip()))
    b.append(int(f.readline().strip()))
    c.append(int(f.readline().strip()))
    n.append(int(f.readline().strip()))
    
f.close()

r = [PolynomialRing(Integers(n[i]),'x') for i in range(5)]
h = [r[i]([b[i], a[i]]) **5 - c[i] for i in range(5)]

# Make h monic:
for i in range(5):
    h[i] = Integer(list(h[i])[5]).inverse_mod(n[i]) * h[i]

t = []
t.append(crt([1, 0, 0, 0, 0], n))
t.append(crt([0, 1, 0, 0, 0], n))
t.append(crt([0, 0, 1, 0, 0], n))
t.append(crt([0, 0, 0, 1, 0], n))
t.append(crt([0, 0, 0, 0, 1], n))

N = n[0]*n[1]*n[2]*n[3]*n[4]

R = PolynomialRing(Integers(N),'X')

H = sum([t[i]*R(list(h[i])) for i in range(5)])

dd = 5
beta = 1                                # b = N
epsilon = beta / 7                      # <= beta / 7
mm = ceil(beta**2 / (dd * epsilon))     # optimized value
tt = floor(dd * mm * ((1/beta) - 1))    # optimized value
XX = ceil(N**((beta**2/dd) - epsilon))  # optimized v

load("coppersmith.sage")
solution = coppersmith_howgrave_univariate(H, N, beta, mm, tt, XX)
print(unhexlify("{:x}".format(solution[0])))