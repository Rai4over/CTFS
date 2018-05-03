$(document).ready(function() {
    $("img").each(function() {
        var t = $(this)
          , i = t.attr("id");
        $.get("/get/image/" + i, function(i) {
            t.attr("src", i)
        })
    }),
    $("p").each(function() {
        var t = $(this)
          , i = t.attr("id");
        $.get("/get/text/" + i, function(i) {
            t.html(i)
        })
    });
    var j = '/admin_area';
    $("h2").each(function() {
        var t = $(this)
          , i = t.attr("id");
        $.get("/get/title/" + i, function(i) {
            t.html(i)
        })
    })
});
