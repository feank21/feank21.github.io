const countDown = '2023-03-27'; // Дата окончания таймера, формат: год-месяц-день

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

$('.video__btn').on('click', function() {
	if ($('.video').hasClass('active')) {
		$('.video').removeClass('active');
	} else {
		$('.video').addClass('active');
	}
});

$('.open-video').on('click', function() {
	$('.modal-video').addClass('active');
	let url = $(this).data('video');
	$('.modal-video .modal__body iframe').prop('src', url); // Код видео
});

$('.open-form').on('click', function() {
	$('.modal-form').addClass('active');
});

$('.modal__close').on('click', function() {
	$('.modal__wrapper').removeClass('active');
	$('.modal-video .modal__body iframe').prop('src', '');
});

const days = document.querySelector('.date-d');
const hours = document.querySelector('.date-h');
const minutes = document.querySelector('.date-i');
const seconds = document.querySelector('.date-s');

//const deadline = new Date(countDown);
const deadline = new Date(new Date(countDown).getTime() + new Date(countDown).getTimezoneOffset() * 60000);

updateCounter();
let timerId = setInterval(updateCounter, 1000);

function updateCounter() {
	const currentasdupog = new Date();
	const dist = deadline - currentasdupog;

	// Перевод в дни
	const toDays = Math.floor(dist / 1000 / 60 / 60 / 24);
	// Перевод в часы, с учетом остатка деления на 24
	const toHours = Math.floor(dist / 1000 / 60 / 60) % 24;
	// Перевод в минуты, с учетом остатка деления на 60
	const toMinutes = Math.floor(dist / 1000 / 60) % 60;
	// Перевод в секунды, с учетом остатка деления на 60
	const toSeconds = Math.floor(dist / 1000) % 60;

	if (toDays >= 0) {
		let d = toDays < 10 ? '0'+ toDays : toDays.toString();
		let h = toHours < 10 ? '0'+ toHours : toHours.toString();
		let i = toMinutes < 10 ? '0'+ toMinutes : toMinutes.toString();
		let s = toSeconds < 10 ? '0'+ toSeconds : toSeconds.toString();

		days.innerHTML = d.split('').reduce( (r, c) => `${r}<span>${c}</span>`, '');
		hours.innerHTML = h.split('').reduce( (r, c) => `${r}<span>${c}</span>`, '');
		minutes.innerHTML = i.split('').reduce( (r, c) => `${r}<span>${c}</span>`, '');
		seconds.innerHTML = s.split('').reduce( (r, c) => `${r}<span>${c}</span>`, '');
	} else {
		clearTimeout(timerId);
	}
}

const posterSwiper = new Swiper('.poster-swiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	//centeredSlides: true,
	loop: true,
	pagination: {
		el: '.poster .swiper-pagination',
		clickable: true,
		type: "fraction",
	},
	navigation: {
		nextEl: '.poster .swiper-button-next',
		prevEl: '.poster .swiper-button-prev',
	},
		breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	},
});

const reviewsSwiper = new Swiper('.reviews-swiper', {
	slidesPerView: 3,
	spaceBetween: 20,
	//centeredSlides: true,
	loop: true,
	pagination: {
		el: '.reviews .swiper-pagination',
		clickable: true,
		type: "fraction",
	},
	navigation: {
		nextEl: '.reviews .swiper-button-next',
		prevEl: '.reviews .swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		}
	},
});

/*
$('.send-form').on('click', function() {
	let name = $('.modal-form input[name="name"]');
	let phone = $('.modal-form input[name="phone"]');

	if (!name.val()) name.addClass('input-error');
	if (!phone.val()) phone.addClass('input-error');
	if (!name.val() || !phone.val()) return false;

	$.ajax({
		url: '/send.php',
		method: 'POST',
		data: {
			name: name,
			phone: phone,
		},
		beforeSend: function() {},
		success: function(data) {
			name.val('');
			phone.val('');
			$('.modal__info').html('Заявка успешно отправлена!');
		},
		error: function(e) {},
	});
});
*/