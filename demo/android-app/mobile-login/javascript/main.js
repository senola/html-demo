/**
 * date: 2014-11-28 
 * author: senola 
 * blog: http://senola.uni.me
 * purpose: to login  the "gift project"... 
 */
var username = document.getElementById("username");
var password = document.getElementById("password");
var info = document.getElementById("show-info");
var name = "admin"
var pass = "9595f446f7db1a9b2d19e8d45f2604f3";
function logon(){
  	if(username.value == name && hex_md5(password.value) == pass){
       return true;
  	}else {
  		 info.style.visibility = "visible";
       return false;
  	}
}