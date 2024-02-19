
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
   document.documentElement.classList.toggle('menu-open');
});

//-------------animation--------------------------------------
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

// ---------------Слайдер-------------------------------------
const bromoSlider = document.querySelector('.bromo');
if (bromoSlider) {
   new Swiper('.bromo', {
      // Optional parameters
      loop: true,
      autoHeight: true,
      speed: 800,
      parallax: true,
      spaceBetween: 30,
      breakpoints: {
         320: {
            spaceBetween: 0,
         },
         767: {
            spaceBetween: 30,
         },
         992: {
            spaceBetween: 30,
         },
      },
      // If we need pagination
      pagination: {
         el: '.hero__pagination',
         clickable: true
      },
      // Navigation arrows
      navigation: {
         nextEl: '.bromo__arrow--next',
         prevEl: '.bromo__arrow--prev',
      },
   });
}

// -------------------------------------

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open');
   }
   if (targetElement.closest('[data-spoller]')) {
      const currentElement = targetElement.closest('[data-spoller]');
      if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
         currentElement.classList.toggle('active');
      }
      slideToggle(currentElement.nextElementSibling);
   }
}

const spollers = document.querySelectorAll('[data-spoller]');

if (spollers.length) {
   spollers.forEach(spoller => {
      spoller.nextElementSibling.hidden = true;
   });
}

let slideDown = (target, duration = 500) => {
   if (!target.classList.contains('--sliding')) {
      target.classList.add('--sliding');
      target.hidden = false;
      let height = target.offsetHeight;

      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;

      target.style.overflow = 'hidden';
      target.style.height = 0;

      target.offsetHeight;

      target.style.transitionProperty = `height, margin, padding`;
      target.style.transitionDuration = `${duration}ms`;

      target.style.height = `${height}px`;

      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-bottom')
      target.style.removeProperty('margin-top')

      setTimeout(() => {
         target.style.removeProperty('height')
         target.style.removeProperty('overflow')
         target.style.removeProperty('transition-duration')
         target.style.removeProperty('transition-property')
         target.classList.remove('--sliding');
      }, duration);
   }
}
let slideUp = (target, duration = 500) => {
   if (!target.classList.contains('--sliding')) {
      target.classList.add('--sliding');
      let height = target.offsetHeight;

      target.style.transitionProperty = `height, margin, padding`;
      target.style.transitionDuration = `${duration}ms`;
      target.style.height = `${height}px`;

      target.offsetHeight;

      target.style.overflow = 'hidden';
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;

      target.style.height = 0;

      setTimeout(() => {
         target.style.removeProperty('padding-top')
         target.style.removeProperty('padding-bottom')
         target.style.removeProperty('margin-bottom')
         target.style.removeProperty('margin-top')

         target.style.removeProperty('height')
         target.style.removeProperty('overflow')
         target.style.removeProperty('transition-duration')
         target.style.removeProperty('transition-property')
         target.classList.remove('--sliding');

         target.hidden = true;
      }, duration);
   }
}
let slideToggle = (target, duration = 500) => {
   target.hidden ? slideDown(target, duration) : slideUp(target, duration)
}
