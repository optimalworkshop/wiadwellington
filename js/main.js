$( document ).ready(function() {
  
  $('nav a, .more-arrow').smoothScroll();

  $('#subscribeLink').click(function() {
    setTimeout( function() {
      $('.email').focus();
    }, 1000 );
  });

});
