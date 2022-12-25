$(document).ready(function() {
	$('button.menu-open').click(function(){
		$('.header').css('left','0');

		$(this).css('-ms-transform','scale(0)');
		$(this).css('-webkit-transform','scale(0)');
		$(this).css('transform','scale(0)');
	});
	$('button.close').click(function(){
		$('button.menu-open').css('-ms-transform','scale(1)');
		$('button.menu-open').css('-webkit-transform','scale(1)');
		$('button.menu-open').css('transform','scale(1)');

		$('.header').css('left','-75%');
	});
	$('button#sign-in').click(function(){
		$('.modal-bg').css('display', 'initial');
		$('.sign-in-form').css('display', 'initial');
	});
	$('.modal-bg').click(function(){
		$('.modal-bg').css('display', 'none');
		$('.sign-in-form').css('display', 'none');
	});
})