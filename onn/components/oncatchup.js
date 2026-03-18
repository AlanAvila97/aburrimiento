var nshows = 0;
var mediaBaseURL = "https://canalonce.mx/REST/data/catch/";
// jwplayer.key="sCCqArL9acM2GGIJSRNkqxV2AC5E2PvPqjwmaop3cIC1KSNm";
const jsonDataOnCatchup = jsonOnCatchup();
function pauseCircleAnimation(){
	$("body").on("mouseover", ".circle", function(){
		$(".circle").css("-webkit-animation-play-state", "paused");
		$(".circle").css("-moz-animation-play-state", "paused");
		$(".circle").css("-o-animation-play-state", "paused");
		$(".circle").css("animation-play-state", "paused");
	});
	$("body").on("mouseout", ".circle", function(){
		$(".circle").css("-webkit-animation-play-state", "running");
		$(".circle").css("-moz-animation-play-state", "running");
		$(".circle").css("-o-animation-play-state", "running");
		$(".circle").css("animation-play-state", "running");
	});
}
$("document").ready(function(e) {
	addEvents();
	if($(".home").length){
		$.post("REST/index.php?cache="+$.now(),{module: "Oncatchup", function: "ListHomeNinos"}, function(data){
			var arrayList = [];
			var response = $.parseJSON(data);

			var count = Object.keys(response).length;
			$(".swiper-wrapper").html("");
			$.each(response, function(){
				let element = this;
				$.each(jsonDataOnCatchup, function(){
					if(this.cve_pgm*1 == element*1){
						arrayList.push(this);
					}
				});
			});
			$.each(arrayList, function(){
				$('.container-programs').append('<a class="FredokaOne" href="./oncatchup_detail/'+this.cve_pgm+'">'+
													'<div class="image-hover">'+
														'<div class="img-wrap">'+
															'<img src="'+mediaBaseURL+this.normalH+'" alt="'+this.nombre_serie+'"/>'+
														'</div>'+
														'<div class="img-shadow"></div>'+
														'<div class="hover">'+
															'<p>¡Ver Capítulo!</p>'+
														'</div>'+
													'</div>'+
													'<div class="container-name">'+
														'<p>'+this.nombre_serie+'</p>'+
													'</div>'+
												'</a>');
			});
		});
	}
	if($(".detail").length){
		$("#popUp").toggle(false);
		$.post("../REST/index.php?cache="+$.now(),{module: "Oncatchup", function: "DeatailDataNinos", slug:$("body").attr("data-id")}, function(data){
			var arrayList = $.parseJSON(data);
			$.each(arrayList, function(){
				$("body").attr("data-serie", this.nombre_serie);
				$("#imageDetail").css("background-image", 'url('+mediaBaseURL+arrayList[nshows].normalI+')');
				$("#imageDetail .tag").html('<p>'+arrayList[nshows].descripcion+'</p>');
				$(".mobileContainer").append('<div class="channel" style="background-image:url('+mediaBaseURL+this.smallI+');"></div><div class="elist"></div>');
			});
		});
		$.post("../REST/index.php?cache="+$.now(),{module: "Oncatchup", function: "enabledVideos", slug:$("body").attr("data-id")}, function(data){
			var arrayList = $.parseJSON(data);
			let i = 1; 
			$(".detail .episodeList ").html("");
			if(arrayList[0].Status !="Success"){
				$.each(arrayList, function(){
					if($("body").attr("data-id") == "3489"){					
						// if(i <= 4){
							var nombre = this.nombre;
							if(nombre.includes("/")){
								nombre = nombre.split("/")[1];
							}
							$(".detail .episodeList ").append('<div class="epi" data-thumbnail="'+this.thumbnail+'" data-movie="'+this.file+'" data-vda="'+this.vda+'">'+nombre+'</div>');
							$(".elist").append('<div class="epi" data-thumbnail="'+this.thumbnail+'" data-movie="'+this.file+'" data-vda="'+this.vda+'">'+nombre+'</div>');
						// }
					}else{
						var nombre = this.nombre;
						if(nombre.includes("/")){
							nombre = nombre.split("/")[1];
						}
						$(".detail .episodeList ").append('<div class="epi" data-thumbnail="'+this.thumbnail+'" data-movie="'+this.file+'" data-vda="'+this.vda+'">'+nombre+'</div>');
						$(".elist").append('<div class="epi" data-thumbnail="'+this.thumbnail+'" data-movie="'+this.file+'" data-vda="'+this.vda+'">'+nombre+'</div>');
					}
					i++;
				});
			}
		});
	}
});
function addEvents(){
	if($(".detail").length){
		var options = { 
			plugins: {
				httpSourceSelector:
				{
				default: 'auto'
				},
			},  
			techOrder: [ 'chromecast', 'html5', 'youtube', 'vimeo' ],
			controls: true,
			html5:{
					hls: {
						overrideNative: !videojs.browser.IS_SAFARI,
					},
				},
		};
        videojs.registerPlugin('apiVideoAnalytics', VideoJsApiVideoAnalytics);
		var playerVimeo =  videojs('videoJs', {options});
			playerVimeo.httpSourceSelector();
			playerVimeo.landscapeFullscreen({
												fullscreen: {
															enterOnRotate: true,
															exitOnRotate: true,
															alwaysInLandscapeMode: true,
															iOS: false
												}  
											});
		$("body").on("click", ".epi", function(){
			$("#popUp").toggle(true);
			var titleEpisode = $(this).text();
			var dataMovie = $(this).attr("data-movie");
			var datathumbnail = $(this).attr("data-thumbnail");
			var vda = $(this).attr("data-vda");
			$('#videoPlayer').addClass('d-none');
			$('#videoJs').removeClass('d-none');

			if (vda.includes('m3u8')) {			
				playerVimeo.apiVideoAnalytics({
					events: [
					  {
						name: 'play',
						label: 'video play',
						action: 'play',
						event_label: vda,
					  },
					  {
						name: 'fullscreenchange',
						label: {
						  open: 'video fullscreen open',
						  exit: 'video fullscreen exit'
						},
						action: 'fullscreen change',
						event_label: vda,
					  },
					  {
						name: 'timeupdate',
						action: 'time updated',
						event_label: vda,
					  }
					]            
				  });
				playerVimeo.reset();
				playerVimeo.src({ type: 'application/x-mpegURL', src: vda });        
				playerVimeo.controls(true);
				playerVimeo.playsinline(true);
				playerVimeo.autoplay(true); 
			}else{
				var repVimeo =  videojs('videoJs', {});  
					repVimeo.apiVideoAnalytics({
						events: [
						{
							name: 'play',
							label: 'video play',
							action: 'play',
							event_label: vda,
						},
						{
							name: 'fullscreenchange',
							label: {
							open: 'video fullscreen open',
							exit: 'video fullscreen exit'
							},
							action: 'fullscreen change',
							event_label: vda,
						},
						{
							name: 'timeupdate',
							action: 'time updated',
							event_label: vda,
						}
						]            
					});				
					repVimeo.reset();
					repVimeo.src({ techOrder: ["vimeo"], type: 'video/vimeo', src: vda });
					repVimeo.controls(true);
					repVimeo.playsinline(true);
					repVimeo.autoplay(true);            
			}
		});	
		$("#popUp").click(function(){
			$("#popUp").toggle(false);
			$( "#videoPlayer" ).remove();
			$(".videoHolder").append('<div id="videoPlayer"></div>');
			playerVimeo.pause();
		});
	}
	$("#popUp div").click(function(e) {
	    e.stopPropagation();
	});
}
function jsonOnCatchup() {
	var onCatchup = $.ajax({
	  url: 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/catch.json',
	  async: false
	});
	return onCatchup.responseJSON;
}
function sizeWindowBtnSearch(params) {
	// if (screen.width < 450 ){
	//   document.querySelector('#btnSearch').classList.add('redirect-search');
	// }else{
	//   document.querySelector('#btnSearch').classList.remove('redirect-search');
	// }
	// setTimeout(function(){
	//   sizeWindowBtnSearch();
	// }, 500);
}