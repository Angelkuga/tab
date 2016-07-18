$(function(){
	var targetKey,currKey;
	var len;
	var direction;
	var isAnimate=false;
	len= $("tab-nav li").size();
	$(".tab-nav li").click(function(){
		console.log("isAnimate:"+isAnimate);
			
			currKey = $(".tab-nav").find("li.active").index();
			targetKey= $(this).index();
			
		 	if(targetKey == currKey){
				return;
			}else if(targetKey < currKey){
				direction = "backforward";
			}else if(targetKey > currKey){
				direction = "forward";
			}
			
			if(!isAnimate){
				isAnimate = true;
			}else{
				return;
			}

			$(".tab-nav").find("li.active").removeClass("active");
			$(this).addClass("active");

			console.log("isAnimate:"+isAnimate+",currKey:"+currKey+",targetKey:"+targetKey);
			animate($(".tab-panel li").eq(targetKey),$(".tab-panel li").eq(currKey),direction);

			})


	function animate(targetObj,currObj,direction){
		var timer;
		var enter = "panel-"+direction+"-enter";
		var enterActive = "panel-"+direction+"-enter-active";
		var leave = "panel-"+direction+"-leave";
		var leaveActive = "panel-"+direction+"-leave-active";
		targetObj.addClass(enter);
		currObj.addClass(leave);
		timer=setTimeout(function(){
			targetObj.addClass(enterActive);
			currObj.addClass(leaveActive);
		},1);
		$(".tab-panel li").bind("webkitTransitionEnd",function(){
			$(".tab-panel li").unbind("webkitTransitionEnd");
			targetObj.removeClass(enter+" "+enterActive+" hidden").addClass("show");
			currObj.removeClass(leave+" "+leaveActive+" show").addClass("hidden");
			clearTimeout(timer);
			isAnimate = false;
		});

	}

});
