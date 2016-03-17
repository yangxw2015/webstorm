(function () {
    var dataAry = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"]
    //数据绑定
    var oBox = document.getElementById("box");

    function initData() {
        var str = "";
        str += "<ul class='img'>";
        for (var i = 0; i < dataAry.length; i++) {
            str += "<li>";
            str += "<img src='" + dataAry[i] + "' alt=''/>";
            str += "</li>"
        }
        str += "</ul>";
        str += "<ul class='point'>";
        for (var i = 0; i < dataAry.length; i++) {
            str += "<li>";
            str += "</li>"
        }
        str += "</ul>";
        oBox.innerHTML = str;
    }
    initData();
    var btnL=document.createElement("div");
    oBox.appendChild(btnL);
    btnL.setAttribute("class","btn btnL");
    btnL.innerHTML="&lt";
    var btnR=document.createElement("div");
    oBox.appendChild(btnR);
    btnR.setAttribute("class","btn btnR");
    btnR.innerHTML="&gt";
    /*var point=document.getElementsByClassName("point");
    var oList=point.getElementsByTagName("li");
    console.log(oList);*/


})();