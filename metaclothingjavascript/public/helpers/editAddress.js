onload = function() {
  console.log("editAddress loaded");
  getSessionId();
};

function getSessionId() {
  getData('getSessionId', getUser);
};

function getUser(data) {
  console.log(data);
  var url = 'http://localhost:8080/MetaClothingJava/rest/userId/' + data;
  console.log(url);
  getData(url, editAddress);
};

function editAddress(user) {
  console.log(user.addresses[0]);
  var form = document.editForm;
  var streetAddress = document.createElement("input");
  streetAddress.type = "text";
  streetAddress.name = "newStreet"
  streetAddress.value = user.addresses[0].streetAddress;
  form.appendChild(streetAddress);

  var city = document.createElement("input");
  city.type = "text";
  city.name = "newCity";
  city.value = user.addresses[0].city;
  form.appendChild(city);

  var state = document.createElement("input");
  state.type = "text";
  state.name = "newState";
  state.value = user.addresses[0].stateAbbrev;
  form.appendChild(state);

  var zip = document.createElement("input");
  zip.type = "text";
  zip.name = "newZip";
  zip.value = user.addresses[0].zipcode;
  form.appendChild(zip);

  var submit = document.createElement("button");
  var t = document.createTextNode("Update Address");
  submit.appendChild(t);
  form.appendChild(submit);

  submit.addEventListener("click", function(e) {
    e.preventDefault();
    var address = {
      streetAddress: document.editForm.newStreet.value,
      city: document.editForm.newCity.value,
      stateAbbrev: document.editForm.newState.value,
      zipcode: document.editForm.newZip.value
    };
  });
};
