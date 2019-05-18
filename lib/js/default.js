$(function(){

    // bxslider
    $('.bxslider').bxSlider({
    mode: 'fade',
    auto: true,
    pause: 2500
});


    //nav_menu
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

    //item_bxslider
    $('.item_bxslider').bxSlider({
        mode: 'horizontal',
        adaptiveHeight: true,
        pager: false,
        controls: true,
        slideWidth: 289,
        slideMargin: 8,
        minSlides: 2,
        maxSlides: 4,
});

    //m_menu
    $('.m_menu').click(function(){
        if ($('.m_list').attr('class') != 'active'){
            $('.m_menu').css('display','none');
            $('.m_list').show()
            $('.m_list').addClass('active');
        }
});

    $('.m_close').click(function(){
            $('.m_list').hide();
            $('.m_list').removeClass('active');
            $('.m_menu').css({'display': 'block'});
});

});