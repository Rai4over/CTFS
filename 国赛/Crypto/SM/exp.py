# -- coding:utf-8 -*-
from Crypto.Util.number import getPrime, isPrime, long_to_bytes, bytes_to_long
from Crypto.Cipher import AES
import hashlib
import base64

r = 6753785483255906709117615805253027649453460653974415214642466102672301763943358839905575042938258141827000621474498066533397472809407687579125519939754658
r = bin(r)[2:]
print r

pin = []

# 通过ps推算order的顺序
ps = []
with open('ps', 'r') as f:
    all_data = f.readlines()
    for line in all_data:
        # print bin(int(j.strip()))[2:]
        k = 1
        line = bin(int(line.strip()))[2:]
        while 1: 
            if line[-k] == '1':
                # print k
                ps.append(k)
                break
            k += 1

print ps

# 逐位计算 获取参与异或的数
with open('ps', 'r') as f:
    all_data = f.readlines()
    for k in range(1, 512):
        tmp = 0
        if pin:
            for l in pin:
                tmp ^= int(bin(int(all_data[ps.index(l)].strip()))[2:][-k])
        tmp ^= int(bin(int(all_data[ps.index(k)].strip()))[2:][-k])
        # print k, int(bin(int(all_data[ps.index(k)].strip()))[2:][-k]), tmp, r[-k]
        if int(tmp) == int(r[-k]):
            pin.append(k)
    print "pin:{}".format(pin)
    
# 找到参与异或的数在ps中的位置 还原key
num = ['0'] * 512
for l in pin:
    i = ps.index(l)
    num[i] = '1'
num = ''.join(num)
num = int(num, 2)
print isPrime(num)
# num = 11400599473028310480620591074112690318799501642425666449519888152497765475409346201248744734864375690112798434541063767944755958258558428437088372812844657

key=long_to_bytes(int(hashlib.md5(long_to_bytes(num)).hexdigest(),16))
aes_obj = AES.new(key, AES.MODE_ECB)
ef = "5eFo3ANg2fu9LRrFktWCJmVvx6RgBFzd0R8GXQ8JD78="
flag = aes_obj.decrypt(ef.decode('base64'))
print flag
# flag{shemir_alotof_in_wctf_fun!}
