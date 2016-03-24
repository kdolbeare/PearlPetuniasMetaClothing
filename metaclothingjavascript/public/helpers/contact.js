onload=function(){
	var mailDiv = document.getElementById('mailDiv');
	var mailUsButton = document.getElementById('mailUsButton');
	var sendButton = document.createElement("input");
	var nameField = document.createElement("input");
	var subjectField = document.createElement("input");
	var bodyField = document.createElement("input");


	mailUsButton.addEventListener('click',function(){
		console.log('you clicked the mail us button!');
		mailDiv.innerHTML="";
	    nameField.setAttribute("id","nameField");
		nameField.setAttribute("type",'text');
		nameField.setAttribute("placeholder","enter name");

		subjectField.setAttribute("id","subjectField");
		subjectField.setAttribute("type",'text');
		subjectField.setAttribute("placeholder","enter subject");

		bodyField.setAttribute("id","bodyField");
		bodyField.setAttribute("type",'text');
		bodyField.setAttribute("placeholder","enter message");

		sendButton.setAttribute("id","sendButton");
		sendButton.setAttribute("type",'button');
		sendButton.setAttribute("value","send message");

		mailDiv.appendChild(nameField);
		mailDiv.appendChild(subjectField);
		mailDiv.appendChild(bodyField);
		mailDiv.appendChild(sendButton).addEventListener('click',function(e){
		console.log("you clicked the send button!");
		
		var mail = {
			name:document.getElementById("nameField").value,
			subject:document.getElementById("subjectField").value,
			message:document.getElementById("bodyField").value
		};

		verbData('POST','/sendEmail',undefined,mail);

		mailDiv.innerHTML="sent";
		
	});
	});

	

};





















