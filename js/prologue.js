$(document).ready(function() {
    // $(window).on('load', function() {

    if (windoWidth <= 700) {
        $('.pre_pc').css('display', 'none');
    } else {
        $('.pre_sp').css('display', 'none');
    }
    var count = 0;
    // setTimeout(function() {pre1()}, 2000);
    $('#skip').on('click', pre4_2);
    $('.pre1_box').on('click', pre1_stop);
    $('.pre2_box').on('click', pre2_stop);
    $('.pre3_box').on('click', pre3_stop);
    $('.pre4_box').on('click', pre4_stop);
    setTimeout(function() {
        if (count == 0) {
            pre1_1()
        }
    }, 2000);
    setTimeout(function() {
        if (count == 1) {
            pre1_2()
        }
    }, 4500);
    setTimeout(function() {
        if (count == 2) {
            pre1_3()
        }
    }, 8000);



    function pre1_1() {
        $('pre1_box').removeClass('pre_hidden');
        $(".pre1_1, .pre1_1_sp").removeClass('pre_hidden');
        $(".pre1_1, .pre1_1_sp").addClass('pre1-1');
        setTimeout(function() {
            $('.pre1_1_2_sp').removeClass('pre_hidden');
            $('.pre1_1_2_sp').addClass('pre1-1-2');
        }, 900);
        count = 1;
    }

    function pre1_2() {
        $(".pre1_2, .pre1_2_sp").removeClass('pre_hidden');
        $(".pre1_2, .pre1_2_sp").addClass('pre1-2');
        setTimeout(function() {
            $('.pre1_2_2_sp').removeClass('pre_hidden');
            $('.pre1_2_2_sp').addClass('pre1-2-2');
        }, 1000);
        count = 2;
    }

    function pre1_stop() {
        $('.pre1').removeClass('pre1-1 pre1-1-2 pre1-2 pre1-2-2');
        $('.pre1').removeClass('pre_hidden');
        count = 2;
        setTimeout(function() {
            pre1_3();
        }, 300);
    }

    function pre1_3() {
        $('.pre1').addClass('pre_hidden2');
        $('.pre2_box').removeClass('pre_hidden');
        count = 3;
        setTimeout(function() {
            if (count == 3) {
                pre2_1()
            }
        }, 1000);
        setTimeout(function() {
            if (count == 4) {
                pre2_2()
            }
        }, 2200);
        setTimeout(function() {
            if (count == 5) {
                pre2_3()
            }
        }, 4000);
        setTimeout(function() {
            if (count == 6) {
                pre2_4()
            }
        }, 8500);
    }

    function pre2_1() {
        $(".pre2_1, .pre2_1_sp").removeClass('pre_hidden');
        $(".pre2_1, .pre2_1_sp").addClass('pre2-1');
        count = 4;
    }

    function pre2_2() {
        $(".pre2_2, .pre2_2_sp").removeClass('pre_hidden');
        $(".pre2_2, .pre2_2_sp").addClass('pre2-2');
        count = 5;
    }

    function pre2_3() {
        $(".pre2_3, .pre2_3_sp").removeClass('pre_hidden');
        $(".pre2_3, .pre2_3_sp").addClass('pre2-3');
        setTimeout(function() {
            $('.pre2_3_2_sp').removeClass('pre_hidden');
            $('.pre2_3_2_sp').addClass('pre2-3-2');
        }, 1650);
        count = 6;
    }

    function pre2_stop() {
        $('.pre2').removeClass('pre2-1 pre2-2 pre2-3 pre2-3-2');
        $('.pre2').removeClass('pre_hidden');
        count = 6;
        setTimeout(function() {
            pre2_4();
        }, 300);
    }

    function pre2_4() {
        $('.pre2').addClass('pre_hidden2');
        $('.pre3_box').removeClass('pre_hidden');
        count = 7;
        setTimeout(function() {
            if (count == 7) {
                pre3_1()
            }
        }, 1000);
        setTimeout(function() {
            if (count == 8) {
                pre3_2()
            }
        }, 3000);
        setTimeout(function() {
            if (count == 9) {
                pre3_3()
            }
        }, 4500);
        setTimeout(function() {
            if (count == 10) {
                pre3_4()
            }
        }, 6000);
    }

    function pre3_1() {
        $(".pre3_1, .pre3_1_sp").removeClass('pre_hidden');
        $(".pre3_1, .pre3_1_sp").addClass('pre3-1');
        count = 8;
    }

    function pre3_2() {
        $(".pre3_2, .pre3_2_sp").removeClass('pre_hidden');
        $(".pre3_2, .pre3_2_sp").addClass('pre3-2');
        count = 9;
    }

    function pre3_3() {
        $(".pre3_3, .pre3_3_sp").removeClass('pre_hidden');
        $(".pre3_3, .pre3_3_sp").addClass('pre3-3');
        count = 10;
    }

    function pre3_stop() {
        $('.pre3').removeClass('pre3-1 pre3-2 pre3-3');
        $('.pre3').removeClass('pre_hidden');
        count = 10;
        setTimeout(function() {
            pre3_4();
        }, 300);
    }

    function pre3_4() {
        $('.pre4_box').removeClass('pre_hidden');
        count = 11;
        setTimeout(function() {
            if (count == 11) {
                curtain()
            }
        }, 500);
    }

    function curtain() {
        $('.pre4_box').addClass('curtain');
        count = 12;
        setTimeout(function() {
            if (count == 12) {
                pre4_1()
            }
        }, 3000);
    }

    function pre4_1() {
        $('.pre4').removeClass('pre_hidden');
        $('.pre4').addClass('pre4-1');
        count = 13;
        setTimeout(function() {
            if (count == 13) {
                pre4_2()
            }
        }, 3000);
    }

    function pre4_stop() {
        $('.pre3_box').addClass('hidden');
        $('.pre4').removeClass('pre_hidden');
        count = 13;
        setTimeout(function() {
            pre4_2();
        }, 300);
    }

    function pre4_2() {
        $('.pre4').addClass('pre_hidden2');
        setTimeout(function() {
            $('#prologue').addClass('hidden');
        }, 700);
        setTimeout(function() {
            $("body").css('overflow', 'auto');
        }, 700);
        // setTimeout(function() {
        // 	$('.demo').addClass('pro_end');
        // 	if ($(window).scrollTop() + $(window).height() > $('#news_area').offset().top) {
        // 		$('.pro_end').removeClass('op0');
        // 		$('.pro_end').addClass('demo_flow');
        // 	}
        // }, 800);
    }
});