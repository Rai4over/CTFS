import requests,binascii
url = "http://119.29.138.57:23333/crypto/encode_system/index.php"
re = requests.post(url,{"message":"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"})
print(re.text)
a = re.text[1043:]
b = a[:-3]
print(b)
c = binascii.b2a_hex(b.encode('utf-8'))
print(c)




