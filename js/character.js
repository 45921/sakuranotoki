$(function() {
    const charaOffset = [];
    $(window).on('load resize', function() {
        charaOffset[1] = $('#character_area').offset().top + $('#chara1').outerHeight();
        charaOffset[3] = $('#chara3').offset().top;
        charaOffset[4] = $('#chara4').offset().top;
        charaOffset[5] = $('#chara5').offset().top;
        charaOffset[6] = $('#chara6').offset().top;
        charaOffset[7] = $('#chara7').offset().top;
        charaOffset[8] = $('#chara8').offset().top;
        charaOffset[9] = $('#chara9').offset().top;
        charabox1();
        charabox3();
        charabox4();
        charabox5();
        charabox6();
        charabox7();
        charabox8();
        charabox9();
    });
    $(window).on('load scroll', function() {
        // if(windoWidth >= 700) {
        if ($(window).scrollTop() + $(window).height() - 200 > $('#character_area').offset().top) {
            $('.character_logo').removeClass('op0');
            $('.character_logo').addClass('story_test');
            setTimeout(function() {
                $('.character_btn').removeClass('op0');
                $('.character_btn').addClass('story_test');
                $('.character_btn_sp').removeClass('op0');
                $('.character_btn_sp').addClass('story_test');
            }, 300);
            setTimeout(function() {
                $('.main_chara_sp').removeClass('op0');
                $('.main_chara_sp').addClass('appearance');
            }, 600);
        }
        // } else {
        //   $('.character_logo').removeClass('op0');
        // }
    });

    $(window).scroll(charabox1);
    $(window).scroll(charabox3);
    $(window).scroll(charabox4);
    $(window).scroll(charabox5);
    $(window).scroll(charabox6);
    $(window).scroll(charabox7);
    $(window).scroll(charabox8);
    $(window).scroll(charabox9);

    var startPosition;
    $(".character_btn li").mousedown(function(event) {
        startPosition = '';
        if (event.which == 1) {
            startPosition = event.pageX;
        }
    });
    $(".chara1_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara1').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });
    $(".chara2_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara2').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });
    $(".chara3_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara3').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });
    $(".chara4_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara4').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });
    $(".chara5_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara5').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });
    $(".chara6_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara6').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });
    $(".chara7_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara7').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });
    $(".chara8_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara8').offset().top - 70;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });
    $(".chara9_btn").mouseup(function(event) {
        const endPosition = startPosition - event.pageX;
        if (endPosition >= -70 && endPosition <= 70) {
            const position = $('#chara9').offset().top - 150;
            $("html,body").animate({
                scrollTop: position
            }, 500);
        }
    });

    function charabox1() {
        if ($(window).scrollTop() + $(window).height() + 300 > charaOffset[1] && $(window).scrollTop() + $(window).height() - 1000 < charaOffset[1]) {
            $('#chara1').removeClass('op0');
            $('#chara1').addClass('appearance');
            $('#chara2').removeClass('op0');
            $('#chara2').addClass('appearance');
            // $('.chara1_border_0').addClass('test');
            // $('.chara1_border_1').addClass('test1');
            $('#chara1_underline_1').addClass('underline_l_1');
            $('#chara1_underline_2').addClass('underline_l_2');
            $('#chara2_underline_1').addClass('underline_r_1');
            $('#chara2_underline_2').addClass('underline_r_2');
            setTimeout(function() {
                $('.character_box_1 .chara_name').removeClass('op0');
                $('.character_box_1 .chara_name').addClass('appearance');
            }, 1000);
            setTimeout(function() {
                $('.character_box_1 .chara_cv').removeClass('op0');
                $('.character_box_1 .chara_cv').addClass('appearance');
            }, 1500);
            $(window).off("scroll", charabox1);
        }
    }

    function charabox3() {
        if ($(window).scrollTop() + $(window).height() - 300 > charaOffset[3] && $(window).scrollTop() + $(window).height() - 1600 < charaOffset[3]) {
            $('#chara3').removeClass('op0');
            $('#chara3').addClass('appearance');
            $('#chara3_underline_1').addClass('underline_l_3');
            $('#chara3_underline_2').addClass('underline_l_4');
            setTimeout(function() {
                $('.chara_name_box_3 .chara_name').removeClass('op0');
                $('.chara_name_box_3 .chara_name').addClass('appearance');
            }, 1000);
            setTimeout(function() {
                $('.chara_name_box_3 .chara_cv').removeClass('op0');
                $('.chara_name_box_3 .chara_cv').addClass('appearance');
            }, 1500);
            $(window).off("scroll", charabox3);
        }
    }

    function charabox4() {
        if ($(window).scrollTop() + $(window).height() - 500 > charaOffset[4] && $(window).scrollTop() + $(window).height() - 1600 < charaOffset[4]) {
            $('#chara4').removeClass('op0');
            $('#chara4').addClass('appearance');
            $('#chara4_underline_1').addClass('underline_r_3');
            $('#chara4_underline_2').addClass('underline_r_4');
            setTimeout(function() {
                $('.chara_name_box_4 .chara_name').removeClass('op0');
                $('.chara_name_box_4 .chara_name').addClass('appearance');
            }, 1000);
            setTimeout(function() {
                $('.chara_name_box_4 .chara_cv').removeClass('op0');
                $('.chara_name_box_4 .chara_cv').addClass('appearance');
            }, 1500);
            $(window).off("scroll", charabox4);
        }
    }

    function charabox5() {
        if ($(window).scrollTop() + $(window).height() - 300 > charaOffset[5] && $(window).scrollTop() + $(window).height() - 1600 < charaOffset[5]) {
            $('#chara5').removeClass('op0');
            $('#chara5').addClass('appearance');
            $('#chara5_underline_1').addClass('underline_l_3');
            $('#chara5_underline_2').addClass('underline_l_4');
            setTimeout(function() {
                $('.chara_name_box_5 .chara_name').removeClass('op0');
                $('.chara_name_box_5 .chara_name').addClass('appearance');
            }, 1000);
            setTimeout(function() {
                $('.chara_name_box_5 .chara_cv').removeClass('op0');
                $('.chara_name_box_5 .chara_cv').addClass('appearance');
            }, 1500);
            $(window).off("scroll", charabox5);
        }
    }

    function charabox6() {
        if ($(window).scrollTop() + $(window).height() - 500 > charaOffset[6] && $(window).scrollTop() + $(window).height() - 1600 < charaOffset[6]) {
            $('#chara6').removeClass('op0');
            $('#chara6').addClass('appearance');
            $('#chara6_underline_1').addClass('underline_r_3');
            $('#chara6_underline_2').addClass('underline_r_4');
            setTimeout(function() {
                $('.chara_name_box_6 .chara_name').removeClass('op0');
                $('.chara_name_box_6 .chara_name').addClass('appearance');
            }, 1000);
            setTimeout(function() {
                $('.chara_name_box_6 .chara_cv').removeClass('op0');
                $('.chara_name_box_6 .chara_cv').addClass('appearance');
            }, 1500);
            $(window).off("scroll", charabox6);
        }
    }

    function charabox7() {
        if ($(window).scrollTop() + $(window).height() - 300 > charaOffset[7] && $(window).scrollTop() + $(window).height() - 1600 < charaOffset[7]) {
            $('#chara7').removeClass('op0');
            $('#chara7').addClass('appearance');
            $('#chara7_underline_1').addClass('underline_l_3');
            $('#chara7_underline_2').addClass('underline_l_4');
            setTimeout(function() {
                $('.chara_name_box_7 .chara_name').removeClass('op0');
                $('.chara_name_box_7 .chara_name').addClass('appearance');
            }, 1000);
            setTimeout(function() {
                $('.chara_name_box_7 .chara_cv').removeClass('op0');
                $('.chara_name_box_7 .chara_cv').addClass('appearance');
            }, 1500);
            $(window).off("scroll", charabox7);
        }
    }

    function charabox8() {
        if ($(window).scrollTop() + $(window).height() - 500 > charaOffset[8] && $(window).scrollTop() + $(window).height() - 1600 < charaOffset[8]) {
            $('#chara8').removeClass('op0');
            $('#chara8').addClass('appearance');
            $('#chara8_underline_1').addClass('underline_r_3');
            $('#chara8_underline_2').addClass('underline_r_4');
            setTimeout(function() {
                $('.chara_name_box_8 .chara_name').removeClass('op0');
                $('.chara_name_box_8 .chara_name').addClass('appearance');
            }, 1000);
            setTimeout(function() {
                $('.chara_name_box_8 .chara_cv').removeClass('op0');
                $('.chara_name_box_8 .chara_cv').addClass('appearance');
            }, 1500);
            $(window).off("scroll", charabox8);
        }
    }

    function charabox9() {
        if (windoWidth >= 700) {
            if ($(window).scrollTop() + $(window).height() - 500 > charaOffset[9] && $(window).scrollTop() + $(window).height() - 1600 < charaOffset[9]) {
                $('.others_line_1').removeClass('op0');
                $('.others_line_1').addClass('appearance_others');
                setTimeout(function() {
                    $('.others_line_2').removeClass('op0');
                    $('.others_line_2').addClass('appearance_others');
                }, 400);
                setTimeout(function() {
                    $('.others_line_3').removeClass('op0');
                    $('.others_line_3').addClass('appearance_others');
                }, 800);
                setTimeout(function() {
                    $('.others_line_4').removeClass('op0');
                    $('.others_line_4').addClass('appearance_others');
                }, 1200);
                setTimeout(function() {
                    $('.others_line_5').removeClass('op0');
                    $('.others_line_5').addClass('appearance_others');
                }, 1600);
                $(window).off("scroll", charabox9);
            }
        } else {
            if ($(window).scrollTop() + $(window).height() - 200 > charaOffset[9] && $(window).scrollTop() + $(window).height() - 1600 < charaOffset[9]) {
                $('.others_line_1').removeClass('op0');
                $('.others_line_1').addClass('appearance_others_sp');
                setTimeout(function() {
                    $('.others_line_2').removeClass('op0');
                    $('.others_line_2').addClass('appearance_others_sp');
                }, 150);
                setTimeout(function() {
                    $('.others_line_3').removeClass('op0');
                    $('.others_line_3').addClass('appearance_others_sp');
                }, 300);
                setTimeout(function() {
                    $('.others_line_4').removeClass('op0');
                    $('.others_line_4').addClass('appearance_others_sp');
                }, 450);
                setTimeout(function() {
                    $('.others_line_5').removeClass('op0');
                    $('.others_line_5').addClass('appearance_others_sp');
                }, 600);
                setTimeout(function() {
                    $('.others_line_6').removeClass('op0');
                    $('.others_line_6').addClass('appearance_others_sp');
                }, 750);
                setTimeout(function() {
                    $('.others_line_7').removeClass('op0');
                    $('.others_line_7').addClass('appearance_others_sp');
                }, 900);
                setTimeout(function() {
                    $('.others_line_8').removeClass('op0');
                    $('.others_line_8').addClass('appearance_others_sp');
                }, 1050);
                setTimeout(function() {
                    $('.others_line_9').removeClass('op0');
                    $('.others_line_9').addClass('appearance_others_sp');
                }, 1200);
                setTimeout(function() {
                    $('.others_line_10').removeClass('op0');
                    $('.others_line_10').addClass('appearance_others_sp');
                }, 1350);
                setTimeout(function() {
                    $('.others_line_11').removeClass('op0');
                    $('.others_line_11').addClass('appearance_others_sp');
                }, 1500);
                setTimeout(function() {
                    $('.others_line_12').removeClass('op0');
                    $('.others_line_12').addClass('appearance_others_sp');
                }, 1650);
                setTimeout(function() {
                    $('.others_line_13').removeClass('op0');
                    $('.others_line_13').addClass('appearance_others_sp');
                }, 1800);
                $(window).off("scroll", charabox9);
            }
        }
    }

    $('.change1').mouseover(function() {
        $('.change1-1').addClass('change_rotate');
    });
    $('.change1').mouseout(function() {
        $('.change1-1').removeClass('change_rotate');
    });
    $('.change2').mouseover(function() {
        $('.change2-1').addClass('change_rotate');
    });
    $('.change2').mouseout(function() {
        $('.change2-1').removeClass('change_rotate');
    });
    $('.change3').mouseover(function() {
        $('.change3-1').addClass('change_rotate');
    });
    $('.change3').mouseout(function() {
        $('.change3-1').removeClass('change_rotate');
    });


    $('.change1').on('click', function() {
        if ($('.chara_picture_1').hasClass('op0')) {
            $('.chara_picture_1').removeClass('op0');
            $('#chara1').addClass('back_none');
            $('#chara1').css('transform', 'translateX(0)');
            $('#chara_intro_1').removeClass('hidden');
            $('#chara_intro_1-1').addClass('hidden');
            $('#chara_period_1 img').removeClass('op0');
            $('#chara_period_1').addClass('back_none');
            $('.chara_picture_2').removeClass('op0');
            $('#chara2').addClass('back_none');
            $('#chara2').css('transform', 'translateX(-5%)');
            $('#chara_intro_2').removeClass('hidden');
            $('#chara_intro_2-1').addClass('hidden');
            $('#chara_period_2 img').removeClass('op0');
            $('#chara_period_2').addClass('back_none');
            $('#chara1_change img').removeClass('op0');
            $('#chara1_change').addClass('back_none');
            $('#chara_voice_box_2 .after').addClass('hidden');
        } else {
            $('.chara_picture_1').addClass('op0');
            $('#chara1').removeClass('back_none');
            $('#chara1').css('transform', 'translateX(10%)');
            $('#chara_intro_1').addClass('hidden');
            $('#chara_intro_1-1').removeClass('hidden');
            $('#chara_period_1 img').addClass('op0');
            $('#chara_period_1').removeClass('back_none');
            $('.chara_picture_2').addClass('op0');
            $('#chara2').removeClass('back_none');
            $('#chara2').css('transform', 'translateX(-10%)');
            $('#chara_intro_2').addClass('hidden');
            $('#chara_intro_2-1').removeClass('hidden');
            $('#chara_period_2 img').addClass('op0');
            $('#chara_period_2').removeClass('back_none');
            $('#chara1_change img').addClass('op0');
            $('#chara1_change').removeClass('back_none');
            $('#chara_voice_box_2 .after').removeClass('hidden');
        }
    });


    $('.change2').on('click', function() {
        if ($('.chara_picture_3').hasClass('op0')) {
            $('.chara_picture_3').removeClass('op0');
            $('#chara3').addClass('back_none');
            $('#chara3').removeClass("chara3_2");
            if (windoWidth >= 1000) {
                $('#chara3').addClass("chara3_1");
            } else {
                $('#chara3').addClass("chara3_3");
            }
            $('#chara_intro_3').removeClass('hidden');
            $('#chara_intro_3-1').addClass('hidden');
            $('#chara_period_3 img').removeClass('op0');
            $('#chara_period_3').addClass('back_none');
            $('#chara3_change img').removeClass('op0');
            $('#chara3_change').addClass('back_none');
            $('#chara_voice_box_3 .after').addClass('hidden');
            $('#chara_voice_box_3 .before').removeClass('hidden');
        } else {
            $('.chara_picture_3').addClass('op0');
            $('#chara3').removeClass('back_none chara3_1 chara3_3');
            $('#chara3').addClass('chara3_2');
            $('#chara_intro_3').addClass('hidden');
            $('#chara_intro_3-1').removeClass('hidden');
            $('#chara_period_3 img').addClass('op0');
            $('#chara_period_3').removeClass('back_none');
            $('#chara3_change img').addClass('op0');
            $('#chara3_change').removeClass('back_none');
            $('#chara_voice_box_3 .before').addClass('hidden');
            $('#chara_voice_box_3 .after').removeClass('hidden');
        }
    });



    $('.change3').on('click', function() {
        if ($('.chara_picture_5').hasClass('op0')) {
            $('.chara_picture_5').removeClass('op0');
            $('#chara5').addClass('back_none');
            $('#chara_intro_5').removeClass('hidden');
            $('#chara_intro_5-1').addClass('hidden');
            $('#chara_period_5 img').removeClass('op0');
            $('#chara_period_5').addClass('back_none');
            $('#chara5_change img').removeClass('op0');
            $('#chara5_change').addClass('back_none');
            $('#chara_voice_box_5 .after').addClass('hidden');
            $('#chara_voice_box_5 .before').removeClass('hidden');
        } else {
            $('.chara_picture_5').addClass('op0');
            $('#chara5').removeClass('back_none');
            $('#chara_intro_5').addClass('hidden');
            $('#chara_intro_5-1').removeClass('hidden');
            $('#chara_period_5 img').addClass('op0');
            $('#chara_period_5').removeClass('back_none');
            $('#chara5_change img').addClass('op0');
            $('#chara5_change').removeClass('back_none');
            $('#chara_voice_box_5 .before').addClass('hidden');
            $('#chara_voice_box_5 .after').removeClass('hidden');
        }
    });


    const change_btn_sp = $('.change_btn_sp').children('img').attr('src');
    const change_btn_sp_after = change_btn_sp.replace("btn_sp", "btn2_sp");
    $('.change_sp').on('click', function() {
        const chara_sp = $(this).parent().children('img').attr('src');
        if ($(this).prev().children('img').attr('src') == change_btn_sp_after) {
            const chara_sp_before = chara_sp.replace("-1_sp", "_sp");
            $(this).prev().children('img').attr('src', change_btn_sp);
            $(this).parent().children('img').attr('src', chara_sp_before);
            $(this).prevAll('.chara_voice_box_sp').children('.after').addClass('hidden');
            $(this).prevAll('.chara_voice_box_sp').children('.before').removeClass('hidden');
            if ($(this).hasClass('change1_sp')) {
                $('#chara_intro_1_sp').children('p:last').addClass('hidden');
                $('#chara_intro_1_sp').children('p:first').removeClass('hidden');
                $('#chara_intro_2_sp').children('p:last').addClass('hidden');
                $('#chara_intro_2_sp').children('p:first').removeClass('hidden');
            }
            if ($(this).hasClass('change2_sp')) {
                $('#chara_intro_3_sp').children('p:last').addClass('hidden');
                $('#chara_intro_3_sp').children('p:first').removeClass('hidden');
            }
            if ($(this).hasClass('change3_sp')) {
                $('#chara_intro_5_sp').children('p:last').addClass('hidden');
                $('#chara_intro_5_sp').children('p:first').removeClass('hidden');
            }

        } else {
            const chara_sp_after = chara_sp.replace("_sp", "-1_sp");
            $(this).prev().children('img').attr('src', change_btn_sp_after);
            $(this).parent().children('img').attr('src', chara_sp_after);
            $(this).prevAll('.chara_voice_box_sp').children('.before').addClass('hidden');
            $(this).prevAll('.chara_voice_box_sp').children('.after').removeClass('hidden');
            if ($(this).hasClass('change1_sp')) {
                $('#chara_intro_1_sp').children('p:first').addClass('hidden');
                $('#chara_intro_1_sp').children('p:last').removeClass('hidden');
                $('#chara_intro_2_sp').children('p:first').addClass('hidden');
                $('#chara_intro_2_sp').children('p:last').removeClass('hidden');
            } else if ($(this).hasClass('change2_sp')) {
                $('#chara_intro_3_sp').children('p:first').addClass('hidden');
                $('#chara_intro_3_sp').children('p:last').removeClass('hidden');
            } else {
                $('#chara_intro_5_sp').children('p:first').addClass('hidden');
                $('#chara_intro_5_sp').children('p:last').removeClass('hidden');
            }
        }
    });




    $(function() {
        var voice_max = 48;
        $.fn.useSound = function(_event, _id) {
            var se = $(_id);
            var stop_se = $(".voice")
            var src = [];
            var off_src = []
            this.on(_event, function() {
                for (var i = 0; i < voice_max; i++) {
                    stop_se[i].pause();
                }
                se[0].currentTime = 0;
                se[0].volume = 1;
                se[0].play();
                return false;
            })
        }
    });

    $(function() {
        $('#chara_voice_btn_2-1').useSound('click', '#v_chara2-1');
        $('#chara_voice_btn_2-2').useSound('click', '#v_chara2-2');
        $('#chara_voice_btn_2-3').useSound('click', '#v_chara2-3');
        $('#chara_voice_btn_3-1').useSound('click', '#v_chara3-1');
        $('#chara_voice_btn_3-2').useSound('click', '#v_chara3-2');
        $('#chara_voice_btn_3-3').useSound('click', '#v_chara3-3');
        $('#chara_voice_btn_3-2-1').useSound('click', '#v_chara3-2-1');
        $('#chara_voice_btn_3-2-2').useSound('click', '#v_chara3-2-2');
        $('#chara_voice_btn_3-2-3').useSound('click', '#v_chara3-2-3');
        $('#chara_voice_btn_4-1').useSound('click', '#v_chara4-1');
        $('#chara_voice_btn_4-2').useSound('click', '#v_chara4-2');
        $('#chara_voice_btn_4-3').useSound('click', '#v_chara4-3');
        $('#chara_voice_btn_5-1').useSound('click', '#v_chara5-1');
        $('#chara_voice_btn_5-2').useSound('click', '#v_chara5-2');
        $('#chara_voice_btn_5-3').useSound('click', '#v_chara5-3');
        $('#chara_voice_btn_5-2-1').useSound('click', '#v_chara5-2-1');
        $('#chara_voice_btn_5-2-2').useSound('click', '#v_chara5-2-2');
        $('#chara_voice_btn_5-2-3').useSound('click', '#v_chara5-2-3');
        $('#chara_voice_btn_6-1').useSound('click', '#v_chara6-1');
        $('#chara_voice_btn_6-2').useSound('click', '#v_chara6-2');
        $('#chara_voice_btn_6-3').useSound('click', '#v_chara6-3');

        $('#chara_voice_btn_8-1').useSound('click', '#v_chara8-1');
        $('#chara_voice_btn_8-2').useSound('click', '#v_chara8-2');
        $('#chara_voice_btn_8-3').useSound('click', '#v_chara8-3');
        $('#chara_voice_btn_9-1').useSound('click', '#v_chara9-1');
        $('#chara_voice_btn_9-2').useSound('click', '#v_chara9-2');
        $('#chara_voice_btn_9-3').useSound('click', '#v_chara9-3');
        $('#chara_voice_btn_10-1').useSound('click', '#v_chara10-1');
        $('#chara_voice_btn_10-2').useSound('click', '#v_chara10-2');
        $('#chara_voice_btn_10-3').useSound('click', '#v_chara10-3');
        $('#chara_voice_btn_11-1').useSound('click', '#v_chara11-1');
        $('#chara_voice_btn_11-2').useSound('click', '#v_chara11-2');
        $('#chara_voice_btn_11-3').useSound('click', '#v_chara11-3');
        $('#chara_voice_btn_12-1').useSound('click', '#v_chara12-1');
        $('#chara_voice_btn_12-2').useSound('click', '#v_chara12-2');
        $('#chara_voice_btn_12-3').useSound('click', '#v_chara12-3');
        $('#chara_voice_btn_13-1').useSound('click', '#v_chara13-1');
        $('#chara_voice_btn_13-2').useSound('click', '#v_chara13-2');
        $('#chara_voice_btn_13-3').useSound('click', '#v_chara13-3');
        $('#chara_voice_btn_14-1').useSound('click', '#v_chara14-1');
        $('#chara_voice_btn_14-2').useSound('click', '#v_chara14-2');
        $('#chara_voice_btn_14-3').useSound('click', '#v_chara14-3');
        $('#chara_voice_btn_17-1').useSound('click', '#v_chara17-1');
        $('#chara_voice_btn_17-2').useSound('click', '#v_chara17-2');
        $('#chara_voice_btn_17-3').useSound('click', '#v_chara17-3');
        $('#chara_voice_btn_18-1').useSound('click', '#v_chara18-1');
        $('#chara_voice_btn_18-2').useSound('click', '#v_chara18-2');
        $('#chara_voice_btn_18-3').useSound('click', '#v_chara18-3');

        $('#chara_voice_btn_2-1_sp').useSound('click', '#v_chara2-1');
        $('#chara_voice_btn_2-2_sp').useSound('click', '#v_chara2-2');
        $('#chara_voice_btn_2-3_sp').useSound('click', '#v_chara2-3');
        $('#chara_voice_btn_3-1_sp').useSound('click', '#v_chara3-1');
        $('#chara_voice_btn_3-2_sp').useSound('click', '#v_chara3-2');
        $('#chara_voice_btn_3-3_sp').useSound('click', '#v_chara3-3');
        $('#chara_voice_btn_3-2-1_sp').useSound('click', '#v_chara3-2-1');
        $('#chara_voice_btn_3-2-2_sp').useSound('click', '#v_chara3-2-2');
        $('#chara_voice_btn_3-2-3_sp').useSound('click', '#v_chara3-2-3');
        $('#chara_voice_btn_4-1_sp').useSound('click', '#v_chara4-1');
        $('#chara_voice_btn_4-2_sp').useSound('click', '#v_chara4-2');
        $('#chara_voice_btn_4-3_sp').useSound('click', '#v_chara4-3');
        $('#chara_voice_btn_5-1_sp').useSound('click', '#v_chara5-1');
        $('#chara_voice_btn_5-2_sp').useSound('click', '#v_chara5-2');
        $('#chara_voice_btn_5-3_sp').useSound('click', '#v_chara5-3');
        $('#chara_voice_btn_5-2-1_sp').useSound('click', '#v_chara5-2-1');
        $('#chara_voice_btn_5-2-2_sp').useSound('click', '#v_chara5-2-2');
        $('#chara_voice_btn_5-2-3_sp').useSound('click', '#v_chara5-2-3');
        $('#chara_voice_btn_6-1_sp').useSound('click', '#v_chara6-1');
        $('#chara_voice_btn_6-2_sp').useSound('click', '#v_chara6-2');
        $('#chara_voice_btn_6-3_sp').useSound('click', '#v_chara6-3');

        $('#chara_voice_btn_8-1_sp').useSound('click', '#v_chara8-1');
        $('#chara_voice_btn_8-2_sp').useSound('click', '#v_chara8-2');
        $('#chara_voice_btn_8-3_sp').useSound('click', '#v_chara8-3');
        $('#chara_voice_btn_9-1_sp').useSound('click', '#v_chara9-1');
        $('#chara_voice_btn_9-2_sp').useSound('click', '#v_chara9-2');
        $('#chara_voice_btn_9-3_sp').useSound('click', '#v_chara9-3');
        $('#chara_voice_btn_10-1_sp').useSound('click', '#v_chara10-1');
        $('#chara_voice_btn_10-2_sp').useSound('click', '#v_chara10-2');
        $('#chara_voice_btn_10-3_sp').useSound('click', '#v_chara10-3');
        $('#chara_voice_btn_11-1_sp').useSound('click', '#v_chara11-1');
        $('#chara_voice_btn_11-2_sp').useSound('click', '#v_chara11-2');
        $('#chara_voice_btn_11-3_sp').useSound('click', '#v_chara11-3');
        $('#chara_voice_btn_12-1_sp').useSound('click', '#v_chara12-1');
        $('#chara_voice_btn_12-2_sp').useSound('click', '#v_chara12-2');
        $('#chara_voice_btn_12-3_sp').useSound('click', '#v_chara12-3');
        $('#chara_voice_btn_13-1_sp').useSound('click', '#v_chara13-1');
        $('#chara_voice_btn_13-2_sp').useSound('click', '#v_chara13-2');
        $('#chara_voice_btn_13-3_sp').useSound('click', '#v_chara13-3');
        $('#chara_voice_btn_14-1_sp').useSound('click', '#v_chara14-1');
        $('#chara_voice_btn_14-2_sp').useSound('click', '#v_chara14-2');
        $('#chara_voice_btn_14-3_sp').useSound('click', '#v_chara14-3');
        $('#chara_voice_btn_17-1_sp').useSound('click', '#v_chara17-1');
        $('#chara_voice_btn_17-2_sp').useSound('click', '#v_chara17-2');
        $('#chara_voice_btn_17-3_sp').useSound('click', '#v_chara17-3');
        $('#chara_voice_btn_18-1_sp').useSound('click', '#v_chara18-1');
        $('#chara_voice_btn_18-2_sp').useSound('click', '#v_chara18-2');
        $('#chara_voice_btn_18-3_sp').useSound('click', '#v_chara18-3');
    });
});