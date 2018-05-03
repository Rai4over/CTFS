# -*- coding:utf-8 -*- 
import SocketServer
from Crypto import Random
from Crypto.Util.number import getPrime


p = getPrime(1024)
q = getPrime(1024)
N = p * q


class ThreadedTCPServer(SocketServer.ThreadingMixIn, SocketServer.TCPServer):
    pass


class MyTCPHandler(SocketServer.BaseRequestHandler):
    def handle(self):
        self.request.sendall("Welcome to rsa encrypt system\nHere is your N: {}\n".format(N))
        self.request.sendall("Now give me e: ")
        e = self.request.recv(1024).strip()
        e = int(e, 10)
        with open('flag.txt', 'rb') as f:
            flag = int(f.read().encode('hex'), 16)
            if pow(flag, e, N) != pow(flag, e):
                self.request.sendall("youy cipher text : {}\n".format(pow(flag, e, N)))
            else:
                self.request.sendall("somethin error")


if __name__ == "__main__":
    HOST, PORT = "0.0.0.0", 7777
    server = ThreadedTCPServer((HOST, PORT), MyTCPHandler)
    server.serve_forever()
