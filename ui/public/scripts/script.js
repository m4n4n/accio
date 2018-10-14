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


$('#searchsubmit').on('click', function(e) {
	e.preventDefault();
	var url = laravel + '/carrier';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
	   data: $('#searchform').serialize(),

	   success: function(response) {
	  	$('#tablebody').empty();
	     
	      user = response;
	      console.log(JSON.stringify(user));

	     document.getElementById("tablehead").style.display="block";
	      
	      var tbl=$("<table/>").attr("id","mytable");
		  $("#tablebody").append(tbl);
		  for(var i=0;i<user.length;i++)
		    {
		        var tr="<tr>";
		        var td1="<td>"+user[i]["date"]+"</td>";
		        var td2="<td>"+user[i]["origin"]+"</td>";
		        var td3="<td>"+user[i]["dest"]+"</td></tr>";
		        var td4="<td>"+user[i]["location"]+"</td></tr>";
		        var td5="<td>"+user[i]["eth_id"]+"</td></tr>";

		       $("#mytable").append(tr+td1+td2+td3+td4+td5);

		    }  
	   }
	});
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
	   // data: $('#signupform').serialize(),
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
	   // data: $('#signupform').serialize(),
	   success: function(response) {
	      user = null;
	      userReload();
	   }
	});
});

});

