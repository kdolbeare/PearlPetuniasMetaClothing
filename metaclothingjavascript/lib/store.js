var store = {
  title: "Store",
  header: "The Coolest Store",
  description: "We are a clothing retailer marketing primarily to hipsters and the Pabst Blue Ribbon drinkers of the world. We love to follow trends and appreciate a good scarf almost as much as a full beard.",
  script : "<script src='helpers/store.js'></script>"
};

module.exports.getStore = function() {
  return store;
};
