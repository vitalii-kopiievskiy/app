// Slider block partners
new Swiper('.partners__slider', {
  direction: 'horizontal',
  loop: true,
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
      spaceBetween: 40
    },
    425: {
      slidesPerView: 3
    }
  },

  navigation: {
    nextEl: '.partners__icon-prev',
    prevEl: '.partners__icon-next'
  }
});

// Slider block portfolio
new Swiper('.portfolio__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'fade',
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '.portfolio__pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.ortfolio__icon-prev',
    prevEl: '.tech__icon-next'
  }
});

// Slider block technologies
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
      spaceBetween: 40
    },
    425: {
      slidesPerView: 3
    }
  },
  navigation: {
    nextEl: '.tech__icon-prev',
    prevEl: '.tech__icon-next'
  }
});

// Slider block clients
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

// Animate numbers - block about
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

// Accordion block about

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

// Accordion block questions
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

//Blocks AOS
AOS.init();

// Button scrollTop
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
