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

    //m_menu
    $('.m_menu').click(function(){
        if ($('.m_list').attr('class') != 'active'){
            $('.m_menu').css('display','none');
            $('.m_list').show()
            $('.m_list').addClass('active');
            $('body').css({'overflow': 'hidden'});
        }
});

    $('.m_close').click(function(){
            $('.m_list').hide();
            $('.m_list').removeClass('active');
            $('.m_menu').css({'display': 'block'});
            $('body').css({'overflow': 'scroll'});
});

    //product
    $('.product').click(function(){
        if ($('.brand_list').attr('class') != 'active'){
            $('.brand_list').css('display','none');
            $('.brand_list').removeClass('active');
            $('.product_list').show();
            $('.product_list').addClass('active');
        }

});
    //brand
    $('.brand').click(function(){
        if ($('.product_list').attr('class') != 'active'){
            $('.product_list').css('display','none');
            $('.product_list').removeClass('active');
            $('.brand_list').show();
            $('.brand_list').addClass('active');
        }
});


    //about_text
    $('.lushlist').bxSlider({
        mode: 'horizontal',
        pager: true,
        controls: true,
        slideWidth: 570,
        adaptiveHeight:true,
        captions: true
});

    //about_event
    $('.eventlist').bxSlider({
        mode: 'horizontal',
        pager: true,
        controls: true,
        adaptiveHeight: true,
        slideWidth: 570,
    });


    //bestitem
    $('.bestitem01 > ul').bxSlider({
        mode: 'horizontal',
        adaptiveHeight: true,
        pager: false,
        controls: true,
        slideWidth: 300,
        minSlides: 2,
        maxSlides: 4,
});

    //newitem
    $('.newitem01 > ul').bxSlider({
        mode: 'horizontal',
        adaptiveHeight: true,
        pager: false,
        controls: true,
        slideWidth: 300,
        minSlides: 2,
        maxSlides: 4
});

});