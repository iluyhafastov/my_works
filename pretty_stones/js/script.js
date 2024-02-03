"use strict"

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

//---------------------------------------------------
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 8;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffsett || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffsett || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}



