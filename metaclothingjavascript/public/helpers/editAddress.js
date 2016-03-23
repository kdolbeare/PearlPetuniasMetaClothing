onload = function() {
  console.log("editAddress loaded");
  getSessionId();
};

function getSessionId() {
  getData('getSessionId', editAddresses)
};

function editAddresses(data) {
  console.log(data);
};
