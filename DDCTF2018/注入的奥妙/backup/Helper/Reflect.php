<?php
namespace Index\Helper;

// use Loader;
use ReflectionClass;

defined('ACCESS_FILE') or exit('No direct script access allowed');
// require 'Loader.php';
class Reflect
{

    protected $result;
    public function getclassall($class)
    {


        $class='Index\Controller\\'.ucfirst($class);
        try {
            $r = new ReflectionClass($class);
            // var_dump(new ReflectionClass($class));
        } catch (ReflectionException $e) {
            die("Error!:".$e->getMessage().'<br>');
        }
        foreach ($r->getMethods() as $key => $methodObj) {
            if ($methodObj->isPrivate()) {
                $methods[$key]['type'] = 'private';
            } elseif ($methodObj->isProtected()) {
                $methods[$key]['type'] = 'protected';
            } else {
                $methods[$key]['type'] = 'public';
            }
            $methods[$key]['name'] = $methodObj->name;
            $methods[$key]['class'] = $methodObj->class;
        }
        // $result=$methods;
        // $result[]=array('filename'=>$r->getFileName());
        // $result[]=array('export'=>$r->export());
        return $r->export($class, true);
        // return $r->__toString();
    }
}
