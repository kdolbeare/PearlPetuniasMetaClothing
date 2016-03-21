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
    getData(url, createSession);
  });
}

function createSession(data) {
  console.log(data.email + "in CreateSession");
  loginData('POST', '/userLogin', data);
}

function loginData(method,url,object) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);

  if (object) {
    xhr.setRequestHeader('Content-Type', 'application/json');
  }

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status < 400) {
      var user = JSON.parse(xhr.responseText);
      console.log(user);
      if (user.email) {
        window.location.href = '/';
      }
    }
  };
  xhr.send(JSON.stringify(object)); 
}