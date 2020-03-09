$('nav').on('click', '.menu-button', function() {
  $('.mobile-menu').toggleClass('open');
  $('#burger-svg').toggleClass('burger-closed');
  $('#burger-svg').toggleClass('burger-open');
  $('#x-icon').toggleClass('x-icon-closed');
  $('#x-icon').toggleClass('x-icon-open');
});
