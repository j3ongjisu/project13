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
    $('.main_slide').slick('slickPrev');
    console.log('000')
  });
  $('.main_visual .arrows .right').on('click', function () {
    $('.main_slide').slick('slickNext')
  });

  $('.main_visual .menu li').on('click', function (e) {
    e.preventDefault();
    const idx = $(this).index(); // 0,1,2
    $('.main_slide').slick('slickGoTo', idx);
  });

  //모바일 탭 버튼
  $('.mobile_btn').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  });

  $('.gnb>ul>li>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {
      e.preventDefault();
    }

    $(this).next().stop().slideDown();
    $(this).parent().siblings().find('.sub_menu').stop().slideUp();
  });
  $('.pro_slide').slick({
    arrows: false,
  });

  $('.main_pro_slide .pro_arrows .left').on('click', function () {
    $('.pro_slide').slick('slickPrev');
    console.log('000')
  });
  $('.main_pro_slide .pro_arrows .right').on('click', function () {
    $('.pro_slide').slick('slickNext')
  });


  $('.family_link span').on('click', function () {
    $(this).toggleClass('on');
    $(this).next().toggleClass('on');
  });


  //to_top
  //to_top 스크롤 위로 올리기
  $('.to_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600)
  });

  // to_top 스크롤 숨겼다가 나타내기
  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    // sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
    sct > 400 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
  });
})