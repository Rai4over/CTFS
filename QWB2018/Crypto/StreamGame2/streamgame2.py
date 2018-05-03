# from flag import flag
# assert flag.startswith("flag{")
# assert flag.endswith("}")
# assert len(flag) == 27
flag = "flag{110111100101001101001}"


def lfsr(R, mask):
    output = (R << 1) & 0xffffff
    i = (R & mask) & 0xffffff
    lastbit = 0
    while i != 0:
        lastbit ^= (i & 1)
        i = i >> 1
    output ^= lastbit
    return (output, lastbit)


R = int(flag[5:-1], 2)
mask = 0x100002

# f = open("key", "ab")
for i in range(12):
    tmp = 0
    for j in range(8):
        (R, out) = lfsr(R, mask)
        tmp = (tmp << 1) ^ out
        print bin(R), out, tmp
    # f.write(chr(tmp))
    print "*******************"
f.close()
