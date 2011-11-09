function initInputSuggestion(custom_settings){
  var default_settings = {
    input_selctor_param: 'data-suggestion-text',
    active_class: 'suggestion_text'
  };
  var settings = $.extend(true, default_settings, custom_settings);
    
  $('input['+settings['input_selctor_param']+'], textarea['+settings['input_selctor_param']+']').each(function(){
    var elem = $(this);

    if(elem.attr('value') == ''){
      elem.attr('value', elem.attr(settings['input_selctor_param']));
      elem.addClass(settings['active_class']);
      elem.bind('focusin', function(){
        if(elem.hasClass(settings['active_class'])){
          elem.attr('value', '');
          elem.removeClass(settings['active_class']);
        }
      });

      elem.bind('focusout', function(){
        if(elem.attr('value') == ''){
          elem.addClass(settings['active_class']);
          elem.attr('value', elem.attr(settings['input_selctor_param']));
        }
      });
    }
  });

  // Clear the default text before the form is submitted
  $('input['+settings['input_selctor_param']+'], textarea['+settings['input_selctor_param']+']').parents().submit(function(){
    $('input['+settings['input_selctor_param']+'], textarea['+settings['input_selctor_param']+']').each(function(){
      if ($(this).hasClass(settings['active_class'])) this.value = '';
    });
  });
}