import hashlib

for i in range(10000000):
    if hashlib.md5(str(i)).hexdigest()[:5] == "db9d5":
        print i
        break