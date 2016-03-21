onload=function(){
  console.log("in the store onload");
  var xhr = new XMLHttpRequest();
  xhr.open('GET','/setCookie');
  xhr.onreadystatechange=function(){
    console.log("This is in setCookie route, after the readystatechange, Master: "+xhr.responseText);
  };

  xhr.send(null);

// function createSession(data) {
//   //console.log(data.email + "in CreateCookie");
//   verbData('GET', '/setCookie', null, data);
 }