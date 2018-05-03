import socket
import time
s = socket.socket()
s.connect(('121.42.25.113', 20003))
time.sleep(0.5)
data = s.recv(1024)
print(data)
s.send(b'1\n')
data = s.recv(1024)
print(data)
s.send(b'5c1c1ac0dd7280539b459a85a625ee118eda0256f195eb0f3cfe5bc33acb533900000000000000000000000000000000\n')
data = s.recv(1024)
print(data)