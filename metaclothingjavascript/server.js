var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/", function(req,res){
	res.render('test');
});

app.get('/hello', function(req, res){
	res.send('HOLA HELLO META Clothing');
});

app.listen(3000, function(){
	console.log("listening on 3000");
});