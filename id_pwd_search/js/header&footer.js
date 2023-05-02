$(function() {
    $('.tMenu>.menu').hover(function() {
        $(this).find('.subMenu').stop(false, false).css({
            backgroundColor : "#fefefe"
        }).slideDown(300);
        $(this).find('a').css(color = '#fff');
    }, function() {
        $(this).find('.subMenu').stop(true, true).slideUp(300);
    });
    $('.home').click(function() {
        window.location = 'index.html'
    });

    let loginSW = false;
    $('#login_area .srch_btn').click(function() {
        // $('#header_search').slideToggle("fast");
        loginSW = !loginSW;
        if(loginSW) {
            $('#header_search').animate({
                top: '100px'
            });
        }else {
            $('#header_search').animate({
                top: '0px'
            });
        }
    });
    // logo hover turn
    $(".main_logo_img").hover(function(){
        $(this).stop().animate({
            rotate : "-180deg"
        },800);
    },function(){
        $(this).stop().animate({
            rotate : "0deg"
        },800)
    });

    /* * * * * hover시 color변경 영역 * * * * */
    /* 서브메뉴 hover */
    $('.smenu>a').hover(function() {
        $(this).css({
            color: '#f00'
        });
    }, function() {
        $(this).css({
            color: '#000'
        });
    });
    /* 탑메뉴 hover */
    $('.menu').hover(function() {
        $(this).children('a').css({
            color: '#f00'
        });
    }, function() {
        $(this).children('a').css({
            color: '#000'
        });
    });
    /* 로그인 영역 hover */
    $('#login_area li').hover(function() {
        $(this).find('a').css({
            color: '#f00'
        });
    }, function() {
        $(this).find('a').css({
            color: '#000'
        });
    });
    /* footer link영역 hover */
    $('#footer_link li').hover(function() {
        $(this).find('a').css({
            color: '#f00'
        });
    }, function() {
        $(this).find('a').css({
            color: '#000'
        });
    });
    /* 로그인 영역 돋보기 hover */
    // $('#login_area .srch_btn').hover(function() {
    //     $('.srch_img').css({
    //         filter: 'invert(100%)'
    //     });
    // }, function() {
    //     $('.srch_img').css({
    //         filter: 'invert(80%)'
    //     });
    // });

    // fixed bookmark hover
    let bkSW = false;
    $('#bookmark_div_wrap').click(function() {
        bkSW = !bkSW;
        if(bkSW) {
            $('#bookmark_div_wrap').animate({
                left : 0
            });
        }else {
            $('#bookmark_div_wrap').animate({
                left: '-233px'
            });
        }
    });
    $(".bookmark_li>a").hover(function(){
        $(this).css({
            transition: "ease 0.4s",
            backgroundColor : "rgb(126, 129, 222)",
            color : "#fff"
        })
    }, function(){
        $(this).css({
            backgroundColor : "#f0f0f0",
            color : "#555"
        })
        $(".bk_li_3>a").css({
            backgroundColor : "rgb(126, 129, 222);",
            color : "#fff"
        })
    })
    // go_up_
    $(".go_up_img").click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
    })
});