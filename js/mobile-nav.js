/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

$( document ).ready(function() {
  $('.mobile-menu-toggle').click( function() {
      $("#topNav, header, #pageWrapper").toggleClass("mobile-nav-active");
  } );
}); 