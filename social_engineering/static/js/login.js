$(document).ready(function(){
	$("#login-button").click(function(event){
		event.preventDefault();
		$('form').fadeOut(500);
		$('.login').addClass('form-success');
	});
});
