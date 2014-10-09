jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
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
	var num = getRandomNum(1,30);
    var bg_url = 'https://raw.githubusercontent.com/senola/pictures/master/background/background' + num + '.jpg'
    $("body").css({
   	  'background': 'url(' + bg_url + ')',
   	  '-webkit-background-size': 'cover',
	  '-moz-background-size': 'cover',
	  '-o-background-size': 'cover',
	  'background-size': 'cover', //若图片偏小 则让图片自动铺满整个屏幕
	  'background-attachment': 'fixed', //滚动时固定图片位置
      'overflow-x': 'hidden'
    });
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
    setInterval(function(){
       var d = new Date();
    	var nowTime = getFullTime(d.getFullYear()) + "年" + (getFullTime(d.getMonth() + 1)) + "月" + getFullTime(d.getDate()) + "日 " + getFullTime(d.getHours()) + ":" + getFullTime(d.getMinutes()) + ":" + getFullTime(d.getSeconds());
    	$("#nowTimedisplay").html(nowTime);
    },1000);
});