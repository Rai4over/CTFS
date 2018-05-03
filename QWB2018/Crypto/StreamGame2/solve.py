def lfsr(R, mask):
    output = (R << 1) & 0xffffff
    i = (R & mask) & 0xffffff
    lastbit = 0
    while i != 0:
        lastbit ^= (i & 1)
        i = i >> 1
    output ^= lastbit
    return (output, lastbit)


mask = 0b100000000000000000010
key = open('key', 'r').read()

for R in range(0, 2**21):
    nR = R
    i = 0
    while 1:
        if i > 10:
            print bin(nR)
        tmp = 0
        for j in range(8):
            (R, out) = lfsr(R, mask)
            tmp = (tmp << 1) ^ out
        if tmp != ord(key[i]):
            break
        i += 1

# flag{110111100101001101001}
