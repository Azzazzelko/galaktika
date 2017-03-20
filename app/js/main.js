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

	/* datepicker */
	if ($.datepicker) {
		$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: '&#x3c;Пред',
			nextText: 'След&#x3e;',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
			'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
			'Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false
		};
	    $.datepicker.setDefaults($.datepicker.regional['ru']);

	    $( "#datepicker" ).datepicker();
	};

}());