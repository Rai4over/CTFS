with open('./file.txt', 'rb') as f:
    data = f.read()
    # print data
    times = {}
    for i in data:
        try:
            times[i] += 1
        except:
            times[i] = 1
    # print times

print sorted(times.items(), key=lambda item:item[1], reverse=True)

# DDCTF{x1n9shaNgbIci}
