$(window).on('load resize', function() {
    $(".zoom").colorbox({
        returnFocus: false,
        fixed: true,
        arrowKey: false,
        maxWidth: "90%",
        maxHeight: "90%",
    });
    $(".otherSlide").colorbox({
        returnFocus: false,
        fixed: true,
        arrowKey: false,
        // width: "90%",
        maxWidth: "90%",
        // maxHeight: "950px",
        inline: true,
        rel: 'others',
        onOpen: function() {
            $('#colorbox').addClass('cbox_otherSlide');
            $('body').css('overflow', 'hidden');
            $('#cboxOverlay').css('background', 'rgba(200,200,200,0.5)');
        },
        onClosed: function() {
            $('#colorbox').removeClass('cbox_otherSlide');
            $('body').css('overflow', 'auto');
            $('#cboxOverlay').css('background', 'white');
        },
    });
    $(".otherSlide_sp").colorbox({
        returnFocus: false,
        fixed: true,
        arrowKey: false,
        width: "100%",
        height: "100%",
        // maxWidth: "100%",
        // maxHeight: "100%",
        inline: true,
        rel: 'others_sp',
        scrolling: false,
        onOpen: function() {
            $('#colorbox').addClass('cbox_otherSlide_sp');
            $('body').css('overflow', 'hidden');
            $(".cbox_otherSlide_sp #cboxContent").append("<div id='controller_box'><span id='to_0' class='controller'></span><span id='to_1' class='controller'></span><span id='to_2' class='controller'></span><span id='to_3' class='controller'></span><span id='to_4' class='controller'></span><span id='to_5' class='controller'></span><span id='to_6' class='controller'></span><span id='to_7' class='controller'></span><span id='to_8' class='controller'></span><span id='to_9' class='controller'></span><span id='to_10' class='controller'></span><span id='to_11' class='controller'></span><span id='to_12' class='controller'></span></div>");
        },
        onCleanup: function() {
            $('#controller_box').remove();
        },
        onClosed: function() {
            $('#colorbox').removeClass('cbox_otherSlide_sp');
            $('body').css('overflow', 'auto');
        }
    });
    if (windoWidth <= 700) {
        $(".cbox_otherSlide").css('display', 'none');
    }

    // $("#cboxCurrent").remove();
    // var content = $(".others_modal_box");
    // var contentArr = []
    // $.each(content,function(i){
    //     contentArr.push(content[i]);
    // });
    // $(document).on("click",".controller",function(){
    //     $(".controller").text("○");
    //     $(this).text("●");
    //     var pageNum = $(this).attr("id").split("_");
    //     pageNum = Number(pageNum[1]);
    //     launch($related[pageNum]);
    //     // $("#cboxLoadedContent").children(".others_modal_box").replaceWith(contentArr[pageNum]);
    // });
    // $(document).on("click","#cboxPrevious, #cboxNext",function(){
    //     var currentNum = $("#cboxLoadedContent").children(".inline_content").attr("id").split("_")
    //     currentNum = Number(currentNum[1])
    //     var index;
    //     if ( $(this).attr("id") == "#cboxNext" ) {
    //         if ( currentNum < 2 ) {
    //             index = currentNum+1
    //         } else {
    //             index = 0
    //         }
    //     } else {
    //         if ( currentNum == 0 ) {
    //             index = 2
    //         } else {
    //             index = currentNum-1
    //         }
    //     }
    //     $("#cboxLoadedContent").children(".inline_content").replaceWith(contentArr[index])
    // });

    $(".gallerySlide").colorbox({
        returnFocus: false,
        fixed: true,
        arrowKey: false,
        // width: "90%",
        maxWidth: "90%",
        maxHeight: "950px",
        opacity: .6,
        inline: true,
        rel: 'gallery',
        onOpen: function() {
            $('#colorbox').addClass('cbox_gallerySlide');
            $('body').css('overflow', 'hidden');
            $('#cboxOverlay').css('background', 'rgba(200,200,200,0.5)');
        },
        onLoad: function() {
            $('.gallerySlide_box .gallery_intro').addClass('op0');
        },
        onClosed: function() {
            $('#colorbox').removeClass('cbox_gallerySlide');
            $('body').css('overflow', 'auto');
            $('#cboxOverlay').css('background', 'white');
        }
    });
    var galleryChange = 0;
    $(".gallerySlide_sp").colorbox({
        returnFocus: false,
        fixed: true,
        arrowKey: false,
        maxHeight: "600px",
        inline: true,
        rel: 'gallery_sp',
        maxWidth: "100%",
        opacity: .9,
        onOpen: function() {
            $('#colorbox').addClass('cbox_gallerySlide_sp');
            $('body').css('overflow', 'hidden');
            $(".cbox_gallerySlide_sp #cboxContent").append("<div id='controller_box_gallery'><span id='toGallery_0' class='controller'></span><span id='toGallery_1' class='controller'></span><span id='toGallery_2' class='controller'></span><span id='toGallery_3' class='controller'></span><span id='toGallery_4' class='controller'></span><span id='toGallery_5' class='controller'></span><span id='toGallery_6' class='controller'></span><span id='toGallery_7' class='controller'></span><span id='toGallery_8' class='controller'></span><span id='toGallery_9' class='controller'></span><span id='toGallery_10' class='controller'></span><span id='toGallery_11' class='controller'></span><span id='toGallery_12' class='controller'></span><span id='toGallery_13' class='controller'></span><span id='toGallery_14' class='controller'></span><span id='toGallery_15' class='controller'></span><span id='toGallery_16' class='controller'></span><span id='toGallery_17' class='controller'></span><span id='toGallery_18' class='controller'></span><span id='toGallery_19' class='controller'></span><span id='toGallery_20' class='controller'></span><span id='toGallery_21' class='controller'></span><span id='toGallery_22' class='controller'></span><span id='toGallery_23' class='controller'></span></div>");
        },
        onLoad: function() {
            $('#gallery2_sp').children('img').attr('src', 'img/gallery/zoom/2-1.jpg');
            $('#gallery13_sp').children('img').attr('src', 'img/gallery/zoom/13-1.jpg');
            $('#gallery21_sp').children('img').attr('src', 'img/gallery/zoom/21-1.jpg');
            galleryChange = 0;
        },
        onCleanup: function() {
            $('#controller_box_gallery').remove();
        },
        onClosed: function() {
            $('#colorbox').removeClass('cbox_gallerySlide_sp');
            $('body').css('overflow', 'auto');
        },
    });

    // $('#colorbox').on('touchstart', onTouchStart);
    // $('#colorbox').on('touchmove', onTouchMove);
    // $('#colorbox').on('touchend', onTouchEnd);
    // $('#top_logo_sp').on('touchstart', onTouchStart);
    // var direction;
    // var position;
    // function onTouchStart(event) {
    //   position = event.originalEvent.changedTouches[0].pageX;
    //   direction = '';
    // }
    //
    // function onTouchMove(event) {
    //   if (position - event.originalEvent.changedTouches[0].pageX > 70) {
    //     direction = 'left';
    //   } else if (position - event.originalEvent.changedTouches[0].pageX < -70){
    //     direction = 'right';
    //   }
    // }
    //
    // function onTouchEnd(event) {
    //   if (direction == 'right'){
    //     alert('右だよ');
    //   } else if (direction == 'left'){
    //      alert('左だよ');
    //   }
    // }




    // gallery_change_sp
    $('#gallery2_sp').on('click', function() {
        if (galleryChange == 0) {
            $(this).children('img').attr('src', 'img/gallery/zoom/2-2.jpg');
            galleryChange = 1;
        } else {
            $(this).children('img').attr('src', 'img/gallery/zoom/2-1.jpg');
            galleryChange = 0;
        }
    });
    $('#gallery13_sp').on('click', function() {
        if (galleryChange == 0) {
            $(this).children('img').attr('src', 'img/gallery/zoom/13-2.jpg');
            galleryChange = 1;
        } else {
            $(this).children('img').attr('src', 'img/gallery/zoom/13-1.jpg');
            galleryChange = 0;
        }
    });
    $('#gallery21_sp').on('click', function() {
        if (galleryChange == 0) {
            $(this).children('img').attr('src', 'img/gallery/zoom/21-2.jpg');
            galleryChange = 1;
        } else {
            $(this).children('img').attr('src', 'img/gallery/zoom/21-1.jpg');
            galleryChange = 0;
        }
    });
    // $(".masterup.zoom").colorbox({
    //    returnFocus: false,
    //    arrowKey: false,
    //    fixed: true,
    //    rel: 'masterup',
    //    maxWidth: "80%",
    //    maxHeight: "80%"
    //  });
    // $("#gallery_area .zoom").colorbox({
    //   returnFocus: false,
    //   arrowKey: false,
    //   fixed: true,
    //   rel: 'gallery_img',
    //   width: "80%",
    //   maxWidth: "80%",
    //   height: "100%",
    //   maxHeight: "80%",
    //   onComplete:function(){ $('<div class="gallery_btn"><img src="img/gallery/zoom/btn.png"></div><p id="gallery_intro"></p>').insertAfter('.cboxPhoto'); },
    // });
    // $(".main_otherSlide_area .zoom").colorbox({
    //   inline: true,
    //   maxHeight: "950px",
    //   maxWidth: "100%",
    //   innerHeight: "950px"
    // });
    $(".HD_box01 .zoom").colorbox({
        returnFocus: false,
        fixed: true,
        rel: 'camp_group',
        loop: false,
        maxWidth: "100%",
        maxHeight: "100%"
    });
    $(".HD_one .zoom").colorbox({
        returnFocus: false,
        fixed: true,
        arrowKey: false,
        maxWidth: "100%",
        maxHeight: "100%"
    });
    $(".HD_group5 .zoom").colorbox({
        returnFocus: false,
        fixed: true,
        arrowKey: false,
        rel: 'group_5',
        maxWidth: "100%",
        maxHeight: "100%"
    });
});

// gallery change
$(window).on('load', function() {
    $('#gallery2').on('mouseover', function() {
        if ($(this).children("div").hasClass('op0')) {
            $(this).children('img').attr('src', 'img/gallery/zoom/2-2.jpg');
        };
    });
    $('#gallery2').on('mouseout', function() {
        if ($(this).children("div").hasClass('op0')) {
            $(this).children('img').attr('src', 'img/gallery/zoom/2-1.jpg');
        };
    });
    // $('#cboxContent').on('mouseover',function(){
    //   if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/2-1.jpg'){
    //     $('.cboxPhoto').attr('src','img/gallery/zoom/2-2.jpg');
    //   };
    // });
    // $('#cboxContent').mouseout(function(){
    //   if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/2-2.jpg'){
    //     $('.cboxPhoto').attr('src','img/gallery/zoom/2-1.jpg');
    //   };
    // });

    $('#gallery13').on('mouseover', function() {
        if ($(this).children("div").hasClass('op0')) {
            $(this).children('img').attr('src', 'img/gallery/zoom/13-2.jpg');
        };
    });
    $('#gallery13').on('mouseout', function() {
        if ($(this).children("div").hasClass('op0')) {
            $(this).children('img').attr('src', 'img/gallery/zoom/13-1.jpg');
        };
    });

    $('#gallery21').on('mouseover', function() {
        if ($(this).children("div").hasClass('op0')) {
            $(this).children('img').attr('src', 'img/gallery/zoom/21-2.jpg');
        };
    });
    $('#gallery21').on('mouseout', function() {
        if ($(this).children("div").hasClass('op0')) {
            $(this).children('img').attr('src', 'img/gallery/zoom/21-1.jpg');
        };
    });
});



$(window).on('load', function() {
    $(document).on('click', '.gallery_btn', function() {
        if ($(this).next("div").hasClass('op0')) {
            $(this).next("div").removeClass('op0');
            // $(this).prev("img").css('opacity', '.3');
            if ($(this).prev("img").attr('src') == 'img/gallery/zoom/21-2.jpg') {
                $(this).prev("img").attr('src', 'img/gallery/zoom/21-1.jpg');
            };
        } else {
            $(this).next("div").addClass('op0');
        };

        // if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/1.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('「穢された櫻が再び咲く。まるでこの櫻は、咲く刻を知っているかの様に、決まった周期で……みずからが咲く。櫻ノ刻をきざむ」<br>長山香奈は『櫻達の色彩の足跡』の前で呟いた。偽りの名がついた草薙直哉の作品なんていらない、<br>だから私はこの絵画を穢したと嘯く彼女は何をもって、この言葉を口にしたのであろうか？<br>長山香奈と草薙直哉の対話から『刻』という物語は始まる。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/2-2.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('黙ってそっぽを向く鈴菜。「うわぁ……、すごいよ。これっ。草薙ちゃんっッ」と、<br>ルリヲに無理矢理顔を直哉側に向けさせられた鈴菜は、あり得ないほど顔を真っ赤にさせていた。<br>直哉に好意を寄せながらも、懸命に距離を取らなければならない鈴菜でも、やはりうれしい気持ちは止められなかった。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/3.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('姉妹校から弓張学園に復帰した藍は、教師になった直哉の良き先輩であり、相談相手である。直哉は教室では敬語、自宅ではタメ口という微妙な関係ではある。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/4.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('正規雇用祝いで手料理を振る舞う藍。直哉はそれまで食べた事がない紅ショウガ鳥天のおいしさに驚愕する。そして、いつもと違いちょっと贅沢なビール。発泡酒でも第三のビールでもない、ちょっとした違いが、日常の幸せを実感させてくれる。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/5.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('夏目家に集まった弓張学園美術部の生徒達。再び動き出した部を祝う。今度は藍もいるので、ジュースにお酒が混ざるような事はないであろう……。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/6.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('過去、美術部の部員と共に合宿し、そして花火を見上げたプール。水のないプールの底で二人は横になり、空の星々を見る。「春の大曲線は、まるでブロンドの天使が描いた軌跡みたいだ」直哉はそう呟いた。直哉の脳裏には夏目圭の姿があった。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/7.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('弓張で起きている異変を調べるために、直哉を尾行していた真琴はすぐに見つかってしまう。長山香奈が動いており彼女を追っているとの事であった。「お前、髪の毛にワックスかけているの？」、その一言で帽子を深々とかぶる真琴。「わ、私だって！　まだそこまで捨ててるわけじゃないもん！！」と、近づいた直哉を怒鳴る。どうやらお風呂に入ってなかった様だ……。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/8.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('ムーア展歴代の受賞作が展覧される催しが行われた。弓張学園美術部の生徒達が最後に集まった絵画は、夏目圭作『向日葵』であった。圭との想い出から抜け出し、その先、教師としての当たり前の人生を歩む事を決意する直哉であった。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/9.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('天才を作るためだけに存在する宮崎絵画学校。青年芸術家達が集まる場所で、一人だけ不釣り合いな姿があった。中村圭。その後に『K』としてデビューし、雅号『夏目圭』として知られる若き天才画家だ。だが、彼はまだ知らない。宮崎絵画学校にいるどんな人間よりも、恐ろしいほどの美しさを引き連れた芸術家の存在を……。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/10.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('日本画壇に脅威をもって迎えられた名画『火水』。あまりの技術の高さから青年であると思われていたが、その作者はまだ幼い少年であった。マスコミは連日の様に、文展を受賞した草薙直哉を報じた。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/11.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('ニューヨークの個展で発表された『火（仮）』は、戦争賛歌の絵画ではないか？と一部で話題になり、マスコミでも取り上げられる。だが、その絵を見た瞬間に中村圭だけが、この作品が持つ本質を見抜く。そして、それが今の自分では決して届かない場所である事も直感した。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/12.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('文展で初めて出会う二人。だが、圭にとっては憧れであり、目指したその姿であった。美の怪物、草薙直哉。彼にとって終生のライバルであり、目指す背中であり、そして美によってつながった親友であった。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/13-2.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('すべてを捨てて無知の人となって絵を描き続ける圭。そんな圭の元に一人の少女があらわれた。彼女は出会うなり「夏目家に来い」と言った。意味も分からず抵抗する圭。だが、小柄な少女なのにまったく抵抗が出来ない。「うるさい！　はなせゴリラ女！！」「ゴリラ女とは、たいそうな言い方をするなぁ。お姉さんに向かって……」、少女の名は夏目藍。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/14.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('「これ静流の作品でしょ？」、美術部に無数ある陶磁器からその作品を当てる中村麗華。彼女はその他の作品もほぼ作者を当ててしまう。本物に囲まれているから自分には本物が分かる。それは家の力であり、そんな中村家に誇りを持っていると語る麗華。愚直なほど自らの血を信じる麗華と静流、その二人に大きな亀裂が入る事になる。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/15.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('「私は火を焼べてしまったのだからな……」、釜にまき入れをしている静流に紗希は静かに言った。その言葉の意味を、この時にはまだ静流は正しく理解していなかった。陶磁器に青春を捧げた鳥谷静流の人生が、この時から大きく動き出す。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/16.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('親友同士であった中村麗華と鳥谷静流。だが、その関係も弓張学園クーデターによってすべてが変わってしまう。心がどんどん歪み荒んでいく親友を、鳥谷静流は変える事が出来るのだろうか？　それとも静流は――');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/17.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('弓張学園クーデターと、その代償。鳥谷紗希ですらどうにも出来ない事がある。その事を、紗希は静流に話す。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/18.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('リモージュにやってきた鳥谷静流。ここで、彼女は長い長い夏休みを経験する。これが、長い長い青春のあとしまつの始まりとなる。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/19.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('誰の墓だか分からずに、幼い時から連れられてきた場所。そこにはいつも油絵の具が備えられていた。その意味を寧はとある年齢の時に教わり、はじめて彼女は油絵の具を手にする。その時から、彼女は自分が絵画を描くのは運命であると思った。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/20.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('見た事がない技法、無数の筆と絵の具とが地面には並んでいる。巨大なキャンバスの前で片目をつぶり、何かを確認しながら色を落としている。恩田寧の描き方は、草薙直哉をしてもまったく理解しがたいものであった、だがそのキャンバスに太陽の光が差した瞬間――。「ただ一つの目標」にだけ絵を描いているという恩田寧、彼女の目標とはいかなるものであろうか？');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/21-2.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('直哉が美術室に入ってきても気が付かないルリヲ。とてつもない集中力で絵画を仕上げていく。ア・ロウアワーキウイという雅号を持ち、三科展や複数の有名公募展を受賞してきた氷川ルリヲの姿は、絵画を辞めてしまっている姉、氷川里奈の全盛期を彷彿とさせた。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/22.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('芸術とは、単なる美しいものではない。美という祝福と呪いを持ったものこそが、魂を揺さぶる。暗くなった部屋で一人立つ寧に、優しく語りかけたのは友人のノノ未であった。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/23.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('大音量のロックを聴きながら海を見つめる心鈴。その横を通り過ぎようとした直哉は「ご挨拶だけで通りすぎるのですか？」と言われ一緒に海を見る。彼女はミサゴを指さし、そしてその冠羽を「心意気」だと呼んだ。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // } else if($('.cboxPhoto').attr('src') == 'img/gallery/zoom/24.jpg'){
        //   if($('#gallery_intro').hasClass('appearance')) {
        //     $('#gallery_intro').html("");
        //     $('#gallery_intro').removeClass('appearance');
        //   } else {
        //     $('#gallery_intro').html('猫をこよなく愛する少女、本間心鈴。だが、猫に愛される事はない。それは彼女が持つ独特な性質故であった。');
        //     $('#gallery_intro').addClass('appearance');
        //   };
        // };
    });
});