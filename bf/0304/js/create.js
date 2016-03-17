var oTable=$("table");
var oThead=$("thead");
var oTr=$("thead tr");
var oTd=$("thead tr td");
var oTbody=$("tbody");
var oAdd=$("add");

function initDate(){
    var str="";
    str+="<tr>";
    for(var i=0;i<oTd.length;i++){
        str+="<td>";
        str+="</td>";
    }
    str+="</tr>";
    oTable.innerHTML=str;

}
initDate();
oAdd.onclick=function(){
    initDate();
}

