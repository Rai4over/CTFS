<?php
namespace Index\Helper;

use Index\Helper\Flag;
use Index\Helper\UUID;

defined('ACCESS_FILE') or exit('No direct script access allowed');
class Test
{

    public $user_uuid;
    public $fl;

    public function __construct()
    {
        echo 'hhkjjhkhjkhjkhkjhkhkhk';
    }

    public function __destruct()
    {
        $this->getflag('ctfuser', $this->user_uuid);
        // $this->setflag('ctfuser', $this->user_uuid);
    }

    public function setflag($m = 'ctfuser', $u = 'default', $o = 'default')
    {
        $user=array(
            'name' => $m,
            'oldid' => $o,
            'id' => $u
        );
        // var_dump($user);

        echo $this->fl->set($user, 2);
    }

    public function getflag($m = 'ctfuser', $u = 'default')
    {
        //TODO: check username
        $user=array(
            'name' => $m,
            'id' => $u
        );
        //懒了直接输出给你们了
        echo 'DDCTF{'.$this->fl->get($user).'}';
    }
}

