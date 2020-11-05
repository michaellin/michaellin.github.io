
// modal button
$(document).ready(function(){
    var str =$(this).attr('id');
    
    $(".btnId").click(function(){
        var str = $(this).attr('id');
        var ret = str.split("_");
        var id = ret[1];
        $('#' + id).toggle();
    });
});