$(function () {
    //手动控制轮播
    var size = $(".img li").size();
       /* for (var i = 1; i <= size; i++) {
            var li = "<li>" + i + "</li>";
            $(".point   ").append(li);
        }*/


    $(".img li").eq(0).show();
    $(".img li").eq(0).addClass("select");
    $(".point li").mouseover(function () {
        $(this).addClass("select").siblings().removeClass("select");
        var index = $(this).index();
        i = index;
        $(".img li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    })
    var i = 0;
    var t = setInterval(move, 2500);
    $(".point li:nth-child(1)").addClass("select").siblings().removeClass("select");
    //向右移动
    function move() {
        i++;
        if (i == size) {
            i = 0;
        }
        $(".point li").eq(i).addClass("select").siblings().removeClass("select");
        $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    //向左移动
    function moveL() {
        i--;
        if (i == -1) {
            i = size - 1;
        }
        $(".point li").eq(i).addClass("select").siblings().removeClass("select");
        $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    //右边点击
    $(".box .btnR").click(function () {
        move();
    })
    $(".box .btnL").click(function () {
        moveL();
    })


    $(".box").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(move, 2500);
    })


});