// window.onload = function(){
	// getData('http://localhost:8080/MetaClothingJava/rest/userTest', listUsers);
// };


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

function verbData(method, url, callback, obj){
	var xhr = new XMLHttpRequest();

	xhr.open(method, url);

	if(obj){
		xhr.setRequestHeader('Content-type', 'application/json');
	}
	xhr.onreadystatechange = function(){
		if(xhr.status < 400 && xhr.readyState == 4){
			if(callback){
				callback(JSON.parse(xhr.responseText));
			}
		}
	};

	if(obj){
		console.log(JSON.stringify(obj) + "in verbData");
		xhr.send(JSON.stringify(obj));
	}else{
		xhr.send(null);
	}

}

function listUsers(data){
	console.log(data + "in listUsers");

}
