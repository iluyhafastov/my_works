
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
   document.documentElement.classList.toggle('menu-open');
});


new Swiper('.swiper', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   slidesPerView: 2,
   spaceBetween: 30,
   loop: true,
   slidesPerGroup: 2,
   // centeredSlides: true,
   breakpoints: {
      320: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 10,
      },
      767: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
   },
});





