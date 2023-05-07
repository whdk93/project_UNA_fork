$(function() {

	$('.page').click(function() {
		$('.book').attr('id', '');
		$(this).parent().attr('id','clickBook');
	});
	$('#pages').animate({
		width: 900,
		height: 600,
		zIndex: 100
	})
	$('#pages').turn({
		gradients: true,
		acceleration: true,
		elevation: 50
	});

});

