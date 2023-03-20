$.fn.pivot=function(options){
    //변수를 선언
    let $target=$(this);
    let $items=$target.children();
    let $container=$target.wrap("<div></div>").parent();
    let option={
        // pivot의 크기
        width : 500,
        height : 450
    };
    //options(확장)을 처리
    $.extend(option,options);
    //스타일을 지정
    $target.css({
        width : $items.length * option.width,
        height : options.height,
        position : "absolute"
    });
    $items.css({
        width : option.width,
        height : option.height,
        float : "left"
    });
    $container.css({
        width : option.width,
        height : option.height,
        position : "relative",
        overflow : "hidden"
    });
    //이벤트를 연결
    let originLeft=0;
    let oldLeft=0;
    let nowPosition=0;
    let isDown=false;
    $target.on({
        mousedown : function(event){
            isDown=true;
            oldLeft=originLeft=event.clientX;
            event.preventDefault();
        },
        mousemove : function(event){
            if(isDown){
                let distance=oldLeft-event.clientX;
                oldLeft=event.clientX;
                $target.animate({
                    left:"-=" + distance
                },0)
                $target.stop(true)
            }
            event.preventDefault();
        },
        mouseup : function(event){
            // 내부함수
            function movePosition(direction){
                //위치 지정
                let changePosition=nowPosition+direction;
                if(changePosition >=0 && changePosition < $items.length){
                    nowPosition=changePosition;
                }
            }
            //요소의 33프로 이상 드래그했을 경우 피벗
            if(originLeft-event.clientX > option.width/4){
                movePosition(+1);
            }else if(originLeft-event.clientX < -option.width/4){
                movePosition(-1);
            }
            $target.animate({
                left : -nowPosition*option.width
            },500)
            isDown=false;
            event.preventDefault();
        }
    })
}