$(function() {
    let image_name = ["star1", "star2"];
    $(".like").click(function() {
        let num = $(this).attr("id").replace("like", "");
        if ($(this).attr("src").indexOf(image_name[0]) !== -1) {
            $(this).attr("src", "./images/" + image_name[1] + ".png");
            alert("스크랩에 추가되었습니다.");
        } else {
            $(this).attr("src", "./images/" + image_name[0] + ".png");
            alert("스크랩을 취소하였습니다.");
        }
    });
});