onload = function() {
    console.log("signup loaded");

    document.getElementById("submit").addEventListener('click', function(e) {
        e.preventDefault();
        var isEmployee = false;
        if (isEmployee.checked){
          isEmployee = true;
        }
        var isBilling = true;
        if (!isBilling.checked){
          isBilling = false;
        }
        var address = {
          streetAddress: document.signupForm.streetAddress.value,
          city: document.signupForm.city.value,
          stateAbbrev: document.signupForm.stateAbbrev.value,
          zipcode: document.signupForm.zipcode.value,
          isBilling: isBilling
        };
        var user = {
          name: document.signupForm.name.value,
          email: document.signupForm.email.value,
          password: document.signupForm.password.value,
          isEmployee: isEmployee,
          address: address
        };
              console.log(user);
      });

    }
