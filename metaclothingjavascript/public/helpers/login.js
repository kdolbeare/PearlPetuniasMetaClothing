onload = function() {
  console.log("login loaded");
  document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
    var obj = {
      email : document.loginForm.email.value,
      password : document.loginForm.password.value
    };
    console.log(obj);
    getData('http://localhost:8080/MetaClothingJava/rest/userTest', listUsers);
    // verbData('PUT','http://localhost:8080/MetaClothingJava/rest/user', listUsers, obj);
  });
}
