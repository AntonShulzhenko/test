(function($) {
  var inputs = $('.input');

  function validateField(field) {
    var EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      isValid = false;

    function setError() {
      field.addClass('error');
    }

    function reset() {
      field.removeClass('error');
    }

    function validate() {
      if (field.val() === '' && field.parent().hasClass('required')) {
        setError();
      } else if (field.attr('type') === 'email' && !EMAIL_RE.test(field.val())) {
        setError();
      } else {
        reset();
        return isValid = true;
      }
    }

    validate();

    return isValid;
  }

  inputs.each(function() {
    $(this).on('keypress', function() {
      validateField($(this));
    });

    $(this).on('blur', function() {
      validateField($(this));
    });
  });

  function sendFormData(form, sendFileName) {
    if (!form) return;

    var formData     = form.serialize(),
      // formURI        = form.data('uri'),
      // successMessage = form.find('.success-message'),
      // formWrap       = form.find('.form__wrap'),
      fields         = form.find('.input');

    console.log(formData);

    // $.ajax({
    //   type: 'POST',
    //   // url: formURI + '/' + sendFileName,
    //   data: formData,
    //   success: function() {
    //     // formWrap.addClass('hidden');
    //     // successMessage.removeClass('hidden');
    //     console.log(formData);
    //     setTimeout(function() {
    //       // successMessage.addClass('hidden');
    //       // formWrap.removeClass('hidden');
    //
    //       fields.each(function() {
    //         $(this).val('');
    //       });
    //     }, 3000);
    //   },
    //   error: function() {
    //     alert('Ошибка отправки');
    //   }
    // });
  }

  $('#form').on('submit', function(e) {
    var errors = [];

    inputs.each(function() {
      var result = validateField($(this));

      if ($(this).parent().hasClass('required')) {
        errors.push(result);
      }
    });

    console.log(errors);
    if(errors.length) e.preventDefault();

    sendFormData($(this));

    return false;
  });
})(jQuery);
