var HomePage = HomePage || {};

HomePage.showSearch = (function() {

	var isMobile = window.matchMedia("only screen and (max-width: 1024px)");
	$("#searchBox").toggleClass("activeSearch");

    if (isMobile.matches) {
				var animationTime = 200;
				// Open up the search box. And focus on it when it's open.
				$('#searchBox').slideToggle(animationTime, function () {
						$('#navsearchboxDT').focus();
				});
    } else {
    	$("#searchBox").animate({
            width: "350px"
        });
        $('#navsearchboxDT').focus();

    }
});

jQuery(document).ready(function($) {
	function selectBOD() {
		if($(window).width() > 1024) {
			// Commenting for Mobile search functionality issue [BBMM-1290]
			 $(".left-options .main-menu li.bod-menu" ).hover(function(){
			// 	$("#mega-menu").removeClass("our-company");
				$("#mega-menu").addClass("bbod");
			 });
			$( ".left-options .main-menu li" ).not( ".bod-menu" ).hover(function(){
				$("#mega-menu").removeClass("bbod");
				//$("#mega-menu").removeClass("our-company");
			});
		} else {
			$("#mega-menu").removeClass("bbod");
		}
	}
	function moveSearchBox() {
		if($(window).width() < 1025) {
			$('#searchBox').appendTo("#headerNav");
			$(".activeSearch").width("100%");
		} else {
			$("#searchBox").prependTo(".actions");
			$(".activeSearch").width("350px");
		}
	}
	moveSearchBox();
	selectBOD();

	$(window).resize(function(){
	    /* Commenting for Mobile search functionality issue [ BBMM-1290]
			moveSearchBox(); */
	    selectBOD();
	});
});
