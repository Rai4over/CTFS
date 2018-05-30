import base64
from Crypto.Util.strxor import strxor

def get_hamming_distance(x, y):
    return sum([bin(ord(x[i]) ^ ord(y[i])).count('1') for i in range(len(x))])

s1 = "this is a test"
s2 = "wokka wokka!!!"
print get_hamming_distance(s1, s2)