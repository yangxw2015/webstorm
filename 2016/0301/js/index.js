$("li").click(function (e) {
    $(this).addClass("select").siblings().removeClass("select");
    var index = $(this).index();

    $(this).parent().siblings().eq(index).addClass("selected").siblings().removeClass("selected");
});


