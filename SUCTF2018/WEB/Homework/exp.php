<?php
function w_addslashes($string)
{
    return addslashes(trim($string));
}

$sig = "0x123132132";
$filehash = md5(mt_rand());
$a = "insert into file(filename,filehash,sig) values('" . w_addslashes('123') . "','" . $filehash . "'," . (strrpos(w_addslashes($sig), ")") ? "" : w_addslashes($sig)) . ")";

echo $a;
echo "\n";

$new_sig = mt_rand();
$b = "update file set sig='" . intval($new_sig) . "' where id=" . '123' . " and sig='" . $sig . "'";
echo $b;

