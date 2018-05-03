def lfsr(R, mask):
    output = (R << 1) & 0xffffff
    i = (R & mask) & 0xffffff
    lastbit = 0
    while i != 0:
        lastbit ^= (i & 1)
        i = i >> 1
    output ^= lastbit
    return (output, lastbit)


def single_round(R1, R1_mask, R2, R2_mask, R3, R3_mask):
    (R1_NEW, x1) = lfsr(R1, R1_mask)
    (R2_NEW, x2) = lfsr(R2, R2_mask)
    (R3_NEW, x3) = lfsr(R3, R3_mask)
    return (R1_NEW, R2_NEW, R3_NEW, (x1*x2) ^ ((x2 ^ 1)*x3))

R1_mask = 0x10020
R2_mask = 0x4100c
R3_mask = 0x100002

key = ['\x6e', '\x2b', '\x4d', '\xef', '\x32', '\x98', '\x7c', '\xbc', '\x96']

for R1 in range(0, 2**16):
    for R2 in range(0, 2**18):
        for R3 in range(0, 2**20):
            nR1 = R1
            nR2 = R2
            nR3 = R3
            i = 0
            while 1:
                if i > 6:
                    print 'R1: {} R2:{} R3{}'.format(nR1, nR2, nR3)
                tmp = 0
                for k in range(8):
                    (R1, R2, R3, out) = single_round(R1, R1_mask, R2, R2_mask, R3, R3_mask)
                    tmp = (tmp << 1) ^ out
                if tmp != ord(key[i]):
                    break
                i+=1
                
