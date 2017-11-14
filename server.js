// require
var express = require('express');

// server app
var app = express();

// setting
app.use(express.static('app'));
// app.set('port', process.env.PORT || 3000);

app.listen(process.env.PORT || 3000, function() {
	console.log('server started... ');
});