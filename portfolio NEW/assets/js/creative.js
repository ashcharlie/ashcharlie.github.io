//Navbar appear after user has begun scrolling

(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 600) {
                //$('.navbar').fadeIn();
                $('.menulogo').fadeOut();
            } else {
                //w$('.navbar').fadeOut();
                $('.menulogo').fadeIn();
            }
        });
    });

});
  }(jQuery));

/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
// var cbpAnimatedHeader = (function() {

//     var docElem = document.documentElement,
//         header = document.querySelector( '.navbar-default' ),
//         didScroll = false,
//         changeHeaderOn = 300;

//     function init() {
//         window.addEventListener( 'scroll', function( event ) {
//             if( !didScroll ) {
//                 didScroll = true;
//                 setTimeout( scrollPage, 250 );
//             }
//         }, false );
//     }

//     function scrollPage() {
//         var sy = scrollY();
//         if ( sy >= changeHeaderOn ) {
//             classie.add( header, 'navbar-shrink' );
//         }
//         else {
//             classie.remove( header, 'navbar-shrink' );
//         }
//         didScroll = false;
//     }

//     function scrollY() {
//         return window.pageYOffset || docElem.scrollTop;
//     }

//     init();

// })();

(function($) {
    "use strict"; // Start of use strict

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict