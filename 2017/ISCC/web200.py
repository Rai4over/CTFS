import requests
import pycipher
def caesar(m):
    res = ''
    for i in range(len(m)):
        c = m[i:i+1]
        if c.isupper():
            res += pycipher.Caesar(6).encipher(c)
        elif c.islower():
            res += pycipher.Caesar(6).decipher(c).lower()
        else:
            res += c
    return res
a = "YToyOntpOjA7czozOiJwaHAiO2k6MTtzOjEwOiIxMzUxNzczMTk0Ijt9"
print caesar(a)