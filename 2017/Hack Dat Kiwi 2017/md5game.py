# -*- coding:utf-8 -*-
from ctfutils import *

head = "0e"

for i in range(100000, 1000000):
	if md5(head + str(i))[:2] == "0e":
		print head + str(i)
		break

