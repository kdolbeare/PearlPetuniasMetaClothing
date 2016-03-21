var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var session = require('express-session');
var credentials = require('./public/credentials.js')
app.use(session({
	resave: false,
	saveUnitialized: false,
	secret: credentials.cookieSecret
}));

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

//handlebars stuff
var aboutLib = require('./lib/about.js');
var loginLib = require('./lib/login.js');

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

//api connections
app.post('/userLogin', function(req,res) {
	req.session.user = req.body.id;
	console.log(req.body.id + " in app.get userLogin");
	//ask Kris K about this:
	res.render('index');
});

//test method
app.get('/hello', function(req, res){
	res.send('HOLA HELLO META Clothing');
});

app.listen(3000, function(){
	console.log("listening on 3000");
});
