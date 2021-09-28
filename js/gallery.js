$(function() {
    $(window).on('load resize', function() {
        const galleryLogOffset = $('#gallery_area').offset().top;
        const galleryOffset = [];
        galleryOffset[0] = $('#gallery_pos0').offset().top;
        galleryOffset[1] = $('#gallery_pos1').offset().top;
        galleryOffset[2] = $('#gallery_pos2').offset().top;
        galleryOffset[3] = $('#gallery_pos3').offset().top;
        galleryOffset[4] = $('#gallery_pos4').offset().top;

        galleryLogo();
        $(window).scroll(galleryLogo);

        function galleryLogo() {
            if ($(window).scrollTop() + $(window).height() - 100 > galleryLogOffset && $(window).scrollTop() + $(window).height() - 1000 < galleryLogOffset) {
                $('.gallery_logo').removeClass('op0');
                $('.gallery_logo').addClass('story_test');
                $(window).off("scroll", galleryLogo);
            }
        }
        if (windoWidth >= 700) {

            gallerybox0();
            gallerybox1();
            gallerybox2();
            gallerybox3();
            gallerybox4();
            $(window).scroll(gallerybox0);
            $(window).scroll(gallerybox1);
            $(window).scroll(gallerybox2);
            $(window).scroll(gallerybox3);
            $(window).scroll(gallerybox4);


            function gallerybox0() {
                if ($(window).scrollTop() + $(window).height() - 100 > galleryOffset[0] && $(window).scrollTop() + $(window).height() - 1000 < galleryOffset[0]) {
                    $('#gallery_pos0').removeClass('op0');
                    $('#gallery_pos0 .gallery_box0').addClass('gallery_ap0');
                    $('#gallery_pos0 .gallery_box1').addClass('gallery_ap1');
                    $('#gallery_pos0 .gallery_box2').addClass('gallery_ap2');
                    $('#gallery_pos0 .gallery_box3').addClass('gallery_ap3');
                    $(window).off("scroll", gallerybox0);
                }
            }

            function gallerybox1() {
                if ($(window).scrollTop() + $(window).height() - 400 > galleryOffset[1] && $(window).scrollTop() + $(window).height() - 1000 < galleryOffset[1]) {
                    $('#gallery_pos1').removeClass('op0');
                    $('#gallery_pos1 .main_gallery:nth-of-type(1)').addClass('gallery_ap0');
                    $('#gallery_pos1 .main_gallery:nth-of-type(2)').addClass('gallery_ap2');
                    $('#gallery_pos1 .gallery_box4').addClass('gallery_ap4');
                    $(window).off("scroll", gallerybox1);
                }
            }

            function gallerybox2() {
                if ($(window).scrollTop() + $(window).height() - 400 > galleryOffset[2] && $(window).scrollTop() + $(window).height() - 1000 < galleryOffset[2]) {
                    $('#gallery_pos2').removeClass('op0');
                    $('#gallery_pos2 .gallery_box5').addClass('gallery_ap0');
                    $('#gallery_pos2 .main_gallery:nth-of-type(2)').addClass('gallery_ap0');
                    $('#gallery_pos2 .main_gallery:nth-of-type(3)').addClass('gallery_ap1');
                    $('#gallery_pos2 .gallery_box7').addClass('gallery_ap2');
                    $('#gallery_pos2 .gallery_box8').addClass('gallery_ap3');
                    $(window).off("scroll", gallerybox2);
                }
            }

            function gallerybox3() {
                if ($(window).scrollTop() + $(window).height() - 400 > galleryOffset[3] && $(window).scrollTop() + $(window).height() - 1000 < galleryOffset[3]) {
                    $('#gallery_pos3').removeClass('op0');
                    $('#gallery_pos3 .gallery_box1').addClass('gallery_ap0');
                    $('#gallery_pos3 .gallery_box9').addClass('gallery_ap1');
                    $('#gallery_pos3 .gallery_box7').addClass('gallery_ap2');
                    $('#gallery_pos3 .gallery_box10').addClass('gallery_ap3');
                    $(window).off("scroll", gallerybox3);
                }
            }

            function gallerybox4() {
                if ($(window).scrollTop() + $(window).height() - 400 > galleryOffset[4] && $(window).scrollTop() + $(window).height() - 1000 < galleryOffset[4]) {
                    $('#gallery_pos4').removeClass('op0');
                    $('#gallery_pos4 .gallery_box0').addClass('gallery_ap0');
                    $('#gallery_pos4 .gallery_box1').addClass('gallery_ap1');
                    $('#gallery_pos4 .gallery_box11').addClass('gallery_ap2');
                    $('#gallery_pos4 .main_gallery:nth-of-type(4)').addClass('gallery_ap2');
                    $('#gallery_pos4 .main_gallery:nth-of-type(5)').addClass('gallery_ap3');
                    $(window).off("scroll", gallerybox4);
                }
            }
        } else {
            gallerybox0sp();
            gallerybox1sp();
            gallerybox2sp();
            gallerybox3sp();
            gallerybox4sp();
            $(window).scroll(gallerybox0sp);
            $(window).scroll(gallerybox1sp);
            $(window).scroll(gallerybox2sp);
            $(window).scroll(gallerybox3sp);
            $(window).scroll(gallerybox4sp);

            function gallerybox0sp() {
                if ($(window).scrollTop() + $(window).height() - 100 > galleryOffset[0] && $(window).scrollTop() + $(window).height() - 1000 < galleryOffset[0]) {
                    $('#gallery_pos0').removeClass('op0');
                    $('#gallery_pos0 .gallery_box0').addClass('gallery_ap0');
                    $('#gallery_pos0 .gallery_box1').addClass('gallery_ap1');
                    $('#gallery_pos0 .gallery_box2').addClass('gallery_ap2');
                    $('#gallery_pos0 .gallery_box3').addClass('gallery_ap3');
                    $(window).off("scroll", gallerybox0sp);
                }
            }

            function gallerybox1sp() {
                if ($(window).scrollTop() + $(window).height() - 100 > galleryOffset[1] && $(window).scrollTop() + $(window).height() - 900 < galleryOffset[1]) {
                    $('#gallery_pos1').removeClass('op0');
                    $('#gallery_pos1 .main_gallery:nth-of-type(1)').addClass('gallery_ap0');
                    $('#gallery_pos1 .main_gallery:nth-of-type(2)').addClass('gallery_ap2');
                    $('#gallery_pos1 .gallery_box4').addClass('gallery_ap4');
                    $(window).off("scroll", gallerybox1sp);
                }
            }

            function gallerybox2sp() {
                if ($(window).scrollTop() + $(window).height() - 200 > galleryOffset[2] && $(window).scrollTop() + $(window).height() - 900 < galleryOffset[2]) {
                    $('#gallery_pos2').removeClass('op0');
                    $('#gallery_pos2 .gallery_box5').addClass('gallery_ap0');
                    $('#gallery_pos2 .main_gallery:nth-of-type(2)').addClass('gallery_ap0');
                    $('#gallery_pos2 .main_gallery:nth-of-type(3)').addClass('gallery_ap1');
                    $('#gallery_pos2 .gallery_box7').addClass('gallery_ap2');
                    $('#gallery_pos2 .gallery_box8').addClass('gallery_ap3');
                    $(window).off("scroll", gallerybox2sp);
                }
            }

            function gallerybox3sp() {
                if ($(window).scrollTop() + $(window).height() - 200 > galleryOffset[3] && $(window).scrollTop() + $(window).height() - 900 < galleryOffset[3]) {
                    $('#gallery_pos3').removeClass('op0');
                    $('#gallery_pos3 .gallery_box1').addClass('gallery_ap0');
                    $('#gallery_pos3 .gallery_box9').addClass('gallery_ap1');
                    $('#gallery_pos3 .gallery_box7').addClass('gallery_ap2');
                    $('#gallery_pos3 .gallery_box10').addClass('gallery_ap3');
                    $(window).off("scroll", gallerybox3sp);
                }
            }

            function gallerybox4sp() {
                if ($(window).scrollTop() + $(window).height() - 200 > galleryOffset[4] && $(window).scrollTop() + $(window).height() - 900 < galleryOffset[4]) {
                    $('#gallery_pos4').removeClass('op0');
                    $('#gallery_pos4 .gallery_box0').addClass('gallery_ap0');
                    $('#gallery_pos4 .gallery_box1').addClass('gallery_ap1');
                    $('#gallery_pos4 .gallery_box11').addClass('gallery_ap2');
                    $('#gallery_pos4 .main_gallery:nth-of-type(4)').addClass('gallery_ap2');
                    $('#gallery_pos4 .main_gallery:nth-of-type(5)').addClass('gallery_ap3');
                    $(window).off("scroll", gallerybox4sp);
                }
            }
        }
    });
});