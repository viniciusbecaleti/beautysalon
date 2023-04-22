export function initActiveLinkOnScroll() {
  const sections = document.querySelectorAll("[data-section]")

  function activeLinkOnScroll() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      const isSectionVisible =
        checkpoint >= sectionTop && checkpoint <= sectionTop + sectionHeight

      if (isSectionVisible) {
        document
          .querySelector(`header nav a[href="#${section.dataset.section}"]`)
          .classList.add("active")
      } else {
        document
          .querySelector(`header nav a[href="#${section.dataset.section}"]`)
          .classList.remove("active")
      }
    })
  }

  activeLinkOnScroll()

  window.addEventListener("scroll", activeLinkOnScroll)
}
