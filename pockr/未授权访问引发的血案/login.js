define(function (require, exports, module) {
    
    $("#emailsubmit").click(function () {
       
        var email = $("#forgotemail").val();
        var url ='Admin_Pockr_login/forgorpwd_action';
        var myreg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

        if(email.length==0){
            alert('邮箱不能为空!');
        } else if (!myreg.test(email)){
            alert('邮箱格式不正确!');
        }else{
            $.post(url, { email: email }, function (resultJSONObject) {
                if (resultJSONObject.message) {
                    alert("success");
                } else {
                    alert("failed");
                }
            }, "json");
        }
     });

})
