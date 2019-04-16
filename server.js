var express = require('express');    //Express Web Server 
var path = require('path');     //used for file path
var bodyParser = require('body-parser')

var port = process.env.PORT || 443;

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
 
// parse application/json
app.use(bodyParser.json())

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});





