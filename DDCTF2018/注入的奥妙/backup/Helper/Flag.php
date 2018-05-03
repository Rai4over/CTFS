<?php
namespace Index\Helper;

use PDO;
use Index\Helper\SQL;

defined('ACCESS_FILE') or exit('No direct script access allowed');
class Flag
{
    public $sql;

    //
    public function __construct()
    {
        $this->sql=new SQL();
    }

    //
    public function get($user)
    {

        $tmp=$this->sql->FlagGet($user);
        if ($tmp['status']===1) {
            return $this->sql->FlagGet($user)['flag'];
        }
    }
}
