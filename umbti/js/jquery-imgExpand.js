$.fn.imgExpand = function() {
    /* 변수 선언 */
    let $target = $(this);
    let $img = $target.find('img');
    let $box = $target.wrap('<div></div>').parents();
    let option = {
        transform: 'scale(' + 1.2 + ')',
        opacity: 1
    };
    let width = $target.width;
    let height = $target.height;

    /* 옵션 처리 */
    $.extend(option, option);

    /* 스타일 지정 */
    $img.css({
        // width: $target.length,
        // height: $target.height,
        transform: 'scale('+1+')',
        opacity: option.opacity,
        position: 'relative'
    });
    $box.css({
        // width: $target.length,
        // height: $target.height,
        position: 'relative',
        overflow: 'hidden'
    });

    /* 이벤트 연결 */
    $target.hover(function() {
        $img.css({
            transform: option.transform,
            transition: 'transform 1s'
        });
    }, function() {
        $img.css({
            transform: 'scale(' + 1 + ')',
            opacity: 1
        })
    });
    
};