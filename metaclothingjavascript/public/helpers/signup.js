onload = function() {
    console.log("signup loaded");

    document.getElementById("submit").addEventListener('click', function(e) {
        e.preventDefault();
        var isEmployee = document.getElementById("isEmployee").checked;
        var isBilling = document.getElementById("isBilling").checked;
        // var isShipping = document.getElementById("isShipping").checked;

        console.log(isBilling);

        var address = {
          streetAddress: document.signupForm.streetAddress.value,
          city: document.signupForm.city.value,
          stateAbbrev: document.signupForm.stateAbbrev.value,
          zipcode: document.signupForm.zipcode.value,
          isBilling: isBilling,
          isShipping: true
        };
        var user = {
          name: document.signupForm.name.value,
          email: document.signupForm.email.value,
          password: document.signupForm.password.value,
          isEmployee: isEmployee,
          addresses: [address]

        };
        console.log(user);
        verbData('POST', 'http://localhost:8080/MetaClothingJava/rest/createUser', createSession, user)

      });
    }
