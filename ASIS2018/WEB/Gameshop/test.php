<?php


class Affimojas
{

}

class Neptune
{
    public $username = "";
    public $password = "";
    public $waf;

    function __construct($username='123', string $password='') {
        // if($this->username) return;
        $this->username = $username;
        $this->password = $password;
        $this->waf = new Affimojas();
        $this->save();
    }

    function save() {
        echo serialize($this);
    }
}

// $a = new Neptune();