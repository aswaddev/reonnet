$(document).ready(function() {
  $(this).scrollTop(0);

  $('ul#menu-wrapper').click(function() {
    $('ul#menu-wrapper').toggleClass('active');
    $('.menu-content').toggleClass('active');
  });

  $(window).scroll(function() {
    parallax_height();
  });

  $(window).resize(function() {
    parallax_height();
  });

  function parallax_height() {
    var scroll_top = $(this).scrollTop();
    if ($(window).scrollTop() >= $('.content').offset().top - 265) {
      $('.header').css({
        transition: 'height 500ms ease-out'
      });
      $('.header').css({
        height: '50px'
      });
      $('.header-section').css('display', 'none');
      $('nav .top').addClass('shrink');
      $('nav').addClass('bg-visible');
      $('nav').removeClass('bg-hidden');
    } else {
      $('.header').css({
        transition: 'none'
      });
      $('.header-section').css('display', 'flex');
      $('nav .top').removeClass('shrink');
      $('nav').removeClass('bg-visible');
      $('nav').addClass('bg-hidden');
      var sample_section_top = $('.content').offset().top;
      var header_height = $('.header-section').outerHeight();
      $('.content').css({
        'margin-top': header_height
      });
      $('.header').css({
        height: header_height - scroll_top
      });
      $('.blur-bg').css('opacity', $(window).scrollTop() * 0.005);
      $('.header-section .container').css(
        'top',
        50 + $(window).scrollTop() * 0.1 + '%'
      );
      $('.header-section .container').css(
        'opacity',
        1 - $(window).scrollTop() * 0.003
      );
      // $('.header-section .container').css(
      //   'filter',
      //   'blur(' + (0.003 + parseInt($(window).scrollTop() / 20)) + 'px)'
      // );
    }
  }

  var heading = document.getElementById('header-text');
  heading.addEventListener('animationend', function(e) {
    if (e.animationName == 'slide-up') {
      this.classList.remove('header-slide-up');
    }
  });

  var callToAction = document.getElementById('call-to-action');
  callToAction.addEventListener('click', function(e) {
    $('html, body').animate(
      {
        scrollTop: window.innerHeight
      },
      {
        duration: 0,
        specialEasing: {
          width: 'easeOutExpo',
          height: 'easeOutExpo'
        }
      }
    );
  });
});
