import binascii
from Crypto.Util.strxor import strxor

"""
input: 
Burning 'em, if you ain't quick and nimble
I go crazy when I hear a cymbal
output:
0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272
a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f
"""

def repeat_key_xor(data, key):
    key = (key * (len(data) / len(key) + 1))[:len(data)]
    return strxor(data, key)

s = """Burning 'em, if you ain't quick and nimble
I go crazy when I hear a cymbal
"""
key = "ICE"

print repeat_key_xor(s, key).encode('hex')
