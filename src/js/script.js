$(document).ready(function(){
    $('.button').click(function(){
        $('#menu ').toggle();
    })
})



 $('.menu-nav a').click(function(e){
     e.preventDefault();
    let id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
    $('html,body').animate({
        scrollTop: targetOffset
    },1000);

 });


 /* Seta para subir ao topo */
/* 
 
$('.seta').click(function(e){
     e.preventDefault();
     $('html','body').animate({
         scrollTop:0
     },1000)
 }); 
 
 */