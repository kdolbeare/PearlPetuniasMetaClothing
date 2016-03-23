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
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Tyke', displayItems);
});

document.getElementById("babyboo").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Baby%20Boo', displayItems);
});

document.getElementById("bannanademocracy").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Bannana%20Democracy', displayItems);
});

document.getElementById("roughrider").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Rough%20Rider', displayItems);
});

document.getElementById("carterclothing").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Carter%20Clothing', displayItems);
});

document.getElementById("levimouse").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Levi%20Mouse', displayItems);
});

document.getElementById("mousesomething").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Mouse%20Something', displayItems);
});

document.getElementById("straussfrock").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemBrand/Strauss%20Frock', displayItems);
});
//start the bitchen boss ass CATEGORY buttons
document.getElementById("Adult Female").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemCat/Adult%20Female', displayItems);
});

document.getElementById("Jr Female").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemCat/Juvenile%20Female', displayItems);
});

document.getElementById("Adult Male").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemCat/Adult%20Male', displayItems);
});

document.getElementById("Jr Male").addEventListener('click', function(e) {
getData('http://localhost:8080/MetaClothingJava/rest/itemCat/Juvenile%20Male', displayItems);
});


};


function displayItems(itemList) {
   var body = document.querySelector("body");
   var existingList = document.getElementById("items");
   if (existingList != null) {
     clearList(existingList);
   }
   var ul = document.createElement("ul");
   ul.id = "items";
   for (var i = 0; i < itemList.length; i++) {
     var addCart = document.createElement("div");
     var li = document.createElement("li");
     addCart.innerHTML= ">add to cart<";
     addCart.id=itemList[i].id;
     li.innerHTML = itemList[i].name + " $" + itemList[i].price;
     li.appendChild(addCart);
     ul.appendChild(li);
   }
   body.appendChild(ul);
 }

 function clearList(List) {
   list.parentNode.removeChild(list);
 }
