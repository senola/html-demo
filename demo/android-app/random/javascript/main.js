var randomData = []; //随机数据数组
var index = 0; //输入的字符串个数
var repeatCompare = {};
var reset = document.getElementById("reset");
var begin = document.getElementById("begin");
var words_warp = document.getElementById("words_warp");
var input_words = document.getElementById("input_words");
var stop = document.getElementById("stop");
function init() { // 初始化
	var _h = window.innerHeight;
	var _w = window.innerWidth;
  reset.style.top = (_h - 20) + "px";
  begin.style.top = (_h - 20) + "px";
}
init();

function add() {
		var words = input_words.value;
		if(words.trim() == "") {
				input_words.value = "";
				alert("亲，请输入内容！");
				return;
		}
		if(index >= 10) {
			input_words.value = "";
			alert("亲，可以开始游戏了！");
			return;
		}
    for(var i = 0,len = randomData.length; i < len; i ++) {
    	if(words.trim() == randomData[i]) {
    		input_words.value = "";
    		alert("请，这个你已经输入过了~");
    		return; 
    	}
    }
	  randomData.push(words.trim());
	  var p = document.createElement("p");
	  p.className = "random-words words-" + index;
	  p.id = "random_words_" + index;
	  p.innerHTML = words;
	  words_warp.appendChild(p);
	  index ++;
	  input_words.value = "";
}
function gameBegin(){
	 if(index < 2){
	  	alert("亲，输入内容太少了吧~~~");
	  	return;
	  }
	 reset.style.display = "none";
   begin.style.display = "none";
   setTimeout(function(){
    stop.style.display = "inline-block";
    stop.style.left = (window.innerWidth / 2 - stop.offsetWidth / 2) + "px";
   },1000);
   for(var i = 0; i < index; i ++) {
   	  (function(j){
         setTimeout(function(){
	        var obj = document.getElementById("random_words_" + j);
	    	  obj.className = "random-words words-" + j;
	   	  },1000);
   	  })(i)
  }
  words_warp.className = "rotate-animation";
}

function stopGame() {
	words_warp.className = "";
	reset.style.display = "inline-block";
  begin.style.display = "inline-block";
  stop.style.display = "none";
  var randomNum = getNoRepeatRandomNum(0, index - 1);

  for(var i = 0; i < index; i ++) {
    if(i != randomNum) {
	    	var obj = document.getElementById("random_words_" + i);
	    	obj.className = obj.className + " hidden-change";
    }
  }
  var obj = document.getElementById("random_words_" + randomNum);
  obj.className = "random-words seleced";
  obj.style.left = (window.innerWidth / 2 - obj.offsetWidth / 2) + "px";
  obj.style.top = (window.innerHeight / 2 - obj.offsetHeight * 4) + "px";
}

function resetGame() {
  randomData = []; //重置
  index = 0; //重置
  words_warp.innerHTML = "";
}

// 如果该项出现了多次则重新选择
var flag = 0;
function getNoRepeatRandomNum(start, end) {
	  if(flag == 1000) {
	  	repeatCompare = {}; // 重置
	  }
	  var randomNum = getRandomNum(start,end);
	  if( !repeatCompare[randomNum] ){
	     repeatCompare[randomNum] = {};
	     repeatCompare[randomNum].countNum = 1;
	     flag = 0;
	     return randomNum;
	  }
	  if(repeatCompare[randomNum] || repeatCompare[randomNum].countNum == 1) {
	  	repeatCompare[randomNum].countNum = 2;
	  	flag = 0;
	  	return randomNum;
	  }
	  if(repeatCompare[randomNum] || repeatCompare[randomNum].countNum >= 2){
	  	flag ++ ;
	  	console.log("随机次数---------------------------->：" + flag);
	  	return getNoRepeatRandomNum(start,end);
	  }
}
// 随机数
function getRandomNum(under, over){
	switch ( arguments.length ){
		case 1: 
		    return parseInt(Math.random()*under+1);
		case 2: 
		    return parseInt(Math.random()*(over-under+1) + under);
		default: return 1;
	}
}
