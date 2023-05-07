$(function() {

	$('.page').click(function() {
		$('.book').attr('id', '');
		$(this).parent().attr('id','clickBook');
	});
	$('#clickBook').animate({
		width: 900,
		height: 600,
		zIndex: 100
	})
	$('#clickBook').turn({
		gradients: true,
		acceleration: true,
		elevation: 50
	});

});

