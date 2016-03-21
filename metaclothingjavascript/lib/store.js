var store = {
  title: "Store",
  header: "The Coolest Store",
  description: "We are a clothing retailer marketing primarily to hipsters and the Pabst Blue Ribbon drinkers of the world. We love to follow trends and appreciate a good scarf almost as much as a full beard."
};

exports.getStore = function() {
  return store;
};

function getItems(func, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status < 400) {
      func(JSON.parse(xhr.responseText));
    }
    console.log(xhr.status);
  };
  xhr.send(null);
}

function loadItems(lookup) {
  getItems(displayItems(), "localhost:8080/MetaClothingJava/rest/itemBrand/" + lookup);
}

displayItems(itemList) {
  var body = document.querySelector("body");  
  var ul = new document.createElement("ul");
  ul.id = "items";
  for (var i = 0; i < itemList.length; i++) {
    var li = new document.createElement("li");
    li.innerHTML = itemList[i];
    ul.appendChild(li);
  }
  body.appendChild(ul);
}
