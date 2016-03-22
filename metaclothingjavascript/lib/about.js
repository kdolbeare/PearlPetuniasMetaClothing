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
              bio:'A one liner goes here.',
              fullBio:'A multiple paragraph blurb can go here. It can outline the basic full bio found on websites, about employess and they\'re credentials',
              position:'CEO',
              imgPath:'img/cole.jpeg'},
              
              {name:'Kris Kane',
              bio:'',
              fullBio:'',
              position:'CTO'},

              {name:'Alexandra Bennett',
              bio:'', 
              fullBio:'',
              position:'',
              imgPath:'img/Alexandra_Bennett.jpg'},

              {name:'David Silver',
              bio:"",
              fullBio:'',
              position:'',
              imgPath:'img/David_Silver.jpg'},

              {name:'Erika Miller',
              bio:'',
              fullBio:'',
              position:'',
              imgPath:'img/Erika_Miller.jpg'},

              {name:'Peter Chestnut',
              bio:'',
              fullBio:'',
              position:'',
              imgPath:'img/Peter_Chestnut.jpg'},

              {name:'Michael James',
              bio:'',
              fullBio:'',
              position:'',
              imgPath:'img/Michael_James.jpg'},

              {name:'Ignatius J Reilly',
              bio:'',
              fullBio:'',
              position:'',
              imgPath:''}]
};



exports.getAbout = function() {
  return about;
};
