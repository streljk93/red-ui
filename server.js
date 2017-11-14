// require
var express = require('express');

// server app
var app = express();

// setting
app.use(express.static('app'));
var port = process.env.PORT || 3000

app.listen(port, function() {
	console.log('server started... ');
});