import binascii
import itertools


data = open('8.txt', 'r').readlines()

for d in data:
    spl = [d[i:i+16] for i in range(0, len(d), 16)]
    ite = itertools.combinations(spl, 2)
    same = 0
    for p in ite:
        if p[0] == p[1]:
            same += 1
    if same > 0:
        print d