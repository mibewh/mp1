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

	//Navbar
	var navOffset = 72;
	var introPos = $('#intro').offset().top - navOffset;
	var videoPos = $('#video').offset().top - navOffset;
	var tricolumnPos = $('#tricolumn').offset().top - navOffset;
	var carouselPos = $('#carousel').offset().top - navOffset;
	//Clicking nav link
	$('#home').click(function() {
		$('html, body').animate({
			scrollTop: introPos
		}, 750);
	});
	$('#action').click(function() {
		$('html, body').animate({
			scrollTop: videoPos
		}, 750);
	});
	$('#process').click(function() {
		$('html, body').animate({
			scrollTop: tricolumnPos
		}, 750);
	});
	$('#crew').click(function() {
		$('html, body').animate({
			scrollTop: carouselPos
		}, 750);
	});
	//Position indicator
	var setActive = function(elem) {
		$('.navopt').removeClass("active");
		elem.addClass('active');
	}
	var setNav = function() {
		var navPos = $(window).scrollTop();
		// var navPos = $('#main').offset();
		if(navPos < videoPos) {
			setActive($('#home'));
		}
		else if(navPos < tricolumnPos) {
			setActive($('#action'));
		}
		else if(navPos < carouselPos) {
			setActive($('#process'));
		}
		else {
			setActive($('#crew'));
		}
		//Check bottom
		console.log((navPos+$(window).height()) + "," + $(document).height());
		if(navPos + $(window).height() >= $(document).height()-5) {
			// alert('rock BOTTOM');
			setActive($('#crew'));
		}
	}
	$(document).scroll(function() {
		setNav();
	});
	setNav();
	//Expand/shrink navbar
});