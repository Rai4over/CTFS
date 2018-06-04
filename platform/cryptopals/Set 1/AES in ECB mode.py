from Crypto.Cipher import AES
import base64


ciphertext = base64.b64decode(open('7.txt', 'r').read())
key = "YELLOW SUBMARINE"

cipher = AES.new(key, AES.MODE_ECB)
plaintext = cipher.decrypt(ciphertext)

print plaintext
