$(function() {
    $('.topSlide').slick({
        dots: false,
        // autoplay: true,
        // autoplaySpeed: 5000,
        slidesToShow: 3,
        prevArrow: '<img src="css/images/l.png" class="slide-arrow prev-arrow top_arrow_l">',
        nextArrow: '<img src="css/images/r.png" class="slide-arrow next-arrow top_arrow_r">',
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1
            }
        }]
    });


    // $('.story_slide1').slick({
    //   dots:false,
    //   autoplay: false,
    //   slidesToShow: 7,
    //   focusOnSelect: true,
    //   asNavFor: '.story_slide2',
    // });

    $('.story_slide2').slick({
        dots: true,
        appendDots: $('.dots'),
        customPaging: function(slider, i) {
            var thumbSrc = $(slider.$slides[i]).data('thumb');
            return '<img src="' + thumbSrc + '">';
        },
        fade: true,
        autoplay: false,
        slidesToShow: 1,
        focusOnSelect: false,
        prevArrow: '<img src="css/images/l.png" class="slide-arrow prev-arrow story_arrow_l">',
        nextArrow: '<img src="css/images/r.png" class="slide-arrow next-arrow story_arrow_r">',
        // asNavFor: '.story_slide1',
    });

    $('.story_slide3').slick({
        dots: true,
        appendDots: $('.dots_sp'),
        customPaging: function(slider, i) {
            var thumbSrc = $(slider.$slides[i]).data('thumb');
            return '<img src="' + thumbSrc + '">';
        },
        fade: true,
        autoplay: false,
        slidesToShow: 1,
        focusOnSelect: false,
        arrows: true,
        // prevArrow: '<img src="css/images/l.png" class="slide-arrow prev-arrow story_arrow_l">',
        // nextArrow: '<img src="css/images/r.png" class="slide-arrow next-arrow story_arrow_r">',
        // asNavFor: '.story_slide1',
    });

    // $(window).on('load resize', function() {
    //   if(windoWidth <= 700) {
    //     $('.story_img').children('img').attr('src', 'src');
    //   } else {
    //     $('.story_img').children('img').attr('src', "img/story/story_1.png");
    //   }
    // });




    $('.character_btn').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 6,
        // swipeToSlide: true,
        slidesToScroll: 3,
        prevArrow: '<img src="css/images/l.png" class="slide-arrow prev-arrow chara_arrow_l">',
        nextArrow: '<img src="css/images/r.png" class="slide-arrow next-arrow chara_arrow_r">',
    });
    $('.character_btn_sp').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 4,
        // swipeToSlide: true,
        slidesToScroll: 3,
        prevArrow: '<img src="css/images/l.png" class="slide-arrow prev-arrow chara_arrow_l">',
        nextArrow: '<img src="css/images/r.png" class="slide-arrow next-arrow chara_arrow_r">',

    });
    $('.main_chara_sp').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 1,
        arrows: false,
        swipeToSlide: true,
        // prevArrow: '<img src="css/images/l.png" class="slide-arrow prev-arrow chara_arrow_l">',
        // nextArrow: '<img src="css/images/r.png" class="slide-arrow next-arrow chara_arrow_r">',
    });
    $('.main_chara_sp2').slick({
        dots: true,
        autoplay: false,
        slidesToShow: 1,
        arrows: true,
        swipeToSlide: true,
        fade: true,
        prevArrow: '<img src="css/images/l_sp.png" class="slide-arrow prev-arrow chara_arrow_l_sp">',
        nextArrow: '<img src="css/images/r_sp.png" class="slide-arrow next-arrow chara_arrow_r_sp">',
    });
    $(".character_btn_sp .slick-slide").on('click', function() {
        var index = $(this).attr("data-slick-index");
        var index1 = index - 1;
        if (index1 == -1) {
            index1 = 0;
        } else if (index1 == 7) {
            const position = $('#chara9').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
            return false;
        } else if (index1 == 8) {
            index1 = 0;
            index = 0;
        } else if (index1 == 9) {
            index1 = 0;
            index = 1;
        } else if (index1 == 10) {
            index1 = 1;
            index = 2;
        }
        $('.main_chara_sp').slick("slickGoTo", index1, false);
        $('.main_chara_sp2').slick("slickGoTo", index, false);
    });
    $('.main_chara_sp').on('swipe', function(event, slick) {
        var index_2 = Number($(".main_chara_sp .slick-active").attr("data-slick-index")) + 1;
        if (index_2 == 1) {
            index_2 = 0;
        }
        $('.main_chara_sp2').slick("slickGoTo", index_2, false);
    });
    $('.main_chara_sp2').on('swipe', function(event, slick) {
        var index_3 = Number($(".main_chara_sp2 .slick-active").attr("data-slick-index")) - 1;
        if (index_3 == -1) {
            index_3 = 0;
        }
        $('.main_chara_sp').slick("slickGoTo", index_3, false);
    });
    $('.chara_arrow_l_sp, .chara_arrow_r_sp, .main_chara_sp2 .slick-dots').on('click', function(event, slick) {
        var index_3 = Number($(".main_chara_sp2 .slick-active").attr("data-slick-index")) - 1;
        if (index_3 == -1) {
            index_3 = 0;
        }
        $('.main_chara_sp').slick("slickGoTo", index_3, false);
    });
});