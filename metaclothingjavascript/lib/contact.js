var contact = {
	title: "Contact",
  	header: "Contact Us",
  	name: "MetaClothing INC",
  	phone: '(555) 555-5555',
  	pointOfContact: 'some secretary',
  	script : "<script src='helpers/contact.js'></script>",
  	location: {
    	street: "123 AnyWhere St",
    	city: "Denver",
    	state: "CO",
    	zip: "80220"},

    mapEmbedLink:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.8176908184632!2d-104.90491404893842!3d39.60878911220066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c86f2b964c5f3%3A0xa605ea4d9701770c!2sSkill+Distillery!5e0!3m2!1sen!2sus!4v1458834923396" width="300" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>'
  
};

exports.getContact = function() {
  return contact;
};


