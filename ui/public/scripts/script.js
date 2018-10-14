$(document).ready(function(){

$('#loginsubmit').on('click', function(e) {
	e.preventDefault();
	var url = laravel + '/login';
	$.ajax({
	   type: 'get',
	   url: url,
	   crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   data: $('#loginform').serialize(),
	   success: function(response) {
	      user = response;
	      userReload(); 
	   }
	});
});

$('#signupsubmit').on('click', function(e) {
	e.preventDefault();
	var url = laravel + '/register';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   data: $('#signupform').serialize(),
	   success: function(response) {
	      user = response;
	      userReload();
	   }
	});
});
});

