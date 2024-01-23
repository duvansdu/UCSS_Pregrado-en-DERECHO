function eliminarCookies() {
	document.cookie.split(";").forEach(function(c) {
	  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
	});
  }

$(document).ready(function () {
	eliminarCookies();

	$('.form-popup').click(function (event) {
		event.preventDefault();
		$('#popup-form').toggleClass('active');
	});
	$('.fa-close').click(function (event) {
		event.preventDefault();
		$('#popup-form').toggleClass('active');
	});

	const carousel_mobile = $('#carousel-banner');
	const carousel_desc = $('#carousel-cards');
	const carousel_pregrado = $('#carousel-pregrado');
	const carousel_admision = $('#carousel-admision');
	const carousel_alianzas = $('#carousel-alianzas');
	const acreditaciones_c = $('#acreditaciones-c');

	// $('#p-ee-c > a ').click(function (event) {
	// 	event.preventDefault();
	// });

	// $("a").click(function (event) {
	// 	event.preventDefault();
	// 	$("html, body").animate({
	// 		scrollTop: $($(this).attr("href")).offset().top - 300
	// 	}, 500);
	// });

	// $('#p-estudiante > a ').click(function (event) {
	// 	event.preventDefault();

	// });
	// $("#programa-semipresencial a").click(function (event) {
	// 	event.preventDefault();
	// });
	$("a").click(function (event) {
		if ($(this).attr('href', $(this).attr('href'))) {

		} else {
			event.preventDefault();
			// event.preventDefault();
		}

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 100
		}, 500);
	});

	acreditaciones_c.owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 5,
				mouseDrag: false,
				autoplay: false
			}
		}
	});
	carousel_alianzas.owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 5,
				mouseDrag: false,
				autoplay: false
			}
		}
	});

	carousel_mobile.owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	carousel_desc.owlCarousel({
		loop: true,
		dots: true,
		mouseDrag: false,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1,
				mouseDrag: true
			},
			768: {
				items: 2,
				autoplay: false,
				mouseDrag: true
			},
			992: {
				items: 3,
				autoplay: false
			}
		}
	});

	carousel_pregrado.owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3,
				autoplay: false,
				mouseDrag: false
			}
		}
	});

	carousel_admision.owlCarousel({
		loop: true,
		dots: true,
		autoplay: false,
		smartSpeed: 6000,
		margin: 10,
		responsive: {
			0: {
				items: 1,
				mouseDrag: true
			},
			768: {
				items: 3,
				margin: 10
			},
			992: {
				margin: 60
			}
		}
	});




});
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

