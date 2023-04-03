$(function() {
    let now_num;

    /* umbti.html */
    let index;
    let choice_index = new Array(12);
    
    // 선택지 클릭시 이미지 슬라이드
    $('.umbti_btn').click(function() {
        index = $(this).closest('.umbti').index()+1;
        choice_index[index-1] = $(this).index();
        console.log(index + ':' + choice_index);
        $('#umbti_area').animate({
            left: -(index*382)
        }, 'slow');

        // 상단 진행도 숫자표시 영역 변경
        $('.num_ing').html(index+1);

        // 1페이지 넘어가면 화살표 등장
        if(index > 0){
            $('.prev_arrow').addClass('show');
        }
        // 12페이지 넘어가면 화살표 사라짐
        if(index >= 12){
            $('.poly_count').css({
                visibility : 'hidden'
            });
        }
        $(this).css({
            backgroundColor : '#7000ff',
            color : '#fff'
        });
        $(this).siblings().css({
            backgroundColor : '#fff',
            color : '#000'
        });
    });

    // 뒤로가기 버튼 클릭시 이전 내용으로
    $('.prev_arrow').click(function() {
        index = index-1;
        console.log(index + ':' + choice_index);
        $('#umbti_area').animate({
            left: -(index*382)
        }, 'slow');

        // 상단 진행도 숫자표시 영역 변경
        $('.num_ing').html(index+1);

        // 1페이지로 돌아가면 화살표 사라짐
        if(index < 1){
            $('.prev_arrow').delay(500).removeClass('show');
        } 
        // 13->12페이지로 돌아가면 화살표 등장
        if(index < 12){
            $('.poly_count').css({
                visibility : 'visible'
            });
        }
    });

});
