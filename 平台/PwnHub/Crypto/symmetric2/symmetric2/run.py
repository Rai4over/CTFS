from pyDes import *
import random


def xor_str(r,s):
	return ''.join(chr(ord(a) ^ ord(b)) for a,b in zip(s,r))

def _example_des_():
	print ("Prove to me that you know basic cryptanalysis!")
	print ("")
	k = des("xxxxxxxx")#this is flag
	for i in range(100):
		r=''
		for ii in range(8):
			r=r+chr(random.randint(0,255))
		print ("r     : %r" % r)
		print ("Encrypted r: %r" % k.encrypt(r))


	


if __name__ == '__main__':
	_example_des_()

