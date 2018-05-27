def getMagic():
    magic = []
    with open("magic.txt") as f:
        while True:
            line = f.readline()
            if (line):
                line = int(line, 16)
                magic.append(line)
                # print bin(line)[2:]
            else:
                break
    return magic

magic = getMagic()
n = len(magic)
assert n == 256
mat = []
b = [0] * n
for i in range(n):
    mat.append([0] * n)
cipher = 0xae9d5ce2d396bdd5b30a20fa252e3dc53549f4499d5066ef2d005ce5696f976e
for i in range(n):
    for j in range(n):
        mat[i][j] = (magic[i] >> (n - j - 1)) & 1
    b[i] = (cipher >> (n - i - 1)) & 1
# print(mat)
for i in range(n):
    for j in range(i, n):
        if mat[j][i] == 1:
            mat[i], mat[j] = mat[j], mat[i]
            b[i], b[j] = b[j], b[i]
            break
    for j in range(n):
        if j != i and mat[j][i] == 1:
            for k in range(i, n):
                mat[j][k] ^= mat[i][k]
            b[j] ^= b[i]
choose = 0

for i in range(n):
    choose = (choose << 1) | b[i]
print("choose:", hex(choose))

# 0x4e6f775f796f755f6b6e6f775f7468655f48696c6c5f4369706865725f787767