import requests
import hashlib
def md5(yz):
    for i in range(1000000):
        m = hashlib.md5()
        m.update(str(i))
        n = m.hexdigest()
        #print n[:3]
        if n[:3] == yz:
            return i
url = "http://139.129.108.53:4567/web-05/"
rs = requests.get(url)
yz = rs.text[2558:2561]
captcha = md5(yz)
#print captcha
cooike = rs.headers['Set-Cookie'][10:36]
cookie = {"PHPSESSID":cooike}
data = {"username":"admin", "password":"233", "captcha":captcha}
re = requests.post(url, data = data, cookies = cookie)
print re.headers



