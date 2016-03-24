// Dependencies
var https = require('https');
var querystring = require('querystring');

module.exports = function (credentials, notification){

  // Serialize notification into a query string. See docs @ https://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options, Node.js v0.12.1
  var postData = querystring.stringify(notification);

  // Object that defines https.request(). See docs @ https://nodejs.org/api/https.html#https_https_request_options_callback, Node.js v0.12.1
  var options = {
    hostname: 'api.ionic.io',
    port: 443,
    path: '/push/notifications',
    method: 'POST',
    headers: {
      "Authorization": "Bearer " + credentials.IonicApplicationAPIToken,
      "Content-Type" : "application/json"
    }
  };

  // HTTPS POST request. See docs @ https://nodejs.org/api/https.html#https_https_request_options_callback, Node.js v0.12.1
  var req = https.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });

  // Error handling.
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  // Write data to request body
  req.write(JSON.stringify(notification));
  req.end();

};
