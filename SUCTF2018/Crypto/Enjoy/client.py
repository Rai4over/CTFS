#coding: UTF-8
import socket
# import flag
from Crypto.Cipher import AES

def padding(message):
    toPadByte = 16 - len(message) % 16
    paddedMessage = message + chr(toPadByte) * toPadByte
    return paddedMessage

def encrypt(plain):
    # key = flag.flag[5:-1]
    key = "iv=key_is_danger"
    assert len(key) == 16
    iv = key
    plain = padding(plain)
    aes = AES.new(key, AES.MODE_CBC, iv)
    cipher = aes.encrypt(plain)
    cipher = cipher.encode("base_64")
    return cipher

def runTheClient():
    s = socket.socket()
    # host = socket.gethostname()  # set this to the host's IP address
    # port = flag.port
    host = "game.suctf.asuri.org"
    port = 10003
    plain = "blablabla_" + "I_enjoy_cryptography" + "_blablabla"
    cipher = encrypt(plain)

    s.connect((host, port))
    s.send(cipher)
    print s.recv(1024).strip()
    s.close()

if __name__ == "__main__":
    runTheClient()