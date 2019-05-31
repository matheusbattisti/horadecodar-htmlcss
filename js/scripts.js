$( document ).ready(function() {
   
	var btnMenuMobile = $('.btn-menumobile');

	$('.btn-menumobile').on('click', function() {

		$('.nav-container ul').toggleClass('open');

	});

});
