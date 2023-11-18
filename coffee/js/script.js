"use strict"

document.addEventListener('click', documentClick)

function documentClick(e) {
    const targetItem = e.target;
    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}

new Swiper('.feedback-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 50,
    slidesPerGroup: 1,
    centeredSlides: true,
});






