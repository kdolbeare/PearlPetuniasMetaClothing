onload = function() {
  console.log("login loaded");


  document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
    var obj = {
      email : document.loginForm.email.value,
      password : document.loginForm.password.value
    };
    console.log(obj);
    var url = 'http://localhost:8080/MetaClothingJava/rest/user/' + obj.email +'/' + obj.password;
    getData(url, createSession, loginValidation);
    getSessionId();
    getCookie();

    for (var i = 0; i < shoppingCart.length; i++) {
      verbData('POST', 'http://localhost:8080/MetaClothingJava/rest/addCart/' + shoppingCart[i] + '/' + userInSession);
    // cart = [];
    numItemsInCart = verbData('GET', 'http://localhost:8080/MetaClothingJava/rest/cartItems/' + userInSession);

  });
}
function getSessionId() {
  getData('getSessionId', getUserId);
};

function getCookie() {
  console.log("in getCookie");
  getData('getCookie', getCart);
};
var userInSession;
function getUserId(data) {
  var userInSession = data;
  console.log("In login.js session id: "+data);
};
var shoppingCart = [];
function getCart(data){
  var shoppingCart = data;
  console.log("in getCart login.js data.length: " +data.length);
};

function loginValidation(){
  console.log("in login validation");
  var form = document.getElementById("loginForm");
  var login = document.createElement("p");
  login.setAttribute("class", "invalid");
  login.innerHTML = "invalid username or password try again";
  form.insertBefore(login, document.getElementById("submit"));
}
