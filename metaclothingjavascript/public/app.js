window.onload = function(){
	getData('http://localhost:8080/MetaClothingJava/rest/user', listUsers);
};


function getData(url, callback){
	var xhr = new XMLHttpRequest();

	xhr.open('GET', url);

	xhr.onreadystatechange = function(){
		if(xhr.status < 400 && xhr.readyState == 4){
			callback(JSON.parse(xhr.responseText));
		}
	};

	xhr.send(null);
}

function listUsers(data){
	console.log(data);
}