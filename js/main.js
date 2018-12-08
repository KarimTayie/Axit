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

    // Smooth Scroll To Div

    $('.nav li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

        // Active list

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Loading Screen

    // $(window).on("load", function () {

    //     // Loading Elements

    //     $('.loading-overlay .sk-cube-grid').fadeOut(2000, function () {

    //         // Show The Scroll

    //         $('body').css('overflow', 'auto');

    //         $(this).parent().fadeOut(2000, function () {

    //             $(this).remove();

    //         });

    //     });

    // });

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
