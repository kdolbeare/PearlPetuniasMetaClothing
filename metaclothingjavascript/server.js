var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var session = require('express-session');
var credentials = require('./public/credentials.js');
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
var storeLib = require('./lib/store.js');
var signupLib = require('./lib/signup.js');
var logoutLib = require('./lib/logout.js');
var editAddressLib = require('./lib/editAddress.js');
var contactLib = require('./lib/contact.js');

var cookieParser = require('cookie-parser');

var mailer = require('express-mailer');
mailer.extend(app, {
  from:'no-reply@example.com',
  host:'smtp.gmail.com',
  secureConnection:true,
  port:465,
  transportMethod:'SMTP',
  auth:{
    user:'meta.clothes@gmail.com',
    pass:'strongbad'
  }

});

app.post('/sendEmail',function(req,res,next){
  
  app.mailer.send('email',{
    to: 'meta.clothes@gmail.com',
    from:req.body.name,
    subject:req.body.subject,
    body:req.body.message
  },function(err) {
    if(err){
      console.log("ERROR: ");
      console.log(err);
      res.send(true);
      return;
    }
    res.send(true);
  
  });
});


app.use(cookieParser(credentials.cookieSecret));

app.get('/setCookie',function(req,res){
  if(!req.signedCookies.cart){
    console.log("there is not a cart Master!");
  res.cookie('cart',[], {signed : true});
  }else{
    console.log("there is a cart Master!");
    console.log(req.signedCookies.cart.length);
  }
  res.send(true);//change me to whatever is needed
});

app.post('/addToCart',function(req,res){

  var item = req.body.item;
  var price = Number(req.body.price);
  var quant = Number(req.body.quant);
  var total = function(quant,price){return quant*price;};
  console.log("start \n");
  /*check the cart length, if there is nothing just push in the new item.
    if there is something, compare new item til we find a match, increment the quant of the match
  */
  var int = -1;
  if(req.signedCookies.cart.length>0){
    for(var i=0;i<req.signedCookies.cart.length;i++){
      console.log("in loop..."+i);
      if(req.signedCookies.cart[i].item===item){
        int = i;break;
      }
    }
    if(int!==-1){
      req.signedCookies.cart[int].quant = req.signedCookies.cart[int].quant+quant;
      req.signedCookies.cart[int].total = total(req.signedCookies.cart[int].quant,req.signedCookies.cart[int].price);
    }else{
      req.signedCookies.cart.push({item:item,price:price,quant:quant,total:total(quant,price)});
    }
  }else{
    console.log("cart was empty, pushing in...");
    req.signedCookies.cart.push({item:item,price:price,quant:quant,total:total(quant,price)});
  }
  console.log("cart: ");
  console.log(req.signedCookies.cart);
  res.cookie("cart", req.signedCookies.cart, {signed : true});
  res.send(res.cookie.cart.length);
});

app.get('/', function(req,res) {
	console.log("index");
	console.log(req.session.user);
	res.render('index', {session: req.session.user, cart: req.signedCookies.cart.length});
});

app.get('/contact', function(req,res) {
  console.log("contact");
  res.render('contact', {page : contactLib.getContact(), session: req.session.user});
});

app.get('/about', function(req,res) {
	console.log("about");
	res.render('about', {page : aboutLib.getAbout(), session: req.session.user, cart: req.signedCookies.cart.length});
});

app.get('/login', function(req,res) {
	console.log("login in server.js");
	res.render('login', {page : loginLib.getLogin(), cart: req.signedCookies.cart, session: req.session.user});  
});

app.get('/logout', function(req,res) {
	console.log("logout in server.js");
	req.session.user=null;
	res.render('index', {session: req.session.user, cart: req.signedCookies.cart.length});
});

app.get('/signup', function(req,res) {
	console.log("signup in server.js");
	res.render('signup', {page : signupLib.getSignup(), cart: req.signedCookies.cart.length});
});

app.get('/editAddress', function(req,res) {
	console.log("editAddress in server.js");
	res.render('editAddress', {page : editAddressLib.getEditAddress(), session: req.session.user});
});

app.get('/getSessionId', function(req, res) {
	console.log("getSessionId in server.js");
	res.sendStatus(req.session.user);
})

app.post('/userLogin', function(req,res) {
	req.session.user = req.body.id;
	console.log(req.body.id + " in app.get userLogin");
	res.send(req.body);
});

//test method
app.get('/hello', function(req, res){
	res.send('HOLA HELLO META Clothing');
});

app.get('/store', function(req,res) {
	console.log("store");
  console.log(req.signedCookies.cart.length.toString());
	res.render('store', {page : storeLib.getStore(), session: req.session.user, cart: req.signedCookies.cart.length});
});

app.get('/brand', function(req,res){
  console.log("/brand");
  res.render('brand', {page : storeLib.getStore(), session: req.session.user, cart: req.signedCookies.cart.length});
});


app.listen(3000, function(){
	console.log("listening on 3000");
});
