$(function() {

 	/** 
 	 * Mobile Nav
 	 *
 	 * Toggle Side Menu - Left or Right
 	 */

	// Prepend a mobile icon to the header
	$(".custom-menu-primary").after('<a class="mobile-icon"><span></span></a>');
	 
	// Prepend a close icon to the menu
	$(".custom-menu-primary .hs-menu-flow-horizontal>ul").before('<a class="close-icon"><span></span></a>');
	 
	// Add body class on mobile icon click
	$(".mobile-icon, .close-icon").click(function(){
	$("body").toggleClass("show-mobile-nav ");
	});
	 
	// Set the menu height to 100% of the document
	function setMenuHeight(){
		if ( $(window).width() < 767) {     
	      	var height = $(document).outerHeight(true);
		   	$(".custom-menu-primary").height(height);
		}   
	}
	setMenuHeight();
	$(window).on("resize", setMenuHeight);
	
	// Wrap body contents with a div so the transforms will work
    $('body> div').find('script:not(script[type="IN/Share"])').remove().end().wrapAll('<div id="site-wrapper"></div>');
    

});
