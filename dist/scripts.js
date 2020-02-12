new Swiper('.partners__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  autoHeight: true,
  speed: 1000,
  slidesPerView: 3,
  centeredSlides: true,
  effect: 'slide',
  slidesOffsetBefore: 360,
  autoplay: {
    delay: 2000
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
  width: 526, //ширина
  height: 300, //высота
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
    prevEl: '.partners__icon-next'
  }

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar'
  // }
});
