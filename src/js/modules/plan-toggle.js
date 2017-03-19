(function($) {
  var colorTarget = $('.color-target'),
    plans         = $('.plans'),
    totalPrice    = $('.total-price'),
    classes       = {
      ind: 'individual',
      fam: 'family',
      bs : 'business'
    };

  function switchColor(el, addClass, removeClasses) {
    el.removeClass(removeClasses);
    el.addClass(addClass);
  }

  function setTotalAmount(el) {
    var radio = el.children('input[type="radio"]');

    if (radio.prop('checked')) {
      var value = radio.next().text();
      totalPrice.find('.total-price__amount').text(value);
    }
  }

  $('.price label').each(function() {
    setTotalAmount($(this));
  });

  plans.on('click', '.price label', function() {
    if ($(this).parent().hasClass('price_individual')) {
      switchColor(colorTarget, classes.ind, classes.fam + ' ' + classes.bs);
    } else if($(this).parent().hasClass('price_family')) {
      switchColor(colorTarget, classes.fam, classes.ind + ' ' + classes.bs);
    } else if($(this).parent().hasClass('price_business')) {
      switchColor(colorTarget, classes.bs, classes.ind + ' ' + classes.fam);
    }

    setTotalAmount($(this));
  });
})(jQuery);
