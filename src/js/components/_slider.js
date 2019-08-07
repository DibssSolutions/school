import slick from 'slick-carousel';
const slider = $('.js-slider');

slider.each((i,el) => {
  $(el).slick({
	  dots: false,
	  arrows: true,
	  // infinite: false,
	  speed: 400,
	  slidesToShow: $(el).data('slide-show') || 4,
	  slideToScroll: 1,
	  autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: $(el).data('slide-show-md') || 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: $(el).data('slide-show-sm') || 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: $(el).data('slide-show-xs') || 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });

});
