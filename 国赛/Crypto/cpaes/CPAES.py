from aes import AES as baes
from Crypto.Cipher import AES
from os import urandom

class Unbuffered(object):  
   def __init__(self, stream):  
       self.stream = stream  
   def write(self, data):  
       self.stream.write(data)  
       self.stream.flush()  
   def __getattr__(self, attr):  
       return getattr(self.stream, attr)  
import sys  
sys.stdout = Unbuffered(sys.stdout)  

def cyberpeaceaes(secret,imp):
    i=int(imp.encode("hex"),16)
    A = baes(i)
    plaintext = int(secret.encode("hex"),16)
    encrypted = A.encrypt(plaintext)
    return encrypted


def main():
    print "cyberpeace AES"
    flag=open("/flag","r").read().strip()
    if len(flag)%16!=0:
        flag+="1"*(16-len(flag)%16)
    secret=urandom(16)
    handle=AES.new(secret)
    print handle.encrypt(flag).encode("hex")
    n=0xaef6c4b670f66567d90847d0b8b28d927297690b867f8a7761db7dcf1c228963a54241b3bdb074e712c8cfd453535e84447e7be3f743c8a26794370d63789dd53814f70a3affbac8030c3262b9df6ef5c918ee73d1a599f27687fdb42324b7bee9038ee8ce5bc70e1cf747161ef67b773acee0a7072ecc802dbc6e7645a6fc54893f6dbc10d03da126228ecbd08fa6a605a14585fddc917bd62e7f9224c0440903143e440498df2b14254bb1c19f8545d0148d5e28f664279fcf62176858ea8ad1ba0723c87c886016a8e916ecdea98493281a5715a48ed5646f3f133495fd6a892b8a87e1d2798a9ae7b1d51484c28aa22db3d519f0a86e174426db22018735L
    e=65537
    m=int(secret.encode("hex"),16)
    c=pow(m,e,n)
    print hex(c)[2:-1]
    imp=urandom(16)
    print hex(cyberpeaceaes(secret,imp))[2:-1]

    for i in range(8096):
        a=raw_input()
        b=a.decode("base64")
        assert len(b)==16
        print hex(cyberpeaceaes(a,imp))[2:-1]

main()
