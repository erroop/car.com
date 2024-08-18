$(document).ready(function(){
    /* 반응형 [s] */
    $("#m_navBtn").click(function(){
        m++;
        if(m%2 == 1){
            $("#m_navBtn").addClass("on");
            $("#navWrap").fadeIn(300).addClass("on");
        }else{
            m_navClose(); 
        }; 
    });	
;	
    m = 0;  	
    function m_navClose() { 
        $("#m_navBtn").removeClass("on");
        $("#navWrap").fadeOut(300).removeClass("on");	
    }	
    /* 반응형 [e] */
}
)
