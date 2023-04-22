export function initScrollReveal() {
  const scrollRevel = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
  })

  scrollRevel.reveal(
    `
    #hero .text, #hero picture,
    #about picture, #about .text,
    #services header, #services .cards,
    #testimonials header, #testimonials .swiper,
    #contact header, #contact ul,
    #footer .text, #footer ul
  `,
    {
      interval: 100,
    }
  )
}
