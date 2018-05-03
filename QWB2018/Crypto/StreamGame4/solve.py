def nlfsr(R, mask):
    output = (R << 1) & 0xffffff
    i = (R & mask) & 0xffffff
    lastbit = 0
    changesign = True
    while i != 0:
        if changesign:
            lastbit &= (i & 1)
            changesign = False
        else:
            lastbit ^= (i & 1)
        i = i >> 1
    output ^= lastbit
    return (output, lastbit)

key = open('key', 'r').read()

mask = 0b110110011011001101110

for R in range(0, 2**21):
    nR = R
    i = 0
    while 1:
        if i > 20:
            print bin(nR)
        tmp = 0
        for j in range(8):
            (R, out) = nlfsr(R, mask)
            tmp = (tmp << 1) ^ out
        if tmp != ord(key[i]):
            break
        i+=1

# 0x12756b
# flag{100100111010101101011}