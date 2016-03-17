
var size=$("thead>tr>td").length;
var index=$("tbody>tr").length;

function createTable(){
    $("table").append("<tr><td><input type='checkbox' name='check'/></td><td></td><td></td><td></td><td></td><td><button>修改</button><button>删除</button></td></tr>");
    $("tbody button").addClass("update");

    //单行删除
    $("tbody tr td button:nth-child(2)").click(function(){
        $(this).closest("tr").remove();
    })
}
//添加
$("#add").click(function(){
    createTable();
});
//全部删除
$("#deleteAll").click(function(){
    var check=$(this).siblings("table");
    try{
        return check.find("input:checked").closest("tbody tr").remove();
    }catch(e){
        if(check.find("input").checked=null){
            alert("请选择要删除的行");
        }
        return alert("请选择要删除的行");
    }
});

//全选

$("thead input").click(function(){
    $(this).closest("table").find("tbody input").attr("checked",true);
})
$("thead input:checked").click(function(){
    $(this).closest("table").find("tbody input").removeAttr("checked");
})

//button全选
$("#selectAll").click(function(){
    $(this).siblings("table").find("tbody input").attr("checked",true);
})

//button全不选
$("#selectAllNo").click(function(){
    $(this).siblings("table").find("tbody input").removeAttr("checked");
})




