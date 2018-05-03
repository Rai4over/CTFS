import requests
url = "http://115.28.78.16:13333/web/web5/"
re = requests.post(url,{"b":"0.7500000000000000a"})
print(re.text)
