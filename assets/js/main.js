const btnHamburguer = document.querySelector(".nav__hamburguer")
const navMenu = document.querySelector(".nav__menu")
const navLink = document.querySelectorAll(".nav__link")

btnHamburguer.addEventListener("click", () => {
    btnHamburguer.classList.toggle("active")
    navMenu.classList.toggle("active")
})

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        btnHamburguer.classList.remove("active")
        navMenu.classList.remove("active")
    })
})