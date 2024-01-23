$(document).ready(function() {
    let carousel_laboral = $('#laboral-carousel');

    carousel_laboral.owlCarousel({
		loop: false,
		margin: 20,
		dots: false,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3,
				mouseDrag: false,
				autoplay: false
			}
		}
	});
});