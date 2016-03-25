var about = {
  title: "About",
  header: "About Us",
  about: "We are a clothing retailer marketing primarily to hipsters and the Pabst Blue Ribbon drinkers of the world. We love to follow trends and appreciate a good scarf almost as much as a full beard. Lorem ipsum dolor sit amet, nam te nostrud impedit, nam at harum molestiae, vix ei nobis percipit philosophia. Sit assum facilisi ex. Sit nulla putant forensibus ex, vix nulla mnesarchum dissentiunt ei, no eum lucilius praesent partiendo. Delenit dolorum legendos id est. Est ne ridens propriae, est te discere veritus tacimates.",
  location: {
    street: "123 AnyWhere St",
    city: "Denver",
    state: "CO",
    zip: "80220"
  },
  
  employees:[
            {name:'Peter Chestnut',
              bio:"As CEO Peter is responsible for running all facets of the business.His experience as CEO and CFO of SwiftOlo and WhiteCloud respectively, lend him a proven executive track record.  Peter also served as President of Globex Inc.'s e-commerce division and was recognized by Internet World as one of the Top 25 'Click and Mortar' executives in the country in June of 2000.",
              fullBio:"As CEO Peter is responsible for running all facets of the business.His experience as CEO and CFO of SwiftOlo and WhiteCloud respectively, lend him a proven executive track record.  Peter also served as President of Globex Inc.'s e-commerce division and was recognized by Internet World as one of the Top 25 'Click and Mortar' executives in the country in June of 2000.",
              position:'CEO',
              imgPath:'img/Peter_Chestnut.jpg'},

            {name:'David Silver',
              bio: "" ,
              fullBio:"A native of New York, David graduated from Yale University with an honors degree in  economic studies. David is a lifelong entrepreneur, adventurer, and tech aficionado. In 2014 he accepted the award for Most Innovative Startup, by the Inc 500. David is focused on bringing quality products as well as a streamlined experience to his customers. He is an avid traveler and aviation enthusiast, and has lived in Chile   as well as Peru. "   ,
              position:'Founder',
              imgPath:'img/David_Silver.jpg'},

            {name:'Erika Miller',
              bio:'', 
              fullBio:"Lorem ipsum dolor sit amet, nam te nostrud impedit, nam at harum molestiae, vix ei nobis percipit philosophia. Sit assum facilisi ex. Sit nulla putant forensibus ex, vix nulla mnesarchum dissentiunt ei, no eum lucilius praesent partiendo. Delenit dolorum legendos id est. Est ne ridens propriae, est te discere veritus tacimates." ,
              position:'CFO',
              imgPath:'img/Erika_Miller.jpg'},

             {name:'Alexandra Bennett',
              bio:'',
              fullBio:"With over 20 years experience in international product sales, and applying a strong expertise in data-driven, long-term strategic planning, Alexandra excels in her role as Marketing director. Previous to this, Alexandra held various positions as Director of International Sales & Marketing, Manager of Business Development, and Trade Sales Manager for St. Anky Beer.",
              position:'Marketing Director',
              imgPath:'img/Alexandra_Bennett.jpg'},

             {name:'Michael James',
              bio:'',
              fullBio: "After attending the University of Texas, Michael excelled in a sales role for Initech. He then ascended into a managerial role and increasing sales in his division drastically. In 2013 he was given the role of Director of Sales and was nominated for Forbes ‘Top 25 Under 25’.",
              position:'Director of Sales',
              imgPath:'img/Michael_James.jpg'
              }, 
              
            {name:'Kris Kane',
              bio:'',
              fullBio:'Lorem ipsum dolor sit amet, nam te nostrud impedit, nam at harum molestiae, vix ei nobis percipit philosophia. Sit assum facilisi ex. Sit nulla putant forensibus ex, vix nulla mnesarchum dissentiunt ei, no eum lucilius praesent partiendo. Delenit dolorum legendos id est. Est ne ridens propriae, est te discere veritus tacimates.',
              position:'Brand Manager'},
              {name: "Andrew Conlin",
              bio:'',
              fullBio:'Lorem ipsum dolor sit amet, nam te nostrud impedit, nam at harum molestiae, vix ei nobis percipit philosophia. Sit assum facilisi ex. Sit nulla putant forensibus ex, vix nulla mnesarchum dissentiunt ei, no eum lucilius praesent partiendo. Delenit dolorum legendos id est. Est ne ridens propriae, est te discere veritus tacimates.',
              position: 'Public Relations Director'},
              {name: "Aaron Aguil",
              bio:'',
              fullBio:'Lorem ipsum dolor sit amet, nam te nostrud impedit, nam at harum molestiae, vix ei nobis percipit philosophia. Sit assum facilisi ex. Sit nulla putant forensibus ex, vix nulla mnesarchum dissentiunt ei, no eum lucilius praesent partiendo. Delenit dolorum legendos id est. Est ne ridens propriae, est te discere veritus tacimates.',
              position: 'Head Custodian'},
              {name:'Cole Frock',
              bio:'A one liner goes here.',
              fullBio:'Lorem ipsum dolor sit amet, nam te nostrud impedit, nam at harum molestiae, vix ei nobis percipit philosophia. Sit assum facilisi ex. Sit nulla putant forensibus ex, vix nulla mnesarchum dissentiunt ei, no eum lucilius praesent partiendo. Delenit dolorum legendos id est. Est ne ridens propriae, est te discere veritus tacimates.',
              position:'Assistant to the Custodian',
              imgPath:'img/cole.jpeg'}
              ]
};



exports.getAbout = function() {
  return about;
};
