<?php //decode by 小猪php解密 QQ:2338208446 http://www.xzjiemi.com/ ?>
<?php
if($_FILES) {
    include 'UploadFile.class.php';
    $dist = 'upload';
    $upload = new UploadFile($dist, 'upfile');
    $data = $upload->upload();
}
?><!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pwnhub6669</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Armata">
    <link rel="stylesheet" href="assets/css/Responsive-feedback-form.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>
    <div class="container" style="margin-top:51px;">
        <div id="form-div" style="margin-right:50px;margin-left:50px;">
            <form method="post" enctype="multipart/form-data">
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="text-center" style="font-family:Armata, sans-serif;font-size:30px;"><strong>File Upload</strong></h1></div>
                    </div>
                    <hr id="hr" style="background-color:#c3bfbf;">

                    <?php if(!empty($upload)): ?>
                    <div class="row text-center">
                        <?php if(!empty($data)): ?>
                        <img src="<?=$dist.'/'.$data['filename']?>" alt="<?=$data['name']?>">
                        <?php else: ?>
                        <div class="col-xs-10 col-xs-offset-1">
                            <div class="alert alert-warning" role="alert"><?=$upload->error?></div>
                        </div>    
                        <?php endif; ?>
                    </div>
                    <hr id="hr" style="background-color:#c3bfbf;">
                    <?php endif; ?>
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <p style="font-family:Armata, sans-serif;font-size:22px;">File Name</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <input class="form-control" type="text" name="upfile" placeholder="默认使用文件名" style="font-size:15px;font-family:Armata, sans-serif;">
                        </div>
                    </div>
                    <div class="row" style="font-family:Armata, sans-serif;margin-top:10px;">
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <p style="font-family:Armata, sans-serif;font-size:22px;"><strong>File Upload</strong></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <input type="file" name="upfile">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <p class="text-right" style="font-family:Armata, sans-serif;">Allow One Image File</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-md-offset-5 col-sm-5 col-sm-offset-4 col-xs-9 col-xs-offset-1">
                            <button class="btn btn-warning" type="reset" style="font-family:Armata, sans-serif;font-size:14px;color:rgb(0,0,0);">Reset </button>
                            <button class="btn btn-success" type="submit" id="submit-btn" style="font-family:Armata, sans-serif;font-size:14px;color:rgb(0,0,0);">Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>