$(function(){

    $('.f_nav > a').mouseenter(function(){
    if ($(this).attr('class') != 'active'){
        $('.nav_list').slideUp();
        $('.nav_menu ul > li > a').removeClass('active');
        $(this).next().slideToggle();  
        $(this).addClass('active');
        }
});

    $('.f_nav, .nav_list').mouseleave(function(){
        $('.nav_list').slideUp();
        $('.f_nav > a').removeClass('active');
});


});