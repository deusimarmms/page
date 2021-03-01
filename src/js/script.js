$(document).ready(function(){
    $('.button').click(function(){
        $('#menu ').toggle();
    })
})



$("a").click(function () {
    $('html, body').animate({
        scrollTop: ($(this.hash).offset().top)
    }, 500)
   
})

