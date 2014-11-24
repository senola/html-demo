var canvas = document.getElementById("canvas");
var page_x = document.getElementById("page_x");
var page_y = document.getElementById("page_y");
var startX, startY,blocks = {};
canvas.addEventListener("touchstart",touchStart,false);
canvas.addEventListener("touchmove",touchMove,false);
canvas.addEventListener("touchend",touchEnd,false);
function touchStart(e) {
  e.preventDefault();
  var touches = e.changedTouches, len = touches.length;
  for(var i = 0; i < len; i++) {
  	if(!len) return;
  	var touch = touches[i];
    startX = touch.pageX;
    startY = touch.pageY;
    page_x.innerHTML = startX;
    page_y.innerHTML = startY;

    if(!blocks.block_y){
    	blocks.block_y = {};
      blocks.block_y = document.createElement("div");
    }

    if(!blocks.block_x){
    	blocks.block_x = {};
      blocks.block_x = document.createElement("div");
    }

    if(!blocks.block){
    	blocks.block = {};
      blocks.block = document.createElement("div");
    }

    blocks.block_y.className = "block-y";
    blocks.block_y.style.left = startX + "px";
    blocks.block_y.style.top = "0px";
    canvas.appendChild(blocks.block_y);

    var block_x = document.createElement("div");
    blocks.block_x.className = "block-x";
    blocks.block_x.style.top = startY + "px";
    blocks.block_x.style.left = "0px";
    blocks.block_x.style.width = window.innerWidth + "px";
    canvas.appendChild(blocks.block_x);

    var block = document.createElement("div");
    blocks.block.className = "block";
    blocks.block.style.left = (startX - 25) + "px";
    blocks.block.style.top =  (startY - 25) + "px";
    canvas.appendChild(blocks.block);
  }
}

function touchMove(e) {
	e.preventDefault();
  var touches = e.changedTouches, len = touches.length;
  for(var i = 0; i < len; i++) {
  	if(!len) return;
  	var touch = touches[i];
    startX = touch.pageX;
    startY = touch.pageY;
    page_x.innerHTML = startX;
    page_y.innerHTML = startY;
    blocks.block_x.style.top = startY + "px";
    blocks.block_y.style.left = startX + "px";
    blocks.block.style.left = (startX - 25) + "px";
    blocks.block.style.top = (startY - 25) + "px";
  }
}

function touchEnd(e) {
   removeElement(canvas);
}
function removeElement(_element){
     var _parentElement = _element.parentNode;
     if(!_parentElement){
            _parentElement.removeChild(_element);  
     }
}