/**
 * 2014年10月20日15:48:13
 * post时间也当前时间比较
**/
(function(){
	//假定post时间 
	var d1 = new Date("2013","5","17","14","59","18");// psot2
	var d2 = new Date("2014","6","17","14","59","18");// psot2
	var d3 = new Date("2014","10","17","14","59","18");// psot3
	var d4 = new Date("2013","9","17","14","59","18");// psot4
	//获取dom对象
	var post_time_1 = document.getElementById("post1");
	var post_time_2 = document.getElementById("post2");
	var post_time_3 = document.getElementById("post3");
	var post_time_4 = document.getElementById("post4");
	
	if(post_time_1 != null) { 
		compareTime(post_time_1,d1);
	}
	if(post_time_2 != null) {
		compareTime(post_time_2,d2);
	}
	if(post_time_3 != null) {
		compareTime(post_time_3,d3);
	}
	if(post_time_4 != null) {
		compareTime(post_time_4,d4);
	}
})();

//获取时间差
function compareTime(a,d) {
	
    // 获取当前时间
    var now = new Date();
    var showInfo = a;
    if(now.getFullYear() > d.getFullYear()) {
       showInfo.innerText = "posted at ：" + (now.getFullYear() - d.getFullYear()) + " year age."; 
    }else if(now.getFullYear() == d.getFullYear()){
          if((now.getMonth() + 1) > d.getMonth()){
          	showInfo.innerText = "posted at ：" + (now.getMonth() - d.getMonth() + 1) + " month age."; 
          }else if((now.getMonth() + 1) == d.getMonth()){
             if(now.getDate() > d.getDate()){
             	showInfo.innerText = "posted at ：" + (now.getDate()  - d.getDate()) + " day age."; 
             }else{
             	var postTime = getFullTime(d.getFullYear()) + "年" + (getFullTime(d.getMonth() + 1)) + "月" + getFullTime(d.getDate()) + "日 " + getFullTime(d.getHours()) + ":" + getFullTime(d.getMinutes()) + ":" + getFullTime(d.getSeconds());
             	showInfo.innerText = "posted at ：" + d;
             } 
          }
    }
}
// 小于10补0
function getFullTime(time) {
   if( typeof(time) == "undefined") {
      return;
   }else if(time < 10) {
      return "0" + time;  
   }else {
      return time;
   }
}