(function() {

  var start = new Date();

  timer(start, 30, function() {
      console.log('ok');
  });

  $('.js-jcarousel__service').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    arrows: false,
  });

  $('.js-jcarousel__promotions').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    adaptiveHeight: true,
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

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