import binascii
import string
from Crypto.Util.strxor import strxor_c


freqs = {
    "a": 8.167,
    "b": 1.492,
    "c": 2.782,
    "d": 4.253,
    "e": 12.702,
    "f": 2.228,
    "g": 2.015,
    "h": 6.094,
    "i": 6.966,
    "j": 0.153,
    "k": 0.772,
    "l": 4.025,
    "m": 2.406,
    "n": 6.749,
    "o": 7.507,
    "p": 1.929,
    "q": 0.095,
    "r": 5.987,
    "s": 6.327,
    "t": 9.056,
    "u": 2.758,
    "v": 0.978,
    "w": 2.360,
    "x": 0.150,
    "y": 1.974,
    "z": 0.074,
    " ": 20.0
}


def score(s):
    counts = {}
    for i in string.ascii_lowercase + ' ':
        counts[i] = s.count(i)

    score = 0.0
    for i in s:
        i = i.lower()
        if i in freqs:
            score += freqs[i] * counts[i]
    return score/len(s)


def break_single_xor(data):
    def key(s):
        return score(s[1])
    return max([(i, strxor_c(data, i)) for i in range(256)], key=key)


def detect_single_xor(data):
    def key(s):
        return score(s[1])
    tmps = [break_single_xor(binascii.unhexlify(d.strip())) for d in data] 
    res = max(tmps, key=key)
    return res


with open('4.txt', 'r') as f:
    all_data = f.readlines()
    f.close()

print detect_single_xor(all_data)
