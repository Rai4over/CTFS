<?php
/**
 * Created by PhpStorm.
 * User: meizj
 * Date: 2018/2/2
 * Time: 下午11:00
 */
class ImageView{
    private $filename = "";
    function __construct($name){
        $this->filename = "images/$name";
        $this->createThumbnail();
    }
    function createThumbnail(){
        $e = stripcslashes(preg_replace('/[^0-9\\\]/','',isset($_GET['size'])?$_GET['size']:25));
        system("/usr/bin/convert {$this->filename} --resize $e ./thumbs/{$this->filename}");
    }
    function __toString()
    {
        // TODO: Implement __toString() method.
        return "<a href={$this->filename}>
                <img src=./thumbs/{$this->filename}></a>";
    }
}

class Home{
    private $dir = "";
    public function __construct($dir){
        $this->dir = $dir;
    }
    public function showImg(){
        $files = $this->getDirFile($this->dir);
        foreach ($files as $file){
            echo "<img src=$file>";
        }
    }
    public function getDirFile($dir){
        $files = array();
        if(!is_dir($dir)) {
            return $files;
        }
        $handle = opendir($dir);
        if($handle) {
            while(false !== ($file = readdir($handle))) {
                if ($file != '.' && $file != '..') {
                    $filename = $dir . "/"  . $file;
                    if(is_file($filename)) {
                        
                            $files[] = $filename;
                        
                    }else {
                        $files = array_merge($files, get_files($filename));
                    }
                }
            }   //  end while
            closedir($handle);
        }
        return $files;
    }

}