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

var aboutLib = require('./lib/about.js');
var loginLib = require('./lib/login.js');
var storeLib = require('./lib/store.js');

app.get('/', function(req,res) {
	console.log("index");
	res.render('index');
});

app.get('/about', function(req,res) {
	console.log("about");
	res.render('about', {page : aboutLib.getAbout()});
});

app.get('/login', function(req,res) {
	console.log("login in server.js");
	res.render('login', {page : loginLib.getLogin()});
});

app.get('/hello', function(req, res){
	res.send('HOLA HELLO META Clothing');
});

app.get('/store', function(req,res) {
	console.log("store");
	res.render('store', {page : storeLib.getStore()});
});

app.listen(3000, function(){
	console.log("listening on 3000");
});
