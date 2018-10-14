(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('#joincarrierprofile').show();
  	$('#addroutemodaltrigger').hide();
  	$('#becomecarrier').show();
  	$('#addaroute').hide();
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


$('#addroutesubmit').on('click', function(e) {
	e.preventDefault();
	var url = laravel + '/carrier/store';
	$.ajax({
	   	type: 'get',
	   	url: url,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},

	   data: $('#addrouteform').serialize(),
	   success: function(response) {
	   		console.log("chal gaya");
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

	     document.getElementById("tablehead").style.display=" table-header-group";
	      
	      // var tbl=$("<table/>").attr("id","mytable");
		  // $("#tablebody").append(tbl);
		  for(var i=0;i<user.length;i++)
		    {
		        var td1="<tr><td>"+user[i]["user_id"]+"</td>";
		       	var td2="<td>"+user[i].user.name+"</td>";
		        var td3="<td>"+user[i]["date"]+"</td>";
		        var td4="<td>"+user[i]["origin"]+"</td>";
		        var td5="<td>"+user[i]["dest"]+"</td>";
		        var td6="<td>"+user[i]["eth_id"]+"</td>";
		        var td7="<td>"+"<button id='"+user[i]["user_id"]+"'>Select</button>"+"</td></tr>";
		       $("#tablebody").append(td1+td2+td3+td4+td5+td6+td7);

		    }  
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
	      	isCarrier = true;
	      	$('#joincarrierprofile').hide();
	      	$('#addroutemodaltrigger').show();
	      	$('#becomecarrier').hide();
	      	$('#addaroute').show();
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

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function carrierDataLoad(res) {
	var p=groupBy(res, 'state');
	  		$('#carrier-route-results').empty();
	for (var key in p) {
  		var state = key;
	     var head = "<div class='subheader-font'>Status:"+state+"<div><table><thead><tr><th>Sender ID</th><th>Route ID</th><th>Ethereum Id</th><th>Time Created</th></tr></thead>";
	     var body = "<tbody>";
		  for(var i=0; i<p[key].length; i++)
		    {
		        var td1="<tr><td>"+p[key][i]["sender_id"]+"</td>";
		       	var td2="<td>"+p[key][i]["route_id"]+"</td>";
		        var td3="<td>"+p[key][i]["eth_id"]+"</td>";
		        var td4="<td>"+p[key][i]["time_created"]+"</td></tr>";
		       	body +=td1+td2+td3+td4;
		     }
		     $('#carrier-route-results').append(head+body+"</tbody></table>");
		}
	}

function senderDataLoad(res) {
	var p=groupBy(res, 'state');
	$('#sender-route-results').empty();
	for (var key in p) {
  		var state = key;
	     var head = "<div class='subheader-font'>Status:"+state+"<div><table><thead><tr><th>Carrier ID</th><th>Route ID</th><th>Ethereum Id</th><th>Time Created</th></tr></thead>";
	     var body = "<tbody>";
		  for(var i=0; i<p[key].length; i++)
		    {
		        var td1="<tr><td>"+p[key][i]["carrier_id"]+"</td>";
		       	var td2="<td>"+p[key][i]["route_id"]+"</td>";
		        var td3="<td>"+p[key][i]["eth_id"]+"</td>";
		        var td4="<td>"+p[key][i]["time_created"]+"</td></tr>";
		       	body +=td1+td2+td3+td4;
		     }
		     $('#sender-route-results').append(head+body+"</tbody></table>");
		}
}