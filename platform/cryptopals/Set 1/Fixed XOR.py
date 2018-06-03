from Crypto.Util.strxor import strxor

print strxor('1c0111001f010100061a024b53535009181c'.decode('hex'), '686974207468652062756c6c277320657965'.decode('hex')).encode('hex')