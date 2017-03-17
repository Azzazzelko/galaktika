$(function() {

	/* main-page slider events */
	$('.owl-events').owlCarousel({
		nav:true,
		dots:false,
		margin:77,
		autoWidth:true
	});

	/* main-page slider arendators */
	$('.owl-arenda').owlCarousel({
		nav:true,
		dots:false,
		margin:20,
		autoWidth:true
	});

	/* to top btn */
	$('.footer__bottom-top-btn').on('click', scrollToTop);

	function scrollToTop() {
		verticalOffset = ( typeof(verticalOffset) != 'undefined' ) ? verticalOffset : 0;
		offset = $('body').offset();
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
	};

	/* change div file name attach file */
	$('#register-form__file').on("change", function(e) {
		imgNameToDiv(); 
	});

	var imgNameToDiv = function(e) { 
		var indexForSlice = $('#register-form__file').val().lastIndexOf('\\'); 	
		$('.register-form__label-file').html($('#register-form__file').val().substring(indexForSlice+1)); 
	};

}());