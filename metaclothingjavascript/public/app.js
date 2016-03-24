function getData(url, callback, validation) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);

  xhr.onreadystatechange = function() {
    console.log(JSON.parse(xhr.responseText));
    if (xhr.status < 400 && xhr.readyState == 4) {
      if(xhr.responseText){
      callback(JSON.parse(xhr.responseText));
      }
    }else{
      if(validation){
        validation();
      }
      
    }
  };

  xhr.send(null);
}

function verbData(method, url, callback, obj, validation) {
  var xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (obj) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('Accept', 'application/json');
  }
  xhr.onreadystatechange = function() {
    if (xhr.status < 400 && xhr.readyState == 4) {
      console.log(xhr.responseText);
      if(xhr.responseText){
        if (callback) {
          callback(JSON.parse(xhr.responseText));
        }
      }
      else{
        if(validation){
          validation();
        }
        
      }
     }
  };

  if (obj) {
    console.log(JSON.stringify(obj) + "in verbData");
    xhr.send(JSON.stringify(obj));
  } else {
    xhr.send(null);
  }

}


function listUsers(data) {
  console.log(data + "in listUsers");

}

function createSession(data) {
  console.log(data + " in CreateSession");
  loginData('POST', '/userLogin', data);
}

function loginData(method, url, object) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);

  if (object) {
    xhr.setRequestHeader('Content-Type', 'application/json');
  }

  xhr.onreadystatechange = function() {
    console.log(object);
    if (xhr.readyState == 4 && xhr.status < 400) {
         var user = JSON.parse(xhr.responseText);
          console.log(user);

        if(user){
          window.location.href = '/';
        }
    }
  };
  xhr.send(JSON.stringify(object));
}
