<?php
namespace Index\Database;

defined('ACCESS_FILE') or exit('No direct script access allowed');

class DbConfig
{
    private $db=array();
    private $dsn;
    private $password;
    private $username;
    //
    public function getDefault()
    {
        $this->dsn      ='mysql:host=mysql;dbname=aq_db;charset=utf8mb4';
        $this->username ='root';
        $this->password ='';

        $this->db['default'] = array(
            'dsn'=> $this->dsn,
            'username'=> $this->username,
            'password'=> $this->password,
        );
        return  $this->db['default'];
    }

    public function getSqli()
    {
        $this->dsn      ="mysql:host=mysql;dbname=sqli";
        $this->username ="hack";
        $this->password ="hkaW2@dsndxh";
        $this->db['sqli'] = array(
            'dsn'=> $this->dsn,
            'username'=> $this->username,
            'password'=> $this->password,
        );
        return  $this->db['sqli'];
    }

    public function getFlag()
    {
        $this->dsn      ="mysql:host=mysql;dbname=flag";
        $this->username ="walts";
        $this->password ="hiaS23ci@nd#";
        $this->db['flag'] = array(
            'dsn'=> $this->dsn,
            'username'=> $this->username,
            'password'=> $this->password,
        );
        return  $this->db['flag'];
    }
}
