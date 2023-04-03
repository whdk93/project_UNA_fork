$(function() {
    $('.tMenu>.menu').hover(function() {
        $(this).find('.subMenu').stop().slideDown(1000);
        $(this).find('a').css(color = '#fff');
    }, function() {
        $(this).find('.subMenu').stop().slideUp(1000);
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

    /* go_up버튼 클릭 */
    $('.go_up_img').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
    })

    /* * * * * hover시 color변경 영역 * * * * */
    /* 서브메뉴 hover */
    $('.smenu>a').hover(function() {
        $(this).css({
            color: '#fff'
        });
    }, function() {
        $(this).css({
            color: '#ccc'
        });
    });
    /* 탑메뉴 hover */
    $('.menu').hover(function() {
        $(this).children('a').css({
            color: '#fff'
        });
    }, function() {
        $(this).children('a').css({
            color: '#ccc'
        });
    });
    /* 로그인 영역 hover */
    $('#login_area li').hover(function() {
        $(this).find('a').css({
            color: '#fff'
        });
    }, function() {
        $(this).find('a').css({
            color: '#ccc'
        });
    });
    /* footer link영역 hover */
    $('#footer_link li').hover(function() {
        $(this).find('a').css({
            color: '#fff'
        });
    }, function() {
        $(this).find('a').css({
            color: '#ccc'
        });
    });
    /* 로그인 영역 돋보기 hover */
    $('#login_area .srch_btn').hover(function() {
        $('.srch_img').css({
            filter: 'invert(100%)'
        });
    }, function() {
        $('.srch_img').css({
            filter: 'invert(80%)'
        });
    });


});