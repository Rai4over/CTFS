# -*- coding: UTF-8 -*-
# 文件名：client.py

import socket               # 导入 socket 模块
import gmpy2 as gm
import hashlib
import agree
import flag

def main():
    s = socket.socket()
    s.connect((agree.host, flag.port))
    print "connecting..."
    a = gm.mpz_rrandomb(agree.seed, 20)
    A = gm.powmod(agree.g, a, agree.N)
    message = agree.I + "," + str(A).encode("base_64").replace("\n", "") + "\n"
    s.send(message)
    message = s.recv(1024)
    message = message.split(",")
    salt = int(message[0].decode("base_64"))
    B = int(message[1].decode("base_64"))
    uH = hashlib.sha256(str(A) + str(B)).hexdigest()
    u = int(uH, 16)
    # xH = hashlib.sha256(str(salt) + "wrong_password").hexdigest()
    xH = hashlib.sha256(str(salt) + flag.password).hexdigest()
    x = int(xH, 16)
    S = B - agree.k * gm.powmod(agree.g, x, agree.N)
    S = gm.powmod(S, (a + u*x), agree.N)
    K = hashlib.sha256(str(S)).hexdigest()
    h = hashlib.sha256(K + str(salt)).hexdigest() + "\n"
    s.send(h)
    message = s.recv(1024)
    print message

    s.close()

if __name__ == "__main__":
    main()
