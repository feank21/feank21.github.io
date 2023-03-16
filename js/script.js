$('a[href*="#"]').on('click', function(e) {
	e.preventDefault();
	let block = $(this).attr('href').substr(1);
	document.getElementById(block).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});

$('.courses__header').on('click', function() {
	$(this).parents('.courses__item').toggleClass('active');
});