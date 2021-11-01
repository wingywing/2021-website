$(document).ready(function(){
	$('.projLink').mouseover(function() {
  		myvar = this.id;
  		$(".projectImg").fadeOut("50", "swing");
   		$('#div'+myvar).fadeIn("100", "swing");
	});
});