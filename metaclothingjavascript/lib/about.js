var about = {
  title: "About",
  header: "About Us",
  about: "We are a clothing retailer marketing primarily to hipsters and the Pabst Blue Ribbon drinkers of the world. We love to follow trends and appreciate a good scarf almost as much as a full beard.",
  location: {
    street: "123 AnyWhere St",
    city: "Denver",
    state: "CO",
    zip: "80220"
  },
  employees:[{name:'Cole Frock',
              bio:'CEO of MetaClothing is Cole Frock'},
              
              {name:'Kris Kane',
              bio:'CTO of MetaClothing'}]
};

exports.getAbout = function() {
  return about;
};
