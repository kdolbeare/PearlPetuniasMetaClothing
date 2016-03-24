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
    for (var i = 0; i < cookie.cart.length; i++) {
      verbData('POST', 'http://localhost:8080/MetaClothingJava/rest/addCart/' + cookie.cart[i] + '/' + session)
    }
  });
}

function loginValidation(){
  console.log("in login validation");
  var form = document.getElementById("loginForm");
  var login = document.createElement("p");
  login.setAttribute("class", "invalid");
  login.innerHTML = "invalid username or password try again";
  form.insertBefore(login, document.getElementById("submit"));

}
