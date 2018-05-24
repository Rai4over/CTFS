# -*- coding:utf-8 -*-
from pwn import *
import hashpumpy
from urlparse import parse_qsl
context.log_level = 'debug'

r = remote('cpushop.2018.teamrois.cn', 43000)

r.recvuntil('Command: ')
r.sendline('2')
r.recvuntil('Product ID: ')
r.sendline('8')
order = r.recvuntil('Money:')[12:-6].rstrip()
# print parse_qsl(order)
md51 = parse_qsl(order)[-1][-1]

for i in range(100):
	data = hashpumpy.hashpump(md51, order[:-70], '&product=Flag&price=1', i)
	# print data
	r.sendline('3')
	r.recv()
	r.sendline(data[1] + "&sign=" + data[0])
	res = r.recvuntil('\n')
	if "Your current money" in res:
		r.interactive()

r.close()

# &sign=7f6367b0c2a1dc7a216a8a6761a9e8f010fba470ecbce632abc62db41d42d207
# &product=Flag&price=1
# RCTF{ha5h_l3ngth_ex7ens10n_a77ack_1s_ez}