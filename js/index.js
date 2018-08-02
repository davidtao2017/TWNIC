//獲取活動訊息模板
var infopage = 1;
var infopagesize = 4;
$("#more-info").click(function() {
	$.ajax({
		type: "get",
		url: "json/info.json",
		async: false,
		success: function(data) {
			var list = data.info;
			if(infopage <= list.length / infopagesize) {
				var res = [];
				var start = (infopage - 1) * infopagesize;
				var end = infopage * infopagesize;
				for(var i = start; i < end; i++) {
					res.push(list[i]);
				}
				var tp = $("#new-add-info").html();
				var template = Handlebars.compile(tp);
				var html = template(res);
				$("#info-new").append(html);
				infopage += 1;
			} else {
				$("#more-info").text("已經沒有了哦!")
			}
		}
	});
});
//獲取電影訊息模板
var moviepage = 1;
var moviepagesize = 4;
$("#more-movie").click(function() {
	$.ajax({
		type: "get",
		url: "json/movie.json",
		async: false,
		success: function(data) {
			var list = data.movies;
			if(moviepage <= list.length / moviepagesize) {
				var res = [];
				var start = (moviepage - 1) * moviepagesize;
				var end = moviepage * moviepagesize;
				for(var i = start; i < end; i++) {
					res.push(list[i]);
				}
				var tp = $("#new-add-movies").html();
				var template = Handlebars.compile(tp);
				var html = template(res);
				$("#new-movie").append(html);
				moviepage += 1;
			}else {
				$("#more-movie").text("已經沒有了哦!")
			}
		}
	});
})
$(document).ready(function() {
	$('#more-info').click();
	$('#more-movie').click();
	//主選單活動 start
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
	//end
	//手機端主選單
	$(".sanheng").click(function() {
		$(".mob-tit").toggleClass("in");
	});

	//視頻ligbox
	$("#new-movie").on("click",".show-mv",function() {
		$(".show-mv").removeAttr('id');
		$(this).attr('id', 'mvshow');
		$("#mvshow").colorbox({
			iframe: true,
			innerWidth: "64%",
			innerHeight: "39%"
		});
	})
	
	$("#filmPop").click(function(){
		$(this).remove();
	})
})