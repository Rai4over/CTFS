define(function (require, exports, module) {
    var $ = require('jquery');
    var url='User_Pockr_Api/UserInfo';
    var userid=$("#userid").val();
    $.post(url, { userid: userid }, function (resultJSONObject) {
        if (resultJSONObject.message) {
            $("$userinfo").append(resultJSONObject.username);
        } else {
            alert("error");
        }
    }, "json");
})