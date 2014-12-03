var randomData = []; //随机数据数组
var index = 0; //输入的字符串个数
var reset = document.getElementById("reset");
var begin = document.getElementById("begin");
var container = document.getElementById("container");
var input_words = document.getElementById("input_words");
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
			alert("亲，可以开始游戏了！");
			return;
		}

	  randomData.push(words);
	  var p = document.createElement("p");
	  p.className = "random-words words-" + index;
	  p.innerHTML = words;
	  container.appendChild(p);
	  index ++;
}