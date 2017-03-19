(function($) {
  var nav = $('.nav');

  if($(window).width() > 900) {
    nav.on('mouseenter', '.dropdown', function() {
      $('.dropdown-menu').removeClass('is-opened');
      $(this).next().addClass('is-opened');
    });

    nav.on('mouseleave', '.dropdown-menu', function() {
      $(this).removeClass('is-opened');
    });
  }
})(jQuery);
