// Abre e fecha o menu quando clicar no ícone hamburger e X
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
   element.addEventListener("click", () => {
      nav.classList.toggle("show")
   })
}

// Quando clicar em um link, fecha o menu
const links = document.querySelectorAll(".menu a")

for (const link of links) {
   link.addEventListener("click", () => {
      nav.classList.remove("show")
   })
}

// Muda o header da página quando der scroll
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
   if (window.scrollY >= navHeight) {
      header.classList.add("scroll")
   } else {
      header.classList.remove("scroll")
   }
}

// Carrossel depoimentos
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
      el: ".swiper-pagination"
   },
   mousewheel: true,
   keyboard: true,
   breakpoints: {
      767: {
         slidesPerView: 2,
         setWrapperSize: true
      }
   }
});

//ScrollReveal, mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
   origin: "top",
   distance: "30px",
   duration: 700,
   reset: true
})

scrollReveal.reveal(`
   #home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact header, #contact .links,
   #footer .brand, #footer .social
`, {interval: 100})

//Botão voltar para o topo
const backToTopButton = document.querySelector("#back-to-top")

function backToTop() {
   if (window.scrollY >= 560) {
      backToTopButton.classList.add("show")
   } else {
      backToTopButton.classList.remove("show")
   }
}

// Link ativo conforme seção visível
const sections = document.querySelectorAll("main section[id]")

function activateMenuAtCurrentSection() {
   const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

   for (const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")
      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if (checkpointStart && checkpointEnd) {
         document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add("active")
      } else {
         document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove("active")
      }
   }
}

// Quando rolar a página
window.addEventListener("scroll", () => {
   changeHeaderWhenScroll()
   backToTop()
   activateMenuAtCurrentSection()
})