(function() {

  $('.jcollapse .jcollapse__button').on('click', function() {
    var aria = $(this)[0].attributes['aria-expanded'].value;
    var show = (aria === 'true') ? false : true;
    if(show) {
      $(this).find('i')[0].className = 'fa fa-chevron-up';
    } else {
      $(this).find('i')[0].className = 'fa fa-chevron-down';
    }
  });

}());