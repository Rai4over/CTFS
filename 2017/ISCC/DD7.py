import hashlib
def md5(a):
    for i in range(1000000):
        m = hashlib.md5()
        m.update(str(i))
        n = m.hexdigest()
        print n[6:12]
        if n[6:12] == a:
            return i
b = md5('612057')
print b