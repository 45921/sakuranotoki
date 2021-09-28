$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $('.bottom_globalmenu').addClass('header_bg');
        } else {
            $('.bottom_globalmenu').removeClass('header_bg');
        }
    });

    $('.header_li').mouseover(function() {
        $("div", this).addClass('header_hover');
    });
    $('.header_li').mouseout(function() {
        $("div", this).removeClass('header_hover');
    });
});