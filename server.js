var express = require('express');    //Express Web Server 
var path = require('path');     //used for file path
var bodyParser = require('body-parser')
var fs = require('fs')

var port = process.env.PORT || 443;

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
 
// parse application/json
app.use(bodyParser.json())

app.get("/apple-app-site-association", function (req, res) {
    // let data = fs.readFileSync("public/apple-app-site-association");

    res.setHeader("Content-Type", "application/json");

    let rawdata = fs.readFileSync("public/apple-app-site-association");
    let student = JSON.parse(rawdata);
    res.end(JSON.stringify(student));

});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});





