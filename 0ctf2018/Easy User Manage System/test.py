import hashlib

for i in range(100000000):
    if hashlib.md5(str(i)).hexdigest()[:6] == "d4e744":
        print i
        break