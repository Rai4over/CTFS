import requests
import base64
import string

def flypig(a):
    flypig = "http://39.107.33.62:31928/flypig.php"
    data = {"secret": base64.b64encode(a)}
    # data = {"secret": a}
    res = S.post(url=flypig, data=data)
    return res.content


def addpig(pid, a):
    addpig = "http://39.107.33.62:31928/addpig.php"
    data = {"id": pid, "content": base64.b64encode(a)}
    res = S.post(url=addpig, data=data)
    return res.content

def freepig(pid):
    freepig = "http://39.107.33.62:31928/freepig.php"
    data = {"id": pid}
    res = S.post(url=freepig, data=data)
    return res.content


S = requests.Session()

login = "http://39.107.33.62:31928/login.php"
data = {"team": "icqd8e1541e0c9ab90e336e8afbeb22f",
        "username": "admin", "password": "I10ve3P|g~"}
res = S.post(url=login, data=data)
print res.content

# p I O S T U % ( ) < >
for i in string.printable:
    if addpig("1", i) == "Hacker":
        print i
