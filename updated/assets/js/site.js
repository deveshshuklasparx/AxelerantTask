$(document).ready(function() {
	// color animate
	$( ".yellow-circle" ).click(function() {
		$( "body" ).removeClass('blue-slide');
		$( "body" ).removeClass('red-slide');
		$( "body" ).toggleClass('yellow-slide');
		$( this ).toggleClass('slide');
		$( ".blue-circle" ).removeClass('slide');
		$( ".red-circle" ).removeClass('slide');
		
	});


	$( ".blue-circle" ).click(function() { 
		$( "body" ).removeClass('red-slide');
		$( "body" ).removeClass('yellow-slide');
		$( "body" ).toggleClass('blue-slide');
		$( this ).toggleClass('slide');
		$( ".yellow-circle" ).removeClass('slide');
		$( ".red-circle" ).removeClass('slide');
 		
	});

	$( ".red-circle" ).click(function() {
		$( "body" ).removeClass('yellow-slide');
		$( "body" ).removeClass('blue-slide');
		$( "body" ).toggleClass('red-slide');	 
		$( this ).toggleClass('slide');
		$( ".blue-circle" ).removeClass('slide');
		$( ".yellow-circle" ).removeClass('slide');
		
	});

	// toggle menu
	$( ".navbar-toggler" ).click(function() {
	  $( "#navbarNavDropdown" ).toggleClass('show');
	   $( ".hamburger" ).toggleClass('active');
	});

	// section-scroll
	$('a[href^="#"]').click(function() {
		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1500);
		return false;
		e.preventDefault();
	});

	// inview js]
	// desc-block
	$('.desc-wrap').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".desc-wrap" ).addClass('fadeIn animated');
	   		}, 200);
		}
		// else{
		// 	$(".desc-wrap" ).removeClass('fadeIn animated');
		// }
	});
	// award-block
	$('.awards-block h2').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".awards-block h2" ).addClass('fadeInLeft animated');
	   		}, 200);
		}
		// else{
		// 	$(".awards-block h2" ).removeClass('fadeInLeft animated');
		// }
	});
	$('.awards-block p').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".awards-block p" ).addClass('fadeInRight animated');
	   		}, 200);
		}
		// else{
		// 	$(".awards-block p" ).removeClass('fadeInRight animated');
		// }
	});
	$('.award-list li').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".award-list li" ).addClass('fadeInUp animated');
	   		}, 200);
		}
		// else{
		// 	$(".award-list li" ).removeClass('fadeInUp animated');
		// }
	});
	// membership-block
	$('.membership-block h2').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".membership-block h2" ).addClass('fadeInLeft animated');
	   		}, 200);
		}
		// else{
		// 	$(".membership-block h2" ).removeClass('fadeInLeft animated');
		// }
	});
	$('.membership-block p').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".membership-block p" ).addClass('fadeInRight animated');
	   		}, 200);
		}
		// else{
		// 	$(".membership-block p" ).removeClass('fadeInRight animated');
		// }
	});
	// join-block
		$('.join-block a').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".join-block a" ).addClass('fadeInUp animated');
	   		}, 200);
		}
		// else{
		// 	$(".join-block a" ).removeClass('fadeInUp animated');
		// }
	});
	// contact-block
	$('.contact-block h2').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".contact-block h2" ).addClass('fadeInLeft animated');
	   		}, 200);
		}
		// else{
		// 	$(".contact-block h2" ).removeClass('fadeInLeft animated');
		// }
	});
	$('.add-wrap').on('inview', function(event, isInView) {		
		if (isInView) {
			setTimeout(function(){
				$(".add-wrap" ).addClass('fadeInRight animated');
	   		}, 200);
		}
		// else{
		// 	$(".add-wrap" ).removeClass('fadeInRight animated');
		// }
	});
}); 