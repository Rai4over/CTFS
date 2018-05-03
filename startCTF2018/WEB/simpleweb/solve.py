for a in range(36):
    # print a
    b = 35 - a
    c = 51 - b
    d = 35 - c
    e = 51 - d
    al = [a,b,c,d,e]
    al = sorted(al)
    al2 = []
    for i in range(4):
        al2.append(al[i]+al[i+1])
    val = 0
    for i in range(4):
        val = val * 0x100 + al2[i]
    if val == 0x23332333:
        print a,b,c,d,e