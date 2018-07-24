$(document).ready(function(){
	if($("meta[name=toTop]").attr("content")=="true"){
		$("#toTop").click(function(event) {
			$("html,body").animate({scrollTop:"0px"},500)
		});
	}



	$(".button-1").click(function(event) {
			$("html,body").animate({scrollTop:$( $.attr(this, 'href') ).offset().top},500);
			return false;
	});
	$(".button-2").click(function(event) {
			$("html,body").animate({scrollTop:$( $.attr(this, 'href') ).offset().top},500);
			return false;
	});
})