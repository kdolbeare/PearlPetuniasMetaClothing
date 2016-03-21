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
 document.getElementById("tyke").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Tyke', displayItems)
});
}


function displayItems(itemList) {
   var body = document.querySelector("body");
   var ul = document.createElement("ul");
   var addCart = document.createElement("p");
   addCart.innerHTML= ">add to cart<";
   ul.id = "items";
   for (var i = 0; i < itemList.length; i++) {
     var li = document.createElement("li");
     li.innerHTML = itemList[i].name + " $" + itemList[i].price + addCart;
     ul.appendChild(li);
   }
   body.appendChild(ul);
 }
