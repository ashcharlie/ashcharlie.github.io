// $(window).scroll(function () {
//     if ($(window).scrollTop() > 100) {
//         $('#nav').css('top', $(window).scrollTop());
//     }
// }
// );

$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 116) {
      $('#nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 117) {
      $('#nav').removeClass('navbar-fixed');
    }
  });
});