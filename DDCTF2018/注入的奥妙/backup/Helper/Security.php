<?php
namespace Index\Helper;

defined('ACCESS_FILE') or exit('No direct script access allowed');
class Security
{
    public function checkSql($str)
    {
        $check= preg_match('/\'|\"|,|%|_|~|-|select|insert|drop|create|from|update|delete|union|into|load_file|outfile|dumpfile|or|\/\*/i', $str);
        if ($check) {
            exit("The sql was not allowed.");
        }

        $newstr="";
        while ($newstr!=$str) {
            $newstr=$str;
            $str = str_replace("union", "", $str);
            $str = str_replace("update", "", $str);
            $str = str_replace("into", "", $str);
            $str = str_replace("exec", "", $str);
            $str = str_replace("select", "", $str);
            $str = str_replace("delete", "", $str);
            $str = str_replace("declear", " ", $str);
            $str = str_replace("insert", "", $str);
        }
        return $str;
    }

    //
    public function replaceStr($str)
    {
        $str= preg_replace('/\>|\<|\r|\n|\x00|\x1a|\/\*|extractvalue|updatexml|hex|unhex|union|join|update|delete|insert|into|alter|load_file|outfile|dumpfile|drop|create|database|like/is', '', $str);
        // innodb引擎不用考虑这些绕过方式
        //$str= preg_replace('/geometrycollection|multipoint|polygon|multipolygon|linestring|multilinestring|exp/is', '', $str);
        $str= preg_replace('/userflag|username|uuid|users/is', '', $str);
        $str= addslashes($str);
        // $str= preg_replace(
        //     array('/\'/is','/\"/is','/\\\\/is'),
        //     array("\\'",'\\"','\\\\'),
        //     $str
        // );
        return $str;
    }

    public function xssClean($vars, $noClearKey=array())
    {
        if (!is_array($vars)) {
            return htmlspecialchars(strip_tags(html_entity_decode($vars)), ENT_QUOTES, 'UTF-8', false);
        }
        if (empty($vars)) {
            return $vars;
        }

        foreach ($vars as $key=>&$pv) {
            if (!empty($noClearKey) && in_array($key, $noClearKey)) {
                continue;
            }
            $pv = $this->xssClean($pv, $noClearKey);
        }
        return $vars;
    }
}
