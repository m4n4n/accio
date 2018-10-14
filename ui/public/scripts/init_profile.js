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
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
	   	   success: function(response) {
		      user =  response;
		      userReload();
		      isCarrier(user);
		      requestsSender(user);
		   }
	});
	

$('#logoutnavmob').on('click', function(e) {
	e.preventDefault();
	var url = laravel + '/logout';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   success: function(response) {
	      user = null;
	      userReload();
	   }
	});
});


$('#logoutnav').on('click', function(e) {
	e.preventDefault();
	var url = laravel + '/logout';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   success: function(response) {
	      user = null;
	      userReload();
	   }
	});
});
});

function userReload() {
		if(user && Object.keys(user).length !== 0) {
			document.getElementById('usernav').innerHTML = user.name;
			document.getElementById('usernavmob').innerHTML = user.name;
			document.getElementById('usernavmob').style.display =  'block';
			document.getElementById('usernav').style.display =  'block';
			document.getElementById('logoutnav').style.display =  'block';
			document.getElementById('logoutnavmob').style.display =  'block';
		} else {
			document.getElementById('usernavmob').style.display =  'none';
			document.getElementById('usernav').style.display =  'none';
			document.getElementById('logoutnav').style.display =  'none';
			document.getElementById('logoutnavmob').style.display =  'none';

		}
	}

function isCarrier(user) {
	var url = laravel + '/iscarrier';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   success: function(response) {
	      if(response && Object.keys(response).length !== 0) {
	      	fetchCarrierData(user);
	      }
	   }
	});
}

function fetchCarrierData(user) {
	var url = laravel + '/request/carrier';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   success: function(response) {
	      if(response && Object.keys(response).length !== 0) {
	      	carrierDataLoad(response);
	      }
	   }
	});
}

function requestsSender(user) {
	var url = laravel + '/request/sender';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   success: function(response) {
	      if(response && Object.keys(response).length !== 0) {
	      	senderDataLoad(response);
	      }
	   }
	});
}

function carrierDataLoad(res) {
	console.log(res);
}

function senderDataLoad(res) {
	console.log(res);
}