onload=function(){
	var mailDiv = document.getElementById('mailDiv');
	var mailUsButton = document.getElementById('mailUsButton');
	var sendButton = document.createElement("input");
	var nameField = document.createElement("input");
	var subjectField = document.createElement("input");
	var bodyField = document.createElement("textarea");


	mailUsButton.addEventListener('click',function(){
		console.log('you clicked the mail us button!');
		mailDiv.innerHTML="";
		var div1 = document.createElement('div');
		div1.setAttribute("class", "form-group");
	    nameField.setAttribute("id","nameField");
	    nameField.setAttribute("class", "form-control");
		nameField.setAttribute("type",'text');
		nameField.setAttribute("placeholder","Name");
		div1.appendChild(nameField);

		var div2 = document.createElement('div');
		div2.setAttribute("class", "form-group");
		subjectField.setAttribute("id","subjectField");
		subjectField.setAttribute("class", "form-control");
		subjectField.setAttribute("type",'text');
		subjectField.setAttribute("placeholder","Subject");
		div2.appendChild(subjectField);

		var div3 = document.createElement('div');
		div3.setAttribute("class", "form-group");
		bodyField.setAttribute("id","bodyField");
		bodyField.setAttribute('class', 'form-control');
		bodyField.setAttribute("rows",'4');
		bodyField.setAttribute("placeholder","Message");
		div3.appendChild(bodyField);

		var div4 = document.createElement('div');
		div1.setAttribute("class", "form-group");
		sendButton.setAttribute("id","sendButton");
		sendButton.setAttribute("type",'button');
		sendButton.setAttribute("class", "btn btn-info");
		sendButton.setAttribute("value","Send Message");
		div4.appendChild(sendButton);


		mailDiv.appendChild(div1);
		mailDiv.appendChild(div2);
		mailDiv.appendChild(div3);
		mailDiv.appendChild(div4);
		sendButton.addEventListener('click',function(e){
		console.log("you clicked the send button!");
		
		var mail = {
			name:document.getElementById("nameField").value,
			subject:document.getElementById("subjectField").value,
			message:document.getElementById("bodyField").value
		};

		verbData('POST','/sendEmail',undefined,mail);

		mailDiv.innerHTML="Thanks for your input. We will get back to you ASAP";
		
	});
	});

	

};





















