$(document).ready(function(){
    let count = 0;
    $(".nav_list").mouseenter(function(){
        $("#hd_bg").css({height:"280px"})
        $(".hidden_nav").css({opacity:"1"})
        count = 1;
    });
    $(".nav_list").mouseleave(function(){
        $("#hd_bg").css({height:"0px"})
        $(".hidden_nav").css({opacity:"0"})
        count = 0;
    });
})