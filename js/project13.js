$(function () {

  //header.on
  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 0
      ? $('.header').addClass('on')
      : $('.header').removeClass('on');
  });


  $('.main_slide').on('init afterChange', function (e, s, c) {
    const current = $('.main_slide .slick-current');
    current.addClass('on').siblings().removeClass('on');

    //슬라이드 숫자 표시(1/3)
    $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
    $('.main_visual .slide_num strong').text(s.slideCount);

    console.log(s.slideCount);

    $('.main_visual .menu li').eq(0).addClass('on');
    $('.main_visual .menu li').eq(c).addClass('on')
      .siblings().removeClass('on');
  });

  $('.main_slide').slick({
    autoplay: true,
    autoplaySpeed: 5100,
    speed: 1000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
  });


  $('.main_visual .arrows .left').on('click', function () {
    $('.main_slide').slick('slickPrev')
  });
  $('.main_visual .arrows .right').on('click', function () {
    $('.main_slide').slick('slickNext')
  });

  $('.main_visual .menu li').on('click', function (e) {
    e.preventDefault();
    const idx = $(this).index(); // 0,1,2
    $('.main_slide').slick('slickGoTo', idx);
  })


})