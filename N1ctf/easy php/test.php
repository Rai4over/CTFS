<?php
function get_column($columns){

    if(is_array($columns))
        $column = ' `'.implode('`,`',$columns).'` ';
    else
        $column = ' `'.$columns.'` ';

    return $column;
}
$values = array("123","345","1`","qwe");
$value = '('.preg_replace('/`([^`,]+)`/','\'${1}\'',get_column($values)).')';
echo $value;