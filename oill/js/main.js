$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        nextArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>'
    })
  });