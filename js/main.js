$(function(){
  
  $('.top-slider, .projects-slider, .projects-image__slider').slick({
    dots: true,
    fade: true,
    // autoplay: 3000,
    prevArrow: '<img class="slider-arr slider-arr-left" src="images/slider-arr-left.svg" alt="">',
    nextArrow: '<img class="slider-arr slider-arr-right" src="images/slider-arr-right.svg" alt=""></img>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('.team__members-slider').slick({
    slidesToShow: 3,
    // infinite: false,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          variableWidth: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          infinite: false,
          // centerMode: true,
        }
      },
    ]
  });

  $('.instagram-slider, .project-images__slider').slick({
    infinite: false,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    initialSlide: 2,
  });

  $('.projects-section__slider').slick({
    fade: true,
    // autoplay: 3000,
    prevArrow: '<img class="slider-arr slider-arr-left" src="images/slider-arr-left.svg" alt="">',
    nextArrow: '<img class="slider-arr slider-arr-right" src="images/slider-arr-right.svg" alt=""></img>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        }
      }
    ]
  })

  $('.projects-map__circle-inner').on('click', function(e) {

    $('.projects-map__circle-inner').removeClass('active');
    $('.projects-map__card').css({ "display": "none" });
    if ( $(this).hasClass('active') ) {
      $(this).children('.projects-map__card').css({ "display": "none" })
    } else {
      $(this).children('.projects-map__card').css({ "display": "block" })
    }
    
    $(this).toggleClass('active');
  });

  $('.menu-btn').on('click', function(e) {
    $('.menu-btn').toggleClass('active');
    $('.aside').toggleClass('active');
    $('.mob-menu').toggleClass('active');
    $('body').toggleClass('lock');
  })

  new WOW().init();

});