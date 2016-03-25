onload = function(){
	 getData('/setCookie', setCookie);
}
function setCookie(data) {
  console.log("This is in setCookie route, after the readystatechange, Master: " + data);

}