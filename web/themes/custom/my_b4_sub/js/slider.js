$('.view-clients-block').children('.view-content').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: false,
  prevArrow: false,
  nextArrow: false,
  responsive: [
  {
  breakpoint: 992,
  settings: {
  slidesToShow: 4,
  slidesToScroll: 4
  }
  },
  {
  breakpoint: 768,
  settings: {
  slidesToShow: 3,
  slidesToScroll: 3
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
  breakpoint: 400,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
