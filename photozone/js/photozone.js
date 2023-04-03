$(function() {
    /* 배경사진 선택 시 변경 */
    $('#choice_zone').find('img').click(function() {
        $('.photo_choice_notice').css('display','none');
        $('#photo_onload').css('background-color','#000');
        let sampleSRC = $(this).attr('src');
        // alert(sampleSRC);
        $('#bg_img_click').attr('src', sampleSRC);
    });
    /* user_photo 리사이즈, 드래그 */
    let user_photo_width = $('#user_photo').width();
    let user_photo_height = $('#user_photo').height();
    let user_photo_ratio = user_photo_height/user_photo_width;

    $('#user_photo').resizable({
        minWidth: 100,
        maxWidth: 600,
        aspectRatio: true,
        handles: 'all'
    }).css({
        // height: width * user_photo_ratio
    });            
    $('.user_photo_div').draggable({
        scroll: false,
        revert: 'invalid'
    });
    $('#load_zone').droppable({
        accept: '.user_photo_div',
        drop: function(event, ui){}
    });

    /* 사진 업로드 후 user_photo적용 영역 */
    $(":input[name='p_upload']").change(function() {
		if( $(":input[name='p_upload']").val() == '' ) {
			$('#user_photo').attr('src' , 'images/mycat.png');  
		}
		readURL(this);
	});
});

/* 사진 업로드 함수 */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#user_photo').attr('src', e.target.result); 
        }
        reader.readAsDataURL(input.files[0]);
    }
}

/* 이미지를 캡처하여 이미지 파일로 리턴함 */
function downImg(){
    html2canvas($("#photo_onload")[0]).then(function(canvas){
        var myImage = canvas.toDataURL();
        downloadURI(myImage, "una_myimg.png") 
    });
}
/* 캡처된 파일을 이미지 파일로 내보냄 */
function downloadURI(uri, name){
    var link = document.createElement("a")
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
}
