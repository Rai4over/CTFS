import base64
a = "U0VRID0gMTM7IERBVEEgPSAweDNiMDRiMjZhMGFkYWRhMmY2NzMyNmJiMGM1ZDZMOyBTSUcgPSAweDJlNWFiMjRmOWRjMjFkZjQwNmE4N2RlMGIzYjRMOw=="
b = base64.b64decode(a)
print b
n1 = 0x53a121a11e36d7a84dde3f5d73cf
n2 = 0x99122e61dc7bede74711185598c7
print int(n1)
print int(n2)