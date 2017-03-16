var express = require('express');
var router = express.Router();
var request = require('request');
var random = process.env.RANDOM_HOST || 'http://localhost:8000';

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(random);
  request(random + '/random/cities', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.render('index', { title: body });
  });
});

module.exports = router;
