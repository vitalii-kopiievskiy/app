new Swiper('.partners__slider', {
  direction: 'horizontal',
  loop: true,
  // spaceBetween: 40,
  // autoHeight: true,
  speed: 1000,
  slidesPerView: 3,
  centeredSlides: true,
  effect: 'slide',
  // slidesOffsetBefore: 360,
  autoplay: {
    delay: 2000
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // slidesOffsetBefore: 350,
      spaceBetween: 40
    },
    425: {
      slidesPerView: 3
      // slidesOffsetBefore: 360
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.partners__icon-prev',
    prevEl: '.partners__icon-next'
  }
});

new Swiper('.portfolio__slider', {
  // Optional parameters
  direction: 'horizontal', // направление слайдов ("vertical" или "horizontal")
  loop: true, // зацикливание слайдера
  // width: 526, //ширина
  // height: 300, //высота
  // spaceBetween: 40,
  // autoHeight: true, // автоматическая подгонка слайдера по высоте слайдов
  //   initialSlide: 1, //номер индекса начального слайда
  speed: 1000, // продолжительность перехода

  slidesPerView: 1, // колличество слайдов на просмотр
  centeredSlides: true, // активный слайд по центру
  effect: 'fade', // "slide", "fade", "cube", "coverflow" or "flip" - эффект переключения слайдов
  // slidesOffsetBefore: 360, // смещение слайдов в начале
  //   slidesOffsetAfter: 100, // смещение слайдов в конце
  autoplay: {
    delay: 2000 // автовоспроизведение
  },

  //   grabCursor: true, // перемещение слайдов курсором

  // If we need pagination

  pagination: {
    el: '.portfolio__pagination',
    type: 'bullets', // "bullets", "fraction", "progressbar" or "custom"
    clickable: true // переключение слайдов пагинацией
    // dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.ortfolio__icon-prev',
    prevEl: '.tech__icon-next'
  }

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar'
  // }
});

new Swiper('.tech__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  autoHeight: true,
  speed: 1000,
  slidesPerView: 3,
  centeredSlides: true,
  effect: 'slide',

  autoplay: {
    delay: 2000
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // slidesOffsetBefore: 350,
      spaceBetween: 40
    },
    425: {
      slidesPerView: 3
      // slidesOffsetBefore: 360
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.tech__icon-prev',
    prevEl: '.tech__icon-next'
  }
});

let nav = document.querySelector('.nav');
document.addEventListener('scroll', function() {
  if (window.pageYOffset >= 4) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
});

// Выпадающее меню пункта service
$(function() {
  $('#menu li#sub__menu ul').hide();
  // $('#menu li#sub__menu').hover(
  //   function() {
  //     $(this)
  //       .find('ul')
  //       .slideDown();
  //   },
  //   function() {
  //     $(this)
  //       .find('ul')
  //       .slideUp('fast');
  //   }
  // );
});

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    items: 1
  });
});

// Block about - animate numbers
$(window).scroll(function() {
  $('.achiev__number--first').animate(
    { num: 150 - 3 /* - начало */ },
    {
      duration: 2000,
      step: function(num) {
        this.innerHTML = (num + 3).toFixed() + '+';
      }
    }
  );
});

$(window).scroll(function() {
  $('.achiev__number--second').animate(
    { num: 140 - 3 /* - начало */ },
    {
      duration: 2000,
      step: function(num) {
        this.innerHTML = (num + 3).toFixed() + '+';
      }
    }
  );
});

$(window).scroll(function() {
  $('.achiev__number--third').animate(
    { num: 250 - 3 /* - начало */ },
    {
      duration: 2000,
      step: function(num) {
        this.innerHTML = (num + 3).toFixed() + 'K+';
      }
    }
  );
});

$(window).scroll(function() {
  $('.achiev__number--fourth').animate(
    { num: 12 - 3 /* - начало */ },
    {
      duration: 2000,
      step: function(num) {
        this.innerHTML = (num + 3).toFixed();
      }
    }
  );
});

// Accordion

$(document).ready(function() {
  $('.accordion__head').click(function() {
    $(this)
      .toggleClass('in')
      .next()
      .slideToggle();
    $('.accordion__head')
      .not(this)
      .removeClass('in')
      .next()
      .slideUp();
  });
});

$(document).ready(function() {
  $('.ques__headline').click(function() {
    $(this)
      .toggleClass('in')
      .next()
      .slideToggle();

    $('.ques__headline')
      .not(this)
      .removeClass('in')
      .next()
      .slideUp();
  });
});

AOS.init();

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  });
  $('#scrollTop').click(function() {
    $('body,html').animate(
      {
        scrollTop: 0
      },
      700
    );
  });
});
