angular.module('jk_site').directive('slickPromotion', function($timeout) {
	return {
		restrict: 'E',
		link: function(scope, element, attr) {
      scope.$watch('loaded.promotion.list', function(data) {
        if(data) {
          $timeout((function() {
            element.slick({
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 3,
              centerMode: true,
              adaptiveHeight: true,
              mobileFirst: true,
              prevArrow: '<i class="fa fa-chevron-left" style="position:absolute;top:45%;left: 10px;color:red;z-index:999;font-size:40px;cursor:pointer;"></i>',
              nextArrow: '<i class="fa fa-chevron-right" style="position:absolute;top:45%;right: 10px;color:red;z-index:999;font-size:40px;cursor:pointer;"></i>',
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
          }), 100);
        }
      })
			
		},
	};
});