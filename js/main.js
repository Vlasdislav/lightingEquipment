var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
    menuButton.addEventListener('click', function(){
      menuButton.classList.toggle('menu-button-active');
      menu.classList.toggle('header-active');
});

var swiper = new Swiper('.s-project', {
    slidesPerView: 1,
    loop: true,
    width: 578,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        width: 1100,
      }
    }
    
  });

var swiper = new Swiper('.s-rent', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.next-1',
      prevEl: '.prev-1',
    },
  });

$(document).ready(function () {
  let sectionLink = $('.section-link');
  
  sectionLink.on('click', function (event) {
    event.preventDefault();
      let activeContent = $(this).attr('href');
      $('.visible').toggleClass('visible');
      $(activeContent).toggleClass('visible');
      $('.section-link-active').toggleClass('section-link-active');
      $(this).toggleClass('section-link-active');
  });
});
