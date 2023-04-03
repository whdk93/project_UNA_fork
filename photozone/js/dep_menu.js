$(function() {
    //hexagon hover highlight
    $(".sample_hover").hover(function(){
        $(this).css({
            scale : "1.1",
            transition : "all 0.7s cubic-bezier(.25,.8,.25,1)",
            backgroundColor : "red",
            color : "#fff",
            cursor : "pointer"
        })
    }, function(){
        $(this).css({
            scale : "1",
            backgroundColor : "#bbb",
            color : "#000"
        })
    })
});