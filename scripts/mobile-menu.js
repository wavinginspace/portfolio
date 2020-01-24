$('nav').on('click', '.hamburger-button', function() {
  $('.mobile-menu').toggleClass('open');
  $('#burger-svg').toggleClass('burger-closed');
  $('#burger-svg').toggleClass('burger-open');
});