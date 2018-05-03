<?php
highlight_file('index.txt');
$url = "https://sqlchop.chaitin.cn/demo/detect/";
$sqlque = 'select 1 from dual where 1=';
if(isset($_GET['a']))
$payload = str_replace(';','',(string)$_GET['a']);
else
$payload = '1';
$postd = array('type'=>'body','content_type'=>'application/x-www-form-urlencoded','payload'=>urlencode($payload));
$post_data = json_encode($postd);
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS,$post_data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($post_data))
);

$result = curl_exec($ch);
$arr = json_decode($result,true);
if(!array_key_exists('attack',$arr)||$arr['attack']>0)
 die('error!');
if(preg_match('/from|@|information_schema|\./is',$payload))
  die('hacker?');
$sql = "mysql -u****** -p****** -e ".escapeshellarg($sqlque.$payload);
exec($sql,$aa);
var_dump($aa);
?>