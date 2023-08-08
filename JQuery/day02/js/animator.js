$(document).ready(function() {
        
    $(".box").animate({ "left": "+=250px" , width: "140px",}, 1000,function(){
        $(this).css({'background':'black'});
    });
    $(".box").animate({ "bottom": "-=250px" ,width: "100px",height: "100px"}, 2000,function(){
        $(this).css({'background':'red'});
        
    });
    $(".box").animate({ "left": "-=250px" ,width: "150px",height: "150px"}, 1000,function(){
        $(this).css({'background':'blue'});
    });
    $(".box").animate({ "bottom": "+=250px" ,width: "100px",height: "100px"}, 1000,function(){
        $(this).css({'background':'green'});
    });

});