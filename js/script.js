$('a[href*="#"]').on('click', function(e) {
	e.preventDefault();
	let block = $(this).attr('href').substr(1);
	document.getElementById(block).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
	$('.header').removeClass('active');
	$('body').removeClass('_lock');
});

$('.courses__header').on('click', function() {
	$(this).parents('.courses__item').toggleClass('active');
});

$('.btn-menu').on('click', function() {
	if ($('.header').hasClass('active')) {
		$('.header').removeClass('active');
		$('body').removeClass('_lock');
	} else {
		$('.header').addClass('active');
		$('body').addClass('_lock');
	}
});