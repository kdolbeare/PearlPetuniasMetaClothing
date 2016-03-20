var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var handlebars = require('express-handlebars')
	.create({defaultLayout: 'application'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

// app.set('views', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.get("/", function(req,res){
// 	res.render('test');
// });

var about = require('./lib/about.js');

app.get('/', function(req,res) {
	console.log("index");
	res.render('index');
});

app.get('/about', function(req,res) {
	console.log("about");
	res.render('about', {page : about.getAbout()});
});

app.get('/hello', function(req, res){
	res.send('HOLA HELLO META Clothing');
});

app.listen(3000, function(){
	console.log("listening on 3000");
});
