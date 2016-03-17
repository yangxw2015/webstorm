/*function createTable(){
    var table=$("table");
    /!*var size=$("thead>td").length;
    var $tbody=$("<tbody></tbody>");
    var $tr=$("<tr></tr>");
    var $td=$("<td></td>").each(size);
    $td.appendTo($tr).appendTo($tr).appendTo($tbody).appendTo(table);
*!/
    table.
}
createTable();*/
var size=$("thead>tr>td").length;


function createTable(){
    $("table").append("<tr><td><input type='checkbox' name='check'/></td><td></td><td></td><td></td><td></td><td><button>修改</button><button>删除</button></td></tr>");

    $("tbody button").addClass("update");
}



$(function(){
    //创建
    $("#add").click(function(){
        createTable();
    })
    $("input[name='delname']").on("click",function(){
        alert(1234);
    });
});



$