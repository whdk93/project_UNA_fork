$(function() {
    /* scroll earth size 영역*/
    
    $(window).scroll(function() {
        let scroll_top = $(window).scrollTop();
        console.log('scroll : ' + scroll_top);
        
        /* earth size */
        $('#earth').css({
            transform: 'scale(' + (scrollY + 200)/200 + ')'
        });

        // $('.cele').imgExpand(); 
        // let cele_top = $('.cele').scrollTop();
        // console.log('cele : ' + cele_top);
        // if($(scroll_top > 1800)){
        //     $('.cele').show();
        // } else if (scroll_top == 0){
        //     $('.cele').hide();
        // }
    });
 
    /* skip버튼 클릭 */
    $('.skip.down').click(function() {
        $('html, body').animate({
            scrollTop : $(document).height()
        }, 1000);
        // $('html,body').scrollTop( $(document).height());
    });
    $('.skip.up').click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 1000);
        // $('html,body').scrollTop( $(document).height());
    });


});
