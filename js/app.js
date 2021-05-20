"use strict";

new Splide('.splide', {
  classes: {
    prev: 'splide__arrow--prev arrow-prev',
    next: 'splide__arrow--next arrow-next'
  },
  type: 'fade',
  rewind: true,
  pagination: false
}).mount();
var navButton = document.querySelector('.menu__icon');

if (navButton) {
  var nav = document.querySelector('.header__nav');
  navButton.addEventListener("click", function (e) {
    navButton.classList.toggle('_active');

    if (!nav.classList.contains('header__nav--active')) {
      nav.classList.add('header__nav--active');
    } else {
      nav.classList.remove('header__nav--active');
    }
  });
}

;