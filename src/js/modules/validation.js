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

  function confirmField(el1, el2) {
    if (el1.val() === el2.val()) {
      el2.removeClass('error');
    } else {
      el2.addClass('error');
    }
  }

  inputs.each(function() {
    $(this).on('keyup', function() {
      validateField($(this));

      if ($(this).attr('id') === 'email-2') {
        confirmField($('#email-1'), $(this));
      }

      if ($(this).attr('id') === 'pass-2') {
        confirmField($('#pass-1'), $(this));
      }
    });

    $(this).on('blur', function() {
      validateField($(this));

      if ($(this).attr('id') === 'email-2') {
        confirmField($('#email-1'), $(this));
      }

      if ($(this).attr('id') === 'pass-2') {
        confirmField($('#pass-1'), $(this));
      }
    });
  });

  function sendFormData(form) {
    if (!form) return;

    var formData = form.serialize(),
      fields     = form.find('.input');

    $.ajax({
      data: formData,
      success: function() {
        console.log(formData);
        alert('success');
        setTimeout(function() {
          fields.each(function() {
            $(this).val('');
          });
        }, 3000);
      },
      error: function(e) {
        alert('Send Error: ' + e);
      }
    });
  }

  $('#form').on('submit', function(e) {
    var errors = [];

    inputs.each(function() {
      if ($(this).parent().hasClass('required') && $(this).val() === '') {
        $(this).addClass('error');
      }

      if ($(this).parent().hasClass('required') && $(this).hasClass('error')) {
        errors.push(false);
      }
    });

    console.log(errors);

    if(errors.length) {
      return false;
    } else {
      sendFormData($(this));
    }

    e.preventDefault();
  });
})(jQuery);
