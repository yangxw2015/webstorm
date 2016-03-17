(function () {
    var dataAry1 = ["images/big_01.jpg", "images/big_02.jpg", "images/big_03.jpg", "images/big_04.jpg", "images/big_05.jpg", "images/big_06.jpg", "images/big_07.jpg", "images/big_08.jpg", "images/big_09.jpg", "images/big_10.jpg"];
    var dataAry2 = ["images/small_01.jpg", "images/small_02.jpg", "images/small_03.jpg", "images/small_04.jpg", "images/small_05.jpg", "images/small_06.jpg", "images/small_07.jpg", "images/small_08.jpg", "images/small_09.jpg", "images/small_10.jpg"];

    var box = document.getElementById("box");
    var smallImg = document.getElementById("smallImg");
    var listS = smallImg.getElementsByTagName("li");
    var listP=smallImg.getElementsByTagName("p");
    var bigImg = document.getElementById("bigImg");
    var listB=bigImg.getElementsByTagName("li");

    //数据绑定
    function initData() {
        var str = "";
        for (var i = 0; i < dataAry2.length; i++) {
            //拼接字符串
            str += "<li>";
            str += "<img src='" + dataAry2[i] + "'/>";
            str += "<p>";
            var num=parseFloat(i+1);
            if(num<=9){
                str +="0"+num;
            }else if(num>9){
                str +="0"+num;
            }
            str += "</p>";
            str += "</li>";
        }
        smallImg.innerHTML = str;

        var str1 = "";
        for (var i = 0; i < dataAry1.length; i++) {
            str1 += "<li>";
            var eval="title";
            str1+="<p class='"+eval+"'>";
            var num=parseFloat(i+1);
            if(num<=9){
                str1 +="this is 00"+num;
            }else if(num>9){
                str1 +="this is 0"+num;
            }
            str1+="</p>";
            str1 += "<img src='" + dataAry1[i] + "'/>";
            str1 += "</li>";

        }
        bigImg.innerHTML = str1;
    }

    initData();

    //点击出现
    function show(n){
        for(var i=0;i<dataAry2.length;i++){
            listS[i].className="";
            listB[i].className="";
            listP[i].className="";
        }
        listS[n].className="select";
        listB[n].className="select";
        listP[n].className="select";
    }

    for(var i=0;i<dataAry2.length;i++){
        listS[i].xdf=i;
        listS[i].onclick=function(){
            show(this.xdf);
        }
    }
})();