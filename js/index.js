$(function() {
    /* scroll earth size 영역*/
    
    $(window).scroll(function() {
        let scroll_top = $(window).scrollTop();
        console.log('scroll : ' + scroll_top);

        // if(scroll_top < 1600){
        //     $('.celestial1').stop().animate({
        //         left: -300
        //     }, 0)
        //     $('.celestial2').stop().animate({
        //         left: -300
        //     }, 0)
        //     $('.celestial3').stop().animate({
        //         right: -300
        //     }, 0)
        //     $('.celestial4').stop().animate({
        //         right: -300
        //     }, 0)
        // }
        // if(scroll_top >= 1600){
        //     $('.celestial1').stop().animate({
        //         left: left_of_celestial1
        //     }, 2000, 'easeOutElastic')
        //     $('.celestial2').stop().animate({
        //         left: left_of_celestial2
        //     }, 1800, 'easeOutElastic')
        //     $('.celestial3').stop().animate({
        //         right: right_of_celestial3
        //     }, 2000, 'easeOutElastic')
        //     $('.celestial4').stop().animate({
        //         right: right_of_celestial4
        //     }, 1800, 'easeOutElastic')
        // }
    });

    /* celestial영역 이미지 움직이는 부분*/
    let top_of_celestial1 = parseInt($('.celestial1').css('top'));
    let left_of_celestial1 = parseInt($('.celestial1').css('left'));
    let top_of_celestial2 = parseInt($('.celestial2').css('top'));
    let left_of_celestial2 = parseInt($('.celestial2').css('left'));
    let top_of_celestial3 = parseInt($('.celestial3').css('top'));
    let right_of_celestial3 = parseInt($('.celestial3').css('right'));
    let top_of_celestial4 = parseInt($('.celestial4').css('top'));
    let right_of_celestial4 = parseInt($('.celestial4').css('right'));
    // alert(top_of_celestial1);
    setInterval(() => {
        /* 첫 번째 천체 */
        $('.celestial1').delay(0).animate({
            top: top_of_celestial1-3
        }, 800).animate({
            top: top_of_celestial1
        }, 600);
        /* 두 번째 천체 */
        $('.celestial2').delay(200).animate({
            top: top_of_celestial2-3
        }, 800).animate({
            top: top_of_celestial2
        }, 600);
        /* 세 번째 천체 */
        $('.celestial3').delay(300).animate({
            top: top_of_celestial3-3
        }, 800).animate({
            top: top_of_celestial3
        }, 600);
        /* 네 번째 천체 */
        $('.celestial4').delay(500).animate({
            top: top_of_celestial4-3
        }, 800).animate({
            top: top_of_celestial4
        }, 600);
    },1000);
 



});
