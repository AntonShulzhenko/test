(function($) {
  var menu  = $('.nav'),
    overlay = $('.overlay'),
    btn     = $('.nav__btn'),
    tl      = new TimelineMax();

  function isClosed() {
    menu.removeClass('is-opened');
    tl.to(menu, 0.3, {x: '100%', ease: Power1.easeIn});
    overlay.removeClass('is-opened');
  }

  function isOpened() {
    overlay.addClass('is-opened');
    menu.addClass('is-opened');
    tl.to(menu, 0.3, {x: '0%', ease: Power1.easeIn});
  }

  btn.on('click', function() {
    $(this).toggleClass('is-active');

    if(menu.hasClass('is-opened')) {
      isClosed();
    } else {
      isOpened();
    }
  });

  overlay.on('click', function() {
    isClosed();
  });
})(jQuery);
