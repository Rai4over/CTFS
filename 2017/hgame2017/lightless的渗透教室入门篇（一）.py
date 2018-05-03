import requests
url = "http://115.28.78.16:13333/pentest/01/?hacker=HelloGet"
re = requests.post(url,{"hacker":"HelloPost"})
print(re.text)
