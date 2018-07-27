//獲取活動訊息模板
$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "json/info.json",
		success: function(data) {
			var tp = $("#new-add-info").html();
			var template = Handlebars.compile(tp);
			var html = template(data);
			$("#info-new").html(html);
		}
	});
});
//獲取電影訊息模板
$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "json/movie.json",
		success: function(data) {
			var tp = $("#new-add-movies").html();
			var template = Handlebars.compile(tp);
			var html = template(data);
			$("#new-movie").html(html);
		}
	});
});

$(document).ready(function() {
	if($("meta[name=toTop]").attr("content") == "true") {
		$("#toTop").click(function(event) {
			$("html,body").animate({
				scrollTop: "0px"
			}, 500)
		});
	}
	$(".button-1").click(function(event) {
		$("html,body").animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});
	$(".button-2").click(function(event) {
		$("html,body").animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});
	$(function() {
		$(".sanheng").click(function() {
			$(".mob-tit").toggleClass("in");
		})
	});
})

$("#new-movie").click(function(){
	$("#show1").colorbox({
		iframe: true,
		innerWidth: "64%",
		innerHeight: "39%"
	});
	$("#show2").colorbox({
		iframe: true,
		innerWidth: "64%",
		innerHeight: "39%"
	});
	$("#show3").colorbox({
		iframe: true,
		innerWidth: "64%",
		innerHeight: "39%"
	});
	$("#show4").colorbox({
		iframe: true,
		innerWidth: "64%",
		innerHeight: "39%"
	});
})
