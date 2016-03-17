

var n=0;
$("#add").click(function(){
    /*createTable();*/
    n++;
    $("table").append("<tr><td>"+n+"</td><td><input type='text' class='num' /></td></tr>");

});
$("#sum").click(function(){
    var sum=null;
    $("input").each(function(){
        sum+=parseInt($(this).val());
    });
    console.log(sum);

});