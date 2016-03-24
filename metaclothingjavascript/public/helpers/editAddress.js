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
  streetAddress.name = "newStreet0"
  streetAddress.value = user.addresses[0].streetAddress;
  form.appendChild(streetAddress);

  var city = document.createElement("input");
  city.type = "text";
  city.name = "newCity0";
  city.value = user.addresses[0].city;
  form.appendChild(city);

  var state = document.createElement("input");
  state.type = "text";
  state.name = "newState0";
  state.value = user.addresses[0].stateAbbrev;
  form.appendChild(state);

  var zip = document.createElement("input");
  zip.type = "text";
  zip.name = "newZip0";
  zip.value = user.addresses[0].zipcode;
  form.appendChild(zip);

  console.log(user.addresses.length);

  var submit = document.createElement("button");
  var t = document.createTextNode("Update Address");
  submit.appendChild(t);
  form.appendChild(submit);

  if(user.addresses.length == 1){
    var isBilling = document.createElement("input");
    isBilling.setAttribute("type", "checkbox");
    isBilling.checked = true;
    form.appendChild(isBilling);

    isBilling.addEventListener('click', function(e){
        billingDom();
        isBilling = false;
    });
  }else {
    console.log(user.addresses[1]);
    var form1 = document.editForm;
    var streetAddress = document.createElement("input");
    streetAddress.type = "text";
    streetAddress.name = "newStreet1"
    streetAddress.value = user.addresses[1].streetAddress;
    form.appendChild(streetAddress);

    var city = document.createElement("input");
    city.type = "text";
    city.name = "newCity1";
    city.value = user.addresses[1].city;
    form.appendChild(city);

    var state = document.createElement("input");
    state.type = "text";
    state.name = "newState1";
    state.value = user.addresses[1].stateAbbrev;
    form.appendChild(state);

    var zip = document.createElement("input");
    zip.type = "text";
    zip.name = "newZip1";
    zip.value = user.addresses[1].zipcode;
    form.appendChild(zip);
  }

  submit.addEventListener("click", function(e) {
    e.preventDefault();
    var address0 = {
      id: user.addresses[0].id,
      streetAddress: document.editForm.newStreet0.value,
      city: document.editForm.newCity0.value,
      stateAbbrev: document.editForm.newState0.value,
      zipcode: document.editForm.newZip0.value,
      isBilling: true,
      isShipping: true
    };
    if(user.addresses.length == 2) {
      address0 = {
        id: user.addresses[0].id,
        streetAddress: document.editForm.newStreet0.value,
        city: document.editForm.newCity0.value,
        stateAbbrev: document.editForm.newState0.value,
        zipcode: document.editForm.newZip0.value,
        isBilling: true,
        isShipping: false
      };
    var address1 = {
      id: user.addresses[1].id,
        streetAddress: document.editForm.newStreet1.value,
        city: document.editForm.newCity1.value,
        stateAbbrev: document.editForm.newState1.value,
        zipcode: document.editForm.newZip1.value,
        isBilling: false,
        isShipping: true
    }; user.addresses = [address0, address1];
      console.log(user.addresses[0]);
      console.log(user.addresses[1]);
  }else if(!isBilling) {
    var addressNew = {
      streetAddress: document.editForm.billingStreet.value,
      city: document.editForm.billingCity.value,
      stateAbbrev: document.editForm.billingState.value,
      zipcode: document.editForm.billingZipcode.value,
      isBilling: true,
      isShipping: false
    }; user.addresses = [address0, addressNew];
    console.log(user.addresses[0]);
    console.log(user.addresses[1]);
  }else {
    user.addresses = [address0];
    console.log(user.addresses[0]);
  }
    verbData('POST','http://localhost:8080/MetaClothingJava/rest/address', displayUser, user);
  });
};

function billingDom() {
  console.log("in billingDom");
  var form = document.editForm;
  var streetAddress = document.createElement("input");
  streetAddress.type = "text";
  streetAddress.name = "billingStreet";
  streetAddress.placeholder = "Billing Address";
  form.appendChild(streetAddress);

  var city = document.createElement("input");
  city.type = "text";
  city.name = "billingCity";
  city.placeholder = "Billing City";
  form.appendChild(city);

  var state = document.createElement("input");
  state.type = "text";
  state.name = "billingState";
  state.placeholder = "Billing State";
  form.appendChild(state);

  var zip = document.createElement("input");
  zip.type = "text";
  zip.name = "billingZipcode";
  zip.placeholder = "Billing Zipcode";
  form.appendChild(zip);
}

function displayUser(data) {
  console.log(data);
}
