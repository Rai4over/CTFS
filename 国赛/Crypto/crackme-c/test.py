def test(a1):
    v1 = a1
    v2 = a1[1]
    a1[1] = a1[5]
    v1[5] = v1[9]
    v1[9] = v1[13]
    a1[13] = v2
    v3 = a1[2]
    v1[2] = v1[10]
    a1[10] = v3
    v4 = a1[6]
    v1[6] = v1[14]
    a1[14] = v4
    v5 = a1[3]
    v1[3] = v1[15]
    v1[15] = v1[11]
    v1[11] = v1[7]
    result = v5
    a1[7] = v5

    return a1


def sub_400688(data):
    l1 = [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11]
    ndata = [data[i] for i in l1]
    res = data[3]
    return ndata


def un400688(data):
    l1 = [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11]
    ndata = [0] * 16
    for i in range(16):
        ndata[l1[i]] = data[i]
    return ndata


def a():
    return [1,2,3,4]

print a()