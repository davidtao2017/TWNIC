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


	$("#more-info").click(function(){
		$("#new-add-info").after("<div class=row><div class=col-sm-6><img class=img-top-bor width=100% src=img/active-img1.jpg><p class=ac-main-text>在網路世界裡，每部裝置彼此連結與傳遞訊息，都必須仰賴各自獨特的網際協定（IP）位址，才不會在資訊流通時彼此混淆，但隨著全球網際網路快速發展，各式裝置數量如雨後春筍般增生，再加上近年來物聯網、車聯網等技術推陳出新，造成IPv4位址面臨用罄危機。</p><div class=text-center><button class=ac-btn hvr-back-pulse>了解更多</button></div></div><div class=col-sm-6><img class=img-top-bor width=100% src=img/active-img2.jpg><p class=ac-main-text>TWNIC於107年5月28日(一)下午2:00正式上線推出全新「at.tw 翻轉域名實驗計畫服務」，新型態at.tw域名+網頁轉址服務的結合，突破以往域名註冊思維，以簡單快速的域名註冊流程，搭配網頁轉址服務的簡易設定，提供網路使用者新型態網路架站服務體驗。</p><div class=text-center><button class=ac-btn hvr-back-pulse>了解更多</button></div></div></div><div class=row id=new-add-info><div class=col-sm-6><img class=img-top-bor width=100% src=img/active-img1.jpg><p class=ac-main-text>在網路世界裡，每部裝置彼此連結與傳遞訊息，都必須仰賴各自獨特的網際協定（IP）位址，才不會在資訊流通時彼此混淆，但隨著全球網際網路快速發展，各式裝置數量如雨後春筍般增生，再加上近年來物聯網、車聯網等技術推陳出新，造成IPv4位址面臨用罄危機。</p><div class=text-center><button class=ac-btn hvr-back-pulse>了解更多</button></div></div><div class=col-sm-6><img class=img-top-bor width=100% src=img/active-img2.jpg><p class=ac-main-text>TWNIC於107年5月28日(一)下午2:00正式上線推出全新「at.tw 翻轉域名實驗計畫服務」，新型態at.tw域名+網頁轉址服務的結合，突破以往域名註冊思維，以簡單快速的域名註冊流程，搭配網頁轉址服務的簡易設定，提供網路使用者新型態網路架站服務體驗。</p><div class=text-center><button class=ac-btn hvr-back-pulse>了解更多</button></div></div></div>");
		$("#section2").find("#new-add-info").removeAttr("id");
	})
     

	var numb = 5;
	$("#more-movie").click(function(){
		var number = numb;
	$("#new-add-movies").after(("<div class=row id=new-add-movies><div class=col-sm-6><div class=vide-min><div class=vide-img><img src=img/vide.jpg></div><div class=vide-text>"+
			"<a href=https://www.youtube.com/embed/bnyR69Nf0kI id=show{number1} class=cboxElement><img src=img/icons/play.svg></a>"+
			"<p class=vide-conten>推廣活動消息頁面，各活動均以欄位形式呈現。顯示出各活動名稱、代表圖與簡短文字敘述，使用者點擊後連結至該活動網站。代表圖尺寸固定尺寸為547 x 355 pix</p>"+
			"</div></div></div><div class=col-sm-6><div class=vide-min><div class=vide-img><img src=img/vide.jpg></div>"+
			"<div class=vide-text><a href=https://www.youtube.com/embed/bnyR69Nf0kI id=show{number2} class=cboxElement><img src=img/icons/play.svg>"+
			"</a><p class=vide-conten>推廣活動消息頁面，各活動均以欄位形式呈現。顯示出各活動名稱、代表圖與簡短文字敘述，使用者點擊後連結至該活動網站。代表圖尺寸固定尺寸為547 x 355 pix</p>"+
			 "</div></div></div><div class=col-sm-6><div class=vide-min><div class=vide-img><img src=img/vide.jpg>"+
			 "</div><div class=vide-text><a href=https://www.youtube.com/embed/bnyR69Nf0kI id=show{number3} class=cboxElement>"+
			 "<img src=img/icons/play.svg></a>"+
			 "<p class=vide-conten>推廣活動消息頁面，各活動均以欄位形式呈現。顯示出各活動名稱、代表圖與簡短文字敘述，使用者點擊後連結至該活動網站。代表圖尺寸固定尺寸為547 x 355 pix</p>"+
			 "</div></div></div><div class=col-sm-6><div class=vide-min>"+
			 "<div class=vide-img><img src=img/vide.jpg></div><div class=vide-text>"+
			 "<a href=https://www.youtube.com/embed/bnyR69Nf0kI id=show{number4} class=cboxElement><img src=img/icons/play.svg></a>"+
			 "<p class=vide-conten>推廣活動消息頁面，各活動均以欄位形式呈現。顯示出各活動名稱、代表圖與簡短文字敘述，使用者點擊後連結至該活動網站。代表圖尺寸固定尺寸為547 x 355 pix</p>"+
			 "</div></div></div></div>").replace('{number1}',number).replace('{number2}',number+1).replace("{number3}",number+2).replace("{number4}",number+3));
    		cson(number);
    		numb = number+4;
			$("#section3").find("#new-add-movies").removeAttr("id");
	})

	function cson(i){
				$("#show"+i).colorbox({iframe:true, innerWidth:"64%", innerHeight:"39%"});
				$("#show"+(i+1)).colorbox({iframe:true, innerWidth:"64%", innerHeight:"39%"});
				$("#show"+(i+2)).colorbox({iframe:true, innerWidth:"64%", innerHeight:"39%"});
				$("#show"+(i+3)).colorbox({iframe:true, innerWidth:"64%", innerHeight:"39%"});	
	}
	cson(1);
})