var gzip = require('gzip-js'),
    options={
        level: 9,
        name: '/logs/*.log',
    }
var favicon = require('serve-favicon');
var app = require('express')(),
	port = process.env.PORT || 80,
	morgan = require('morgan');

//conf
app.use(morgan('prod'));

//route
app.get('/', function(req, res){

res.sendFile(__dirname + '/templates/pages/index.html');
});

app.get('/hakkimizda', function(req, res){

	res.sendFile(__dirname+ '/templates/pages/hakkimizda.html');

});

app.use(function(req, res, next) {
	res.status(404);
	res.sendFile(__dirname + '/templates/err/404.html');
  });
app.use(function(req, res, next) {
	res.status(500);
	res.sendFile(__dirname + '/templates/err/500.html');
});

app.use(favicon(__dirname + '/favicon.png'));



//server
app.listen(port, function() {
	console.log('server başlatıldı! http://localhost:' + port);
})

