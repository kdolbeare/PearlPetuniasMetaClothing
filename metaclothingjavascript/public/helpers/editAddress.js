onload = function() {
  console.log("editAddress loaded");
  getSessionId();
};

function getSessionId() {
  getData('getSessionId', editAddresses);
};

function editAddresses(data) {
  console.log(data);
  var url = 'http://localhost:8080/MetaClothingJava/rest/user/' + data;
  console.log(url);
  getData(url, displayUser);
};
function displayUser(user) {
  console.log(user);
}
