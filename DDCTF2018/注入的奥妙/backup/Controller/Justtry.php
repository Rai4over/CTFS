<?php
namespace Index\Controller;

use GuzzleHttp\Client;
use Index\Helper\Test;
use Index\Helper\Flag;

defined('ACCESS_FILE') or exit('No direct script access allowed');
// ini_set('display_errors', '1');
// error_reporting(E_ALL ^ E_NOTICE);

class Justtry extends Base
{
    private $white = array('test', 'well','base','justtry');
    public $flag;
    public function __construct()
    {
        parent::__construct();
        // $this->flag=new Test();
    }


    public function self($a='')
    {
        // echo $a;

        if (!in_array(strtolower($a), $this->white)) {
            exit('类不存在');
        }

        $res=$this->ref->getclassall($a);

        if (isset($res)) {
            echo $res;
        }
    }

    public function try($serialize)
    {
        unserialize(urldecode($serialize), ["allowed_classes" => ["Index\Helper\Flag", "Index\Helper\SQL","Index\Helper\Test"]]);
    }


    //
    public function send()
    {
        $client = new Client([
            // Base URI is used with relative requests
            'base_uri' => 'http://httpbin.org',
            // You can set any number of default request options.
            'timeout'  => 2.0,
        ]);
    }


    //echo
    //
}
