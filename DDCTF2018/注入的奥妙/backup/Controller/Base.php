<?php
namespace Index\Controller;

// use Index\Database\Dbconfig;
use Index\Database\DbConnect;
use Index\Helper\Response;
use Index\Helper\Security;
use Index\Helper\Reflect;
use PDO;

defined('ACCESS_FILE') or exit('No direct script access allowed');
ini_set('display_errors', '1');
error_reporting(E_ALL ^ E_NOTICE);

class Base
{
    protected $dbc;
    protected $tpl;
    protected $sec;
    protected $ref;
    protected $pdo;

    protected function __construct()
    {
        $this->dbc = new DbConnect();
        $this->sec = new Security();
        $this->tpl = new Response();
        $this->ref = new Reflect();
        $this->pdo =  $this->dbc->getPDO();
    }
}
