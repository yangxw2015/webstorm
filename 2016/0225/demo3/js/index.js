$(function(){
    var index=window.location.href.split("/").length-1;
    var href=window.location.href.split("/")[index].substr(0,4);
    $("ul li a[href^='"+href+"']").addClass("select");

    var li_width = $("ul li a.select").outerWidth();
    console.log(li_width);
    var li_left = $("ul li a.select").position().left;
    console.log(li_left);
    $("nav .line").css({width: li_width, left: li_left});


    $("ul li").hover(function () {
        var li_width = $(this).outerWidth();
        var li_left = $(this).position().left;
        $("nav .line").stop().animate({width: li_width, left: li_left}, {duration: 1500, easing: "easeOutElastic"})


    }, function () {

        $("nav .line").stop().animate({width: li_width, left: li_left}, {duration: 1500, easing: "easeOutElastic"})

    })
})