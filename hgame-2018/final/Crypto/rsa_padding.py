#!/usr/bin/env python
# -*- coding=utf-8 -*-

from Crypto.Util.number import getPrime, GCD, bytes_to_long
from hashlib import sha256, md5
import random
import signal
import sys, os

signal.alarm(20)

m = b"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
n = 15659806177242665139105967702477126081323001823914559158295435582272275103388118647964276598819142247394178155833556536096545645559219141628185322759770017011026190031699768301104873658776912260745688847884743776915378657634393495514537196263519943286016975232202737864381577212134433409087467763401920907818923353446159400919908179080424603768117595060296629408018922101342985124289203202753330558918264609134117112972335672156975601375010952794999635241445069111001285384624542398803898899452179564057032735725094543588044814779313206465519954134913250626253851044813674145912132165976014272596705542568033234359971L
e = 3

def welcom():
        batch = """
_|_|_|      _|_|_|    _|_|          _|_|_|    _|_|    _|      _|  _|_|_|_|
_|    _|  _|        _|    _|      _|        _|    _|  _|_|  _|_|  _|
_|_|_|      _|_|    _|_|_|_|      _|  _|_|  _|_|_|_|  _|  _|  _|  _|_|_|
_|    _|        _|  _|    _|      _|    _|  _|    _|  _|      _|  _|
_|    _|  _|_|_|    _|    _|        _|_|_|  _|    _|  _|      _|  _|_|_|_|
"""
        print(batch)

def proof():
        strings = "abcdefghijklmnopqrstuvwxyzWOERFJASKL"
        prefix = "".join(random.sample(strings, 6))
        starwith = str(random.randint(10000, 99999))
        pf = """
sha256("%s"+str).hexdigest().startswith("%s") == True
Please give me str
"""%(prefix, starwith)
        print(pf)
        s = input().strip()
        if sha256((prefix+s).encode()).hexdigest().startswith(starwith):
                return True
        else:
                return False

def cmd():
        help = """
1. get code
2. get flag
Please tell me, what you want?
"""
        while True:
                print(help)
                c = input().strip()
                if c == "1":
                        return True
                elif c == "2":
                        return False
                else:
                        print("Enter Error!")

def main():
        if not proof():
                print("Check Failed!")
                return
        welcom()
        if cmd():
                f = open("~/crypto/file.py")
                print(f.read())
                return
        mm = bytes_to_long(m)
        assert pow(mm, e) != pow(mm, e, n)
        sys.stdout.write("Please give me a padding: ")
        padding = bytes_to_long(os.urandom(6))
        c = pow(mm+padding, e, n)
        print("Your Ciphertext is: %s"%c)

if __name__ == '__main__':
        try:
                main()
        except:
                os._exit(-1)
        # main()