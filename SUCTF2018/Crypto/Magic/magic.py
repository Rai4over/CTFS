from flag import flag

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

def playMagic(magic, key):
    cipher = 0
    for i in range(len(magic)):
        cipher = cipher << 1
        t = magic[i] & key
        c = 0
        while t:
            c = (t & 1) ^ c
            t = t >> 1
        cipher = cipher ^ c
    return cipher

def main():
    key = flag[5:-1]
    assert len(key) == 32
    key = key.encode("hex")
    key = int(key, 16)
    magic = getMagic()
    cipher = playMagic(magic, key)
    cipher = hex(cipher)[2:-1]
    with open("cipher.txt", "w") as f:
        f.write(cipher + "\n")

if __name__ == "__main__":
    main()