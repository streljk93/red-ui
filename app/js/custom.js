var start = new Date();

timer(start, 30, function() {
    console.log('ok');
});

$('.jcarousel').slick({
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