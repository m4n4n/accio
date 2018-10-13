(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var user = null;

$(document).ready(function(){
    $('.modal').modal();
    url = laravel + '/checklogin';
	
	$.ajax({
		   type: 'get',
		   url: url,
	   	   success: function(response) {
		      user =  response;
		      userReload();
		   }
	});
});

function userReload() {
		console.log("'*************");
		console.log(user);
		// if(Object.keys(user).length !== 0) {
			console.log(document.querySelector('#loginnav'));
			login = document.querySelector('#loginnav');
			login.classList.add('hide');
			// document.getElementById('usernav').innerHTML = user.name;
			console.log(document.getElementById('loginnav').style.display);
			console.log(document.getElementById('loginnav'));
		// } else {
			// document.getElementById('signupnav').setAttribute('style', 'display: block;');
			// document.getElementById('loginnav').setAttribute('style', 'display: block;');
			// document.getElementById('usernav').setAttribute('style', 'display: none;');
		}