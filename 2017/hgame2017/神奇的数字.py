import requests
url = "http://115.28.78.16:13333/web/web4/"
re = requests.post(url,{"number":"09223372036854775807"})
print(re.text)