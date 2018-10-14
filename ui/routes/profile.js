var express = require('express');
var router = express.Router();
const request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
    var user = null;

 //    url =  'http://localhost:8000/checklogin';
	// request.get(url)
	// .withCredentials()
	// .then(response => {
 //    console.log( response);
 //    // assert.equal('tobi', response.text);
 //  });
 //    // .then(json => console.log(json))
 //    // .catch(err => console.error(err));

 //    .then(body => {
 //    	console.log(body.json());
     	res.render('pages/profile' );
    // },
    // error=> {
    	// console.log('we');
    // }
    // );
});

module.exports = router;