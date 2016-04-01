onload = function(){
	console.log("in index onload");
	 getData('setCookie', setCookie);
}
function setCookie(data) {
  console.log("This is in setCookie route, after the readystatechange, Master: " + data);

}
