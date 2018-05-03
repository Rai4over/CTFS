# -*- coding:utf-8 -*-
from table import *

def un400688(data):
    l1 = [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11]
    ndata = [0] * 16
    for i in range(16):
        ndata[l1[i]] = data[i]
    return ndata


def bust(v, i, j):
    for a in range(256):
        for b in range(256):
            for c in range(256):
                for d in range(256):
                    x = tbl1[((4 * j + 3 + 16 * i) << 8) + a] ^ tbl1[((4 * j + 2 + 16 * i) << 8) + b] ^ tbl1[((4 * j + 1 + 16 * i) << 8) + c] ^ tbl1[((4 * j + 16 * i) << 8) + d]
                    if x == v:
                        return [a, b, c, d]


def un400786(data):
    data = un400688(data)
    for i in range(9)[::-1]:
        tmp = []
        for j in range(4):
            v = (((data[4 * j + 3] << 8) + data[4 * j + 2] << 8) + data[4 * j + 1] << 8) + data[4 * j]
            tmp.extend(bust(v, i, j))
        data = tmp
        data = un400688(data)
        print data
    print data


res =  ['\xd8', '\xb3', '\x29', '\x54', '\xf2', '\x63', '\xbb', '\x5b', '\x2c', '\xb6', '\x17', '\x82', '\x33', '\x66', '\x42', '\xc5']
a2 = []
for i in range(16):
    k = 0
    while k < len(tbl2):
        if tbl2[k] == ord(res[i]) and 0 < (k - 256 * i):
            a2.append(k - 256 * i)
            break
        k += 1
print a2
un400786(a2)
# print len(tbl1)
# print len(tbl2)



