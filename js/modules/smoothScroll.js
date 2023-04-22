export function initSmoothScroll() {
  const links = document.querySelectorAll("#header nav a")

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault()

      const href = event.currentTarget.getAttribute("href")
      const section = document.querySelector(href)

      window.scrollTo({
        top: section.offsetTop - 72,
        behavior: "smooth",
      })
    })
  })
}
