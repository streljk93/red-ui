// require
var express = require('express');
var serveStatic = require('serve-static');

// server app
var app = express();

// setting
app.use(serveStatic(__dirname + '/app/'));
// app.use(express.static('app'));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
	console.log('server started '+ port);
});