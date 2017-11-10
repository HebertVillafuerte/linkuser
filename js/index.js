$(document).ready(function(){

	$("#banner").css({"height":"250px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll > 200){
			if(!flag){
        $("#profile").css({"position":"fixed","transition":"all 0.5s","top":"35px","left":"25px","color":"white"})
				$("#containerone").css({"position":"fixed","left":"0","top":"0","transition":"all 0.4s","background":"#1c3643"})

				$("#puntos").css({"position":"fixed","transition":"all 0.1s","top":"310px","left":"25px","display":"block",
				"background":"none","height":"150px","width":"280px"})
				$(".puntostxt").css({"padding":"12px","font-size":"25px","color":"white","border-bottom":"1px solid #7fc719","text-align":"center"})
				$(".agregar").css({"color":"white"})
				$(".redsocial").css({"color":"white"})
				// $("#links").css({"background":"#001f3f","transition":"all 0.3s"})
				// $("#links1").css({"background":"#001f3f","transition":"all 0.3s"})
				// $("#links2").css({"background":"#001f3f","transition":"all 0.3s"})
				// $("#contperfil").css({"background":"#001f3f","transition":"all 0.s"})
				flag = true;
			}

		}else{
			if(flag){
                $("#profile").css({"position":"relative","transition":"all 0.4s","top":"0","left":"0","color":"black"})
				$("#containerone").css({"position":"relative","top":"0","left":"0","transition":"all 0.5s","background":"none"})
				$(".puntos").css({"position":"relative","transition":"all 0.3s","display":"none",
				"background":"white","height":"20","width":"500px"})

				$(".puntostxt").css({"padding":"12px","font-size":"15px","color":"black","border-bottom":"none","line-height":"1px"})
				// $("#links").css({"background":"none","transition":"all 0.3s"})
				// $("#links1").css({"background":"none","transition":"all 0.3s"})
				// $("#links2").css({"background":"none","transition":"all 0.3s"})
				// $("#contperfil").css({"background":"none","transition":"all 1s"})
				flag = false;
			}
		}


	});

});
    



