<?php
$BlackList = array('asp','php','jsp','php5','asa','aspx','cer','cgi','phtml','ashx','asmx');
$name = $_FILES['file']['name'];
$extension = substr(strrchr($name,"."),1);
$boo = false; 
$filepath=dirname(__FILE__).'/87194f13726af7cee27ba2cfe97b60df/' ;
if (isset($_POST["submit"])){
	foreach ($BlackList as $key=>$value){  
		if ($value==$extension){
			$boo=true;  
			break;  
			}  
		} 
	 if(!$boo){
		$size=$_FILES['file']['size'];  
		$tmp=$_FILES['file']['tmp_name'];
		$time=intval(time());
		$name=$time.'.'.$extension;
		move_uploaded_file($tmp,$filepath.$name); 
		echo $name;  
			}else {  
		echo "no no no...";  
			}  
			  
		}  
	
?>