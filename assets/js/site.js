
$(document).ready(function(){
	$('.hamburger').click(function(e){
		e.stopPropagation();
		$(this).toggleClass('open');
		 $(".menu").toggleClass("right-to-left");
	});
	$('.log-in-button').click(function(e){
		 e.stopPropagation();
		 $(".login-form-wrapper").toggleClass("left-to-right");
		  $(".login-form").toggleClass("slide");
		
		 	 
		
});
$(document).click(function(){
 $(".menu").removeClass("right-to-left");
 $(".hamburger").removeClass('open');
  $(".login-form-wrapper").removeClass("left-to-right");
  $(".login-form").removeClass("slide");

 
});

$(".menu").click(function(e){
e.stopPropagation();
});
$(".not-hide").click(function(e){
e.stopPropagation();
});
});

