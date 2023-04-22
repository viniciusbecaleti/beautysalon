export function initSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      834: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  })
}
