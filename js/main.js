/*global $, alert, console*/

$(function () {
    
    "use strict";
    
	$(window).scroll(function () {
        
		var navbar = $(".navbar"),
            header = $(".header");

		if ($(window).scrollTop() >= header.height()) {
            
            if (!navbar.hasClass('scrolled navbar-fixed-top')) {
                
                navbar.addClass('scrolled navbar-fixed-top');
                
            }
        
        } else {
            
            navbar.removeClass('scrolled navbar-fixed-top');
            
        }
        
	});
    
    // Deal With Tabs 
    
    $('.tab-switch li').click(function () {
        // Add Selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide All Divs
        $('.tabs-section .tabs-content > div').hide();
        // Show Div Connected With This Link
        $('.' + $(this).data('class')).show();
    });
    
});

/*

$(function() {
	
    "use strict";
    
    $(window).scroll(function () {
        
        var navbar = $('.navbar');
        if (navbar.hasClass('scrolled') && $(window).scrollTop() < navbar.height()) {
            navbar.removeClass('scrolled');
        } else {
            navbar.addClass('scrolled');
        }
        
    });
    
});

*/