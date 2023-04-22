export function initMenuMobile() {
  const header = document.querySelector("#header")
  const openButton = document.querySelector('[data-menu="open"]')
  const closeButton = document.querySelector('[data-menu="close"]')
  const links = document.querySelectorAll("#header nav a")

  openButton.addEventListener("click", () => {
    header.classList.add("active")
  })

  closeButton.addEventListener("click", () => {
    header.classList.remove("active")
  })

  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("active")
    })
  })
}
