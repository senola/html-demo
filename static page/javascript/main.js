var bullets = document.getElementById('position').getElementsByTagName('li');
var slider = Swipe(document.getElementById('slider'), {
    auto: 2000,
    continuous: true,
    disableScroll:false,
    callback: function(pos) {
      var i = bullets.length;
      while (i--) {
        bullets[i].className = ' ';
      }
      bullets[pos].className = 'cur';
    }
 });
var bank_card = {
       tips_layout : document.getElementById("tips_layout"),
       card_block  : document.getElementById("card_block"),
       _h : this.card_block.clientHeight + this.card_block.offsetTop - this.tips_layout.childNodes[1].clientHeight / 2,
       _isPC : function () {                            // 判断是否是PC端
                     var ua = navigator.userAgent;
                     var agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
                     var flag = true;
                     for (var i = 0, j = agents.length; i < j ; i ++ ){
                            if (ua.indexOf(agents[i]) != -1) {
                                   flag = false; 
                                   break;
                            }
                     }
                     return flag;
               }

}
bank_card.tips_layout.childNodes[1].style.top = bank_card._h + "px";
bank_card.tips_layout.style.display = "none";
function guangfa(e) {
   bank_card.tips_layout.style.display = "block";    
   if(bank_card._isPC()) {
     window.location.href = "https://ebanks.cgbchina.com.cn/channelsLink/creditCardApply.do?passageCode=002545";
   } else {
     window.location.href = "http://cgbchina.cn/BKbSMsS";  
   }  
}
function guangda() {
   bank_card.tips_layout.style.display = "block"; 
   if(bank_card._isPC()) {
     window.location.href = "http://xyk.cebbank.com/home/ps/cardapplylist.htm?pro_code=FHTG040000PC10";
   } else {
     window.location.href = "https://xyk.cebbank.com/cebmms/apply/fz/card-apply-sim-req.htm?pro_code=FHTG040000SJ10";  
   }  
}
function bankcomm() {
   bank_card.tips_layout.style.display = "block"; 
   window.location.href = "http://stat.feidee.com/ad.do?m=click&code=applybcm002&version=1";    
}
