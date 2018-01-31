'use strict';

(function(){
$(function(){




	// FANCYBOX
	if( $("[data-fancybox='gallery']").length != 0 )
		$("[data-fancybox='gallery']").fancybox({
			afterShow : function( instance, current ) {
			},
			transitionEffect: "zoom-in-out"
		});

	//WOW
	new WOW({
		offset: 30
	}).init();




	// AOS
	AOS.init({
	  offset: 100,
	  once: true,
	  duration: 1000,
	  delay: 100
	});

	setTimeout(function(){AOS.refresh()}, 1);

	// ELEVATEZOOM
	if( checkView(991) )
		$("[data-zoom-image]:not([group])").elevateZoom({
			scrollZoom : true,
			zoomWindowFadeIn: 500,
			zoomWindowFadeOut: 500,
			lensFadeIn: 300,
			lensFadeOut: 300,
			//cursor: 'pointer', 
			tint:true, 
			tintColour:'#000', 
			tintOpacity:0.5,
			//zoomType				: "lens",
			//lensShape : "round",
			//lensSize    : 200,
			imageCrossfade: true, 
			easing : true
		});

	// MMENU
	$("#min-menu").mmenu({
		"extensions": [
			"fx-menu-zoom",
			"fx-panels-zoom",
			"pagedim-black",
			"theme-dark"
		],
		"offCanvas": {
			"position": "right"
		},
		"navbars": [
			{
			"position": "top"
			}
		]
	});
	$("#min-menu").addClass("in");

  // Flikity Carousel
  	var arrowStyle = { 
		  x0: 10,
		  x1: 60, y1: 50,
		  x2: 70, y2: 40,
		  x3: 30
		}

  // POPULAR
	var carouselPopular = $('.carousel-popular .carousel-content').flickity({
		//setGallerySize: false,
		autoPlay: 3000,
		arrowShape: arrowStyle,
		imagesLoaded: true,
		prevNextButtons: checkView(991),
		draggable: !checkView(991),
		wrapAround: true,
		//adaptiveHeight: true,
		//selectedAttraction: 0.2,
		//friction: 0.2,
		//rightToLeft: true,
		pageDots: false,
		contain: true,
		percentPosition: true,
		cellAlign: checkView(991) ? "left" : "center"
	});

	// NEW
	var carouselNews = $('.carousel-news').flickity({
		//setGallerySize: false,
		autoPlay: 3000,
		arrowShape: arrowStyle,
		imagesLoaded: true,
		prevNextButtons: true,
		draggable: !checkView(991),
		wrapAround: true,
		//adaptiveHeight: true,
		//selectedAttraction: 0.2,
		//friction: 0.2,
		//rightToLeft: true,
		pageDots: true,
		//contain: true,
		percentPosition: true,
		cellAlign: 'center'
	});




	if( $('.carousel-article').length >= 0 ){

		var carouselMain = 		$('.carousel-article .carousel-main'),
				carouselNav = 		$('.carousel-article .carousel-nav');

		for( var i = 0 ; i < carouselMain.length ; i++ ){

			var crs = $(carouselMain).eq(i).flickity({
				imagesLoaded: true,
				prevNextButtons: false,
				cellAlign: 'center',
				//friction: 1,
				//selectedAttraction: 1,
				initialIndex: 0,
				draggable: true,
				contain: true,
				pageDots: false
			});
			var flkty = crs.data('flickity');

			crs.on( 'settle.flickity', function(e) {
				$(flkty.selectedElement).siblings().css("display", "none");
			})
			crs.on( 'select.flickity', function(e) {
				$(flkty.selectedElement).css("display", "");
			})

			$(carouselNav).eq(i).flickity({
				imagesLoaded: true,
				initialIndex: 0,
			  asNavFor: $(carouselMain)[i],
			  prevNextButtons: true,
			  draggable: true,
			  cellAlign: 'center',
			  adaptiveHeight: true,
			  //contain: true,
			  pageDots: false
			});

		}
	}







	//FORM
	(function() {

		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {

			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}
	})();



	function onLoaded  (){
		
		//MASONRY
		if( $('.grid-img').length ){
		
			var $grid = $('.grid-img').masonry({
			  itemSelector: '.grid-img-item',
			  columnWidth: '.grid-img-sizer',
			  percentPosition: true
			});

		}
	}



	if ( !$(".short-news-content").text().trim().length )
		if ( $(".search-not-found").length )
			$(".search-not-found").addClass("show");

	//RESIZE
	$( window ).on("resize", function(e){});

	//SCROLL
	var header_status = false;
	$( window ).on("scroll", function(e){

		if($(window).scrollTop() > 300 && header_status == false){

			header_status = true;

			if ( $(".min-menu") ) $(".min-menu").addClass("scrolled");

		}else if($(window).scrollTop() < 300 && header_status == true){

			header_status = false;
			if ( $(".min-menu") ) $(".min-menu").removeClass("scrolled");

		}

	});


	//PAGES REV SLIDER
	if( $('.rev-slider-page') )
	    $('.rev-slider-page').revolution({
				delay:6000,
				//startwidth: $( window ).width() < 992 ? $( window ).width() : 1170,
				//startwidth: 1170,
				startheight: checkView(991) ? 645 : 645,
				autoHeight:"off",
				fullScreenAlignForce:"off",

				onHoverStop:"off",

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,

				hideThumbsOnMobile:"off",
				hideBulletsOnMobile:"on",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResoluition:0,

				hideThumbs:-1,
				hideTimerBar:"on",

				keyboardNavigation:"off",

				navigationType:"bullet",
				navigationArrows:"small",
				navigationStyle:"round",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset: 0,
				navigationVOffset:-30,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,


				touchenabled:"off",
				swipe_velocity:"0.7",
				swipe_max_touches:"1",
				swipe_min_touches:"1",
				drag_block_vertical:"false",

				stopAtSlide:-1,
				stopAfterLoops:-1,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				hideSliderAtLimit:0,

				fullWidth:"on",
				fullScreen:"off",
				fullScreenOffsetContainer: "",

				dottedOverlay:"none",
				forceFullWidth:"off",

	      shadow:0
	    });





	
	window.preLoader = {

		preBox: ".pre-box",
		enter: false,
		status: $(".pre-box").hasClass("in"),

		preToggle: function ( bool, func ) {
			var endtime = 600;
			if( !this.enter ) 
				return;
			if ( typeof func === "function" )
				setTimeout( function() { func(); }, endtime )
			var preBox = $(this.preBox);

			bool || this.status ?
				preBox.removeClass("in").setTimeout( function(){ $( preBox ).hide(); }, endtime )
			:
				preBox.show().addClass("in").find(".box-content");
			
			return this.status = !this.status;

		},


		preImg: function ( img ) {

			var images = 						 		img || document.images,
					imagesTotalCount = 			images.length,
					imagesLoadedCount = 		0,
					preloadPercent = 		 		$(".percent").text("0 %");


			if( imagesTotalCount == 0 ){
				preOnload();
				$(preloadPercent).text("100 %"); 
			}

			for ( var i = 0; i < imagesTotalCount ; i++ ) {
				var image_clone = new Image();
						image_clone.onload = 		image_loaded;
						image_clone.onerror = 	image_loaded;
						image_clone.src = 			images[i].src;
			}

			function preOnload (){
				onLoaded();
			}

			function image_loaded (){
				imagesLoadedCount++;

				var per = ( ( 100 / imagesTotalCount ) * imagesLoadedCount ) << 0 ;

				setTimeout( function(){
					//console.log(per);
					$(preloadPercent).text(  per +  "%"); 
				}, 1)

				if(imagesLoadedCount >= imagesTotalCount )	preOnload();
			}

		}
	}


	preLoader.preImg();



	});
}) (jQuery);














var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac =  	 /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent);










// COMMON FUNCTION

function checkView( width ){
	return ($( document ).width() > width);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function scrolledDiv(el) {
	try{
	  var docViewTop = $(window).scrollTop(),
		docViewBottom = docViewTop + $(window).height(),
		elTop = $(el).offset().top,
		elBottom = elTop + $(el).height()/1.8;
	}catch(err){console.error();}

  	return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
}








/**
	REVOLUTION Slider
*/
	// INDEX SLIDER

	  $(function() {
	  	if( $('.rev-slider-page') )
		   window.revSlider = $('.rev-slider').revolution({
					delay:6000,
					startwidth: $( window ).width() < 992 ? $( window ).width() : 1170,
					startheight: $( window ).width() < 992 ? 400 : 645,
					autoHeight:"off",
					fullScreenAlignForce:"off",

					onHoverStop:"off",

					thumbWidth:100,
					thumbHeight:50,
					thumbAmount:3,

					hideThumbsOnMobile:"on",
					hideBulletsOnMobile:"on",
					hideArrowsOnMobile:"on",
					hideThumbsUnderResoluition:0,

					hideThumbs: -1,
					hideTimerBar:"on",

					keyboardNavigation:"off",

					navigationType:"bullet",
					navigationArrows:"none",	//small
					navigationStyle:"round",

					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset: 0,
					navigationVOffset: 30,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:30,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:30,
					soloArrowRightVOffset:0,


					touchenabled: $( window ).width() < 992 ? "on" : "off",
					swipe_velocity:"0.7",
					swipe_max_touches:"1",
					swipe_min_touches:"1",
					drag_block_vertical: "false",

					stopAtSlide:-1,
					stopAfterLoops:-1,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					hideSliderAtLimit:0,

					fullWidth:"on",
					fullScreen:"off",
					fullScreenOffsetContainer: "",

					dottedOverlay:"none",
					forceFullWidth:"off",

		      shadow:0

		    }).find("li").click(function(){ revSlider.revnext();})
			
	 	});

