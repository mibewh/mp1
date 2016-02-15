$(document).ready(function() {

	//Modal
	$('#modalButton').click(function() {
		$('#modal-state').show();
	});
	$('#x').click(function() {
		$('#modal-state').hide();
	});

	//Carousel
	var images = $("#images").children(); //Get an array representing the image list
	var cur = 0;

	$('#left').click(function() {
		images.eq(cur).removeClass('disp'); //Hide current image
		cur = cur - 1;
		if(cur < 0) cur = images.length - 1;
		images.eq(cur).addClass('disp'); //Show new image
	});
	$('#right').click(function() {
		images.eq(cur).removeClass('disp'); //Hide current image
		cur = cur + 1;
		if(cur >= images.length) cur = 0;
		images.eq(cur).addClass('disp'); //Show new image
	});
});