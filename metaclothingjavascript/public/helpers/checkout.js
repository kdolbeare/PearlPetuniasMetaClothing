onload = function(){
	getSessionId();
}

function getSessionId() {
  getData('getSessionId', getCart);
};

function getCart(num) {
  console.log(num);
  var url = 'http://localhost:8080/MetaClothingJava/rest/cart/' + num;
  getData(url, displayCart);
};

function displayCart(cart) {
 	var display = document.getElementById('display');
 	var existingList = document.getElementById('items');
 	if (existingList) {
    console.log('in if statement');
    existingList.parentNode.removeChild(existingList);
  }
  var div = document.createElement('table');
  div.setAttribute('id', 'items');
  var trh = document.createElement('tr');
  var itemList = cart.items;
  for (var key in itemList[0]) {
    if (key == 'id') {
      continue;
    }
    if (key == 'description') {
      continue;
    }
    var th = document.createElement('th');
    th.innerHTML = key;
    trh.appendChild(th);
  }
  div.appendChild(trh);
for (var i = 0; i < itemList.length; i++) {
    var tr = document.createElement('tr');
    for (var key in itemList[i]) {
      if (key == 'id') {
        continue;
      }

      var td = document.createElement('td');
      td.innerHTML = itemList[i][key];
       if(key == "item"){
       	console.log(itemList[i][key]);
      	td.innerHTML = itemList[i][key].name;
      }
      tr.appendChild(td);
      div.appendChild(tr);
    }
 }
 display.appendChild(div);
}