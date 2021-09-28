$(document).ready(function() {
    // グローバル変数
    windoWidth = $(window).width();
});
$(window).on('resize', function() {
    // グローバル変数
    windoWidth = $(window).width();
});

$(window).on('load', function() {
    //スマホクリック透明度対応
    $('a img').on('click', function() {
        $("this").css("opacity", "1");
    });

    $('#pc_globalmenu_area a[href^=#]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

    $(".list_btn").click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $("#smart_globalmenu_area").addClass('close');
            $("#smart_globalmenu_area").removeClass('active');
            setTimeout(function() {
                $("#smart_globalmenu_area").removeClass('close');
            }, 300);
        } else {
            $(this).addClass('active');
            $("#smart_globalmenu_area").addClass('active');
        }
    });

    $('#smart_globalmenu_area a[href^=#]').click(function() {
        $("#smart_globalmenu_area").removeClass('active');
        $(".list_btn").removeClass('active');
        var gh = $('#smart_globalmenu_area  .list_btn').outerHeight();
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - gh;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});


$(window).on('load scroll', function() {
    var scrol = $(this).scrollTop();
    $("header").show();
});

$(window).on('load scroll', function() {
    // if ($(window).scrollTop() + $(window).height() > $('#news_area').offset().top) {
    // 	$('.pro_end').removeClass('op0');
    // 	$('.pro_end').addClass('demo_flow');
    // }
    if (windoWidth <= 700) {
        if ($(window).scrollTop() + $(window).height() - 200 > $('#news_area').offset().top) {
            $('#sakuranouta_area').removeClass('op0');
            $('#sakuranouta_area').addClass('top_flow_right');
            setTimeout(function() {
                $('.topSlide_on').removeClass('op0');
                $('.topSlide_on').addClass('top_flow_left');
            }, 300);
        }
    } else {
        $('#sakuranouta_area').removeClass('op0');
        $('.topSlide_on').removeClass('op0');
    }
    if ($(window).scrollTop() + $(window).height() - 200 > $('#story_area').offset().top) {
        $('.story_logo').removeClass('op0');
        $('.story_logo').addClass('story_test');
        setTimeout(function() {
            $('.dots').removeClass('op0');
            $('.dots').addClass('story_test');
            $('.dots_sp').removeClass('op0');
            $('.dots_sp').addClass('story_test');
        }, 300);
        setTimeout(function() {
            $('.story_slide2').removeClass('op0');
            $('.story_slide2').addClass('story_test');
            $('.story_slide3').removeClass('op0');
            $('.story_slide3').addClass('story_test');
        }, 600);
    }
    if ($(window).scrollTop() + $(window).height() - 200 > $('#special_area').offset().top) {
        $('.special_logo').removeClass('op0');
        $('.special_logo').addClass('story_test');
        setTimeout(function() {
            $('.special_list').removeClass('op0');
            $('.special_list').addClass('story_test');
        }, 300);
    }
});