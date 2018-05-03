var system = require("system");
var fs = require("fs");
var page = require("webpage").create();
var url = system.args[1];
var timeout = 2000;

var secret = fs.read("/phantomjs/secret.txt");

phantom.addCookie({
	"name"     : "secret",
	"value"    : secret,
	"domain"   : "injection.trich.im",
	"path"     : "/",
	"httponly" : true,
	"secure"   : false,
	"expires"  : (new Date()).getTime() + (1000 * 60 * 60)
});

page.onAlert = function(msg) {
	console.log('ALERT: ' + msg);
};

page.onResourceRequested = function(requestData, networkRequest) {
	console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};

page.settings.resourceTimeout = timeout;
page.onResourceTimeout = function(e) {
	phantom.exit();
};

page.open(url, function(status) {
    if(status === "success")
    	console.log("Oke babe");

    setTimeout(
    	function() {
    		phantom.exit();
    	}, 
    	timeout
    );
});