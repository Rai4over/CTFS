import urllib.parse
"""
a = open('hahaha.txt', 'r')
b = open('233.txt', 'w')
for line in a:
    if (line.find('GET') != -1):
        b.write(line)
a.close()
b.close()
"""
"""
a = open('233.txt', 'r')
b = open('flag.txt', 'w')
for line in a:
    if (line.find('ctf.flag') != -1):
        b.write(urllib.parse.unquote(line))
a.close()
b.close()
"""
log = open('flag.txt', 'r')
i = 1
flag = ''
f = 0
for eachLine in log:
    pos = eachLine.find('LIMIT 0,1)')
    result = urllib.parse.unquote(eachLine[pos + 11:])
    poss = result.find(',')
    index = result[:poss]
    if (index != i):
        i = index
        if (i == '1'):
            flag += ''
        elif (i == '2'):
            flag += chr(int(f) + 1)
        elif (i == '4'):
            flag += chr(int(f) + 1)
        elif (i == '5'):
            flag += chr(int(f) + 1)
        elif (i == '7'):
            flag += chr(int(f) + 1)
        elif (i == '8'):
            flag += chr(int(f) + 1)
        elif (i == '12'):
            flag += chr(int(f) + 1)
        elif (i == '23'):
            flag += chr(int(f) + 1)
        elif (i == '16'):
            flag += chr(int(f) + 1)
        elif (i == '19'):
            flag += chr(int(f) + 1)
        elif (i == '20'):
            flag += chr(int(f) + 1)
        elif (i == '26'):
            flag += chr(int(f) + 1)
        else:
            flag += chr(int(f))
    posss = result.find('>')
    possss = result.find(' HTTP')
    index2 = result[posss + 1:possss]
    f = index2
print(flag)
log.close()
