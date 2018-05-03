<?php
$a = ['admin', 'oloco'];
$b = [];
var_dump($a === $b & $b[0] != 'admin');
var_dump($a === $b);
var_dump($b[0] != 'admin');