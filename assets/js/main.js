$(document).ready(function () {
  $('.bi-heart-fill').on('click', function () {
    $(this).toggleClass('red-like')
  })
  var header = $('.arrow-top')
  var scrollChange = 10;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('arrow-show');
    } else {
      header.removeClass("arrow-show");
    }
  });
  $('#check').on('click', function(){
    $('.menu').toggleClass('menu-show')
  })
})