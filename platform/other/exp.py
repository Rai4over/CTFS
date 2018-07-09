# Need a little luck, Average dozen times can get flag
from pwn import *
from Crypto.Util.strxor import strxor
import binascii
context.log_level = 'debug'
bs = 16


def pad(s):
    return s + (bs - len(s) % bs) * chr(bs - len(s) % bs)


data = 'a'
r = remote("cryptoctf.club", 10001)
r.recvuntil(":>>")
r.sendline("r")
r.recvuntil(":>>")
r.sendline(data)
cipher = r.recv(1024).split("\n")[1]
r.sendline("c")
r.recvuntil(":>>")
r.sendline(data + "user")
user_hash = r.recv(1024).split("\n")[0]
r.sendline("c")
r.recvuntil(":>>")
r.sendline("admin")
admin_hash = r.recv(1024).split("\n")[0]

cipher = binascii.unhexlify(cipher)
iv = cipher[:bs]
mac = cipher[bs:4 * bs]
ciphertext = cipher[4 * bs:]
# print iv, mac, ciphertext
user_hash = binascii.unhexlify(user_hash)
admin_hash = binascii.unhexlify(admin_hash)

mid_enc = strxor(iv, pad("auser"))
new_iv = strxor(mid_enc, pad("admin"))

mid_mac_3 = strxor(mac[16:32], '\x10' * 16)
cipher_mac_2 = strxor(mid_mac_3, admin_hash[-15:] + '\x01')
new_mac = mac[:16] + cipher_mac_2 + mac[-16:]

new_data = new_iv + new_mac + ciphertext
new_data = binascii.hexlify(new_data)
r.sendline("l")
r.recvuntil(":>>")
r.sendline(new_data)
data = r.recv().split('\n')[1].split(',')[1][2:36]
# print data

mid_mac_2 = strxor(mac[:16], binascii.unhexlify(data)[1:])
cipher_mac_1 = strxor(mid_mac_2, admin_hash[1:17])
new_mac = cipher_mac_1 + cipher_mac_2 + mac[-16:]
new_data = new_iv + new_mac + ciphertext
new_data = binascii.hexlify(new_data)
r.sendline("l")
r.recvuntil(":>>")
r.sendline(new_data)
res = r.recv()
# r.interactive()
r.close()