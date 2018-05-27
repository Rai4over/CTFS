def getMagic():
    magic = []
    with open("magic.txt") as f:
        while True:
            line = f.readline()
            if (line):
                line = int(line, 16)
                line = list(bin(line)[2:].rjust(256, '0'))
                magic.append(line)
                # print bin(line)[2:]
            else:
                break
    return magic

cipher = 0xae9d5ce2d396bdd5b30a20fa252e3dc53549f4499d5066ef2d005ce5696f976e
cipher = bin(cipher)[2:]

magic = getMagic()
a = []
for i in range(256):
    a.append([0] * 256)
b = ['0'] * 256
for row in range(256):
    for col in range(256):
        a[row][col] = int(magic[row][col]) & 1
    b[row] = int(cipher[row])

for x in range(256):
    for y in range(x, 256):
        if a[y][x] == 1:
            a[x], a[y] = a[y], a[x]
            b[x], b[y] = b[y], b[x]
            break
    for y in range(256):
        if a[y][x] == 1 and x != y:
            for z in range(x, 256):
                a[y][z] = a[y][z] ^ a[x][z]
            b[y] ^= b[x]

res = 0

for i in range(256):
    res = (res << 1) | b[i]
print hex(res).replace('0x', '').replace('L', '').decode('hex')

# flag{Now_you_know_the_Hill_Cipher_xwg}