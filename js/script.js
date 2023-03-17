$('a[href*="#"]').on('click', function(e) {
	e.preventDefault();
	let block = $(this).attr('href').substr(1);
	document.getElementById(block).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
	$('body').removeClass('menu-active');
});

$('.courses__header').on('click', function() {
	$(this).parents('.courses__item').toggleClass('active');
});

$('.btn-menu').on('click', function() {
	if ($('body').hasClass('menu-active')) {
		$('body').removeClass('menu-active');
	} else {
		$('body').addClass('menu-active');
	}
});