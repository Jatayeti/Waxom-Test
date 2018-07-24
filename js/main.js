$(document).ready(function(){

  $(".header__slider").slick({
    autoplay: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    prevArrow: $('.header__slider__arrow.left'),
    nextArrow: $('.header__slider__arrow.right'),
    dots: true,
    dotsClass: 'header__slider__dots'
  });

  $(".posts__slider").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    prevArrow: $('.post__slider__arrows__left'),
    nextArrow: $('.post__slider__arrows__right'),
    slidesToShow: 3,
    variableWidth: true
  });

});