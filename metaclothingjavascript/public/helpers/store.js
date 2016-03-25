var shoppingCart = [];
onload = function() {
  getData('/setCookie', setCookie);
  getData('http://localhost:8080/MetaClothingJava/rest/allItems', displayItems);
  if (document.getElementById('tyke')) {
    addBrandEventListeners();
  } else if (document.getElementById('Adult Female')) {
    addCategoryEventListeners();
  }
  // getSessionId();
  getCookie();
}

// function getSessionId() {
//   getData('getSessionId', displayItems);
// };
//
// function getUserId(data) {
//   console.log("Session id: " + data);
//   return data;
// };

function getCookie() {
  console.log("in getCookie");
  getData('getCookie', getCart);
};

function getCart(data) {
  var shoppingCart = data;
  console.log(data.length);
}

function setCookie(data) {
  console.log("This is in setCookie route, after the readystatechange, Master: " + data);

}

function addBrandEventListeners() {
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

}

function addCategoryEventListeners() {
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

  // document.getElementById("Adult FemalePrice").addEventListener('click', function(e) {
  //   getData('http://localhost:8080/MetaClothingJava/rest/itemCatPrice/Adult%20Female', displayItems);
  // });
  //
  // document.getElementById("Jr FemalePrice").addEventListener('click', function(e) {
  //   getData('http://localhost:8080/MetaClothingJava/rest/itemCatPrice/Juvenile%20Female', displayItems);
  // });
  //
  // document.getElementById("Adult MalePrice").addEventListener('click', function(e) {
  //   getData('http://localhost:8080/MetaClothingJava/rest/itemCatPrice/Adult%20Male', displayItems);
  // });
  //
  // document.getElementById("Jr MalePrice").addEventListener('click', function(e) {
  //   getData('http://localhost:8080/MetaClothingJava/rest/itemCatPrice/Juvenile%20Male', displayItems);
  // });

}


function displayItems(itemList) {
  console.log("in displayItems");
  getData('getSessionId', function(num){
    console.log("got sessionid: " +num);


  var body = document.getElementById("display");
  //  console.log(body);
  var existingList = document.getElementById("items");
  if (existingList) {
    console.log('in if statement');
    existingList.parentNode.removeChild(existingList);
  }
  var div = document.createElement('table');
  div.setAttribute('id', 'items');
  var trh = document.createElement('tr');
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
      if (key == 'description') {
        continue;
      }
      var td = document.createElement('td');
      td.innerHTML = itemList[i][key];
      tr.appendChild(td);
    }
    var addCart = document.createElement("div");
    // addCart.setAttribute("s_id", getData('getSessionId', getUserId));

    addCart.innerHTML = "Add To Cart";
    addCart.setAttribute('class', 'btn btn-info');
    addCart.setAttribute('role', 'button');
    addCart.id = itemList[i].id;
    addCart.addEventListener('click', function(e) {

      console.log(num + " in eventlistener");
        if (num) {
          console.log(addCart.id);
          console.log(num);
          console.log(e.target.id);
          verbData('POST', 'http://localhost:8080/MetaClothingJava/rest/addCart/' + e.target.id + '/' + num)
        } else {
          shoppingCart.push(e.target.id);
          console.log("In else. shoppingCart.length: " + shoppingCart.length);
          console.log(addCart.id);
          console.log(num);
          console.log(e.target.id);
        }

  });
    tr.appendChild(addCart);
    div.appendChild(tr);
  }
  body.appendChild(div);
  });
}
