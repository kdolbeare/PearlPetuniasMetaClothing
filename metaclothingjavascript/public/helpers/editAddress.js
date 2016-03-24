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

  var form = document.getElementById("editForm");
  var streetAddress = document.createElement("input");
  streetAddress.type = "text";
  streetAddress.name = "newStreet0"
  streetAddress.value = user.addresses[0].streetAddress;
  streetAddress.placeholder = "Street Address";
  form.appendChild(streetAddress);

  var city = document.createElement("input");
  city.type = "text";
  city.name = "newCity0";
  city.value = user.addresses[0].city;
  city.placeholder = "City";
  form.appendChild(city);

  var state = document.createElement("input");
  state.type = "text";
  state.name = "newState0";
  state.value = user.addresses[0].stateAbbrev;
  state.placeholder = "State Abbrev";
  form.appendChild(state);

  var zip = document.createElement("input");
  zip.type = "text";
  zip.name = "newZip0";
  zip.value = user.addresses[0].zipcode;
  zip.placeholder = "Zipcode";
  form.appendChild(zip);

  console.log(user.addresses.length);

  var submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  var t = document.createTextNode("Update Address");
  submit.appendChild(t);
  form.appendChild(submit);
  // var shipping = document.getElementById("shipping");
  // shipping.innerHTML = "Shipping Address: ";
  // shipping.insertBefore(form, document.getElementById("editForm"));

  if(user.addresses.length == 1){
    var check = document.getElementById("check");
    var isBilling = document.createElement("input");
    isBilling.setAttribute("type", "checkbox");
    isBilling.checked = true;
    check.innerHTML = "Same as Billing?";
    check.appendChild(isBilling);

    isBilling.addEventListener('click', function(e){
        billingDom();
        isBilling = false;
    });
  }else {
    console.log(user.addresses[1]);
    var editDiv = document.getElementById("edit");
    var form1 = document.getElementById("editForm");
    // var form1 = document.editForm;
    var streetAddress = document.createElement("input");
    streetAddress.type = "text";
    streetAddress.name = "newStreet1"
    streetAddress.value = user.addresses[1].streetAddress;
    editDiv.appendChild(streetAddress);

    var city = document.createElement("input");
    city.type = "text";
    city.name = "newCity1";
    city.value = user.addresses[1].city;
    editDiv.appendChild(city);

    var state = document.createElement("input");
    state.type = "text";
    state.name = "newState1";
    state.value = user.addresses[1].stateAbbrev;
    editDiv.appendChild(state);

    var zip = document.createElement("input");
    zip.type = "text";
    zip.name = "newZip1";
    zip.value = user.addresses[1].zipcode;
    editDiv.appendChild(zip);
    form.insertBefore(editDiv, document.getElementById("submit"));
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
      address01 = {
        id: user.addresses[0].id,
        streetAddress: document.editForm.newStreet0.value,
        city: document.editForm.newCity0.value,
        stateAbbrev: document.editForm.newState0.value,
        zipcode: document.editForm.newZip0.value,
        isBilling: false,
        isShipping: true
      };
    var address1 = {
        id: user.addresses[1].id,
        streetAddress: document.editForm.newStreet1.value,
        city: document.editForm.newCity1.value,
        stateAbbrev: document.editForm.newState1.value,
        zipcode: document.editForm.newZip1.value,
        isBilling: true,
        isShipping: false
    }; user.addresses = [address01, address1];
      console.log(user.addresses[0]);
      console.log(user.addresses[1]);
  }else if(!isBilling) {
      address02 = {
      id: user.addresses[0].id,
      streetAddress: document.editForm.newStreet0.value,
      city: document.editForm.newCity0.value,
      stateAbbrev: document.editForm.newState0.value,
      zipcode: document.editForm.newZip0.value,
      isBilling: false,
      isShipping: true
    };
    var addressNew = {
      streetAddress: document.editForm.billingStreet.value,
      city: document.editForm.billingCity.value,
      stateAbbrev: document.editForm.billingState.value,
      zipcode: document.editForm.billingZipcode.value,
      isBilling: true,
      isShipping: false
    }; user.addresses = [address02, addressNew];
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
  var editDiv = document.getElementById("edit");
  var form = document.getElementById("editForm");
  // var form = document.editForm;
  var streetAddress = document.createElement("input");
  streetAddress.type = "text";
  streetAddress.name = "billingStreet";
  streetAddress.placeholder = "Billing Address";
  editDiv.appendChild(streetAddress);

  var city = document.createElement("input");
  city.type = "text";
  city.name = "billingCity";
  city.placeholder = "Billing City";
  editDiv.appendChild(city);

  var state = document.createElement("input");
  state.type = "text";
  state.name = "billingState";
  state.placeholder = "Billing State";
  editDiv.appendChild(state);

  var zip = document.createElement("input");
  zip.type = "text";
  zip.name = "billingZipcode";
  zip.placeholder = "Billing Zipcode";
  editDiv.appendChild(zip);
  form.insertBefore(editDiv, document.getElementById("submit"));
}

function displayUser(data) {
  console.log(data);
  var message = document.getElementById("message");
  message.innerHTML = "Update Complete";
}
