const hamburgerButton = document.querySelector('.hamburger-button')
const navMenu = document.querySelector('.nav-menu')

hamburgerButton.addEventListener('click', ()=> {
    toggleMenu()
})

function toggleMenu() {
    isMenuOpen = false

    if (isMenuOpen === true) {
        hamburgerButton.classList.add('active')
        hamburgerButton.classList.remove('inactive')
        isMenuOpen = true
        console.log('this works')
    } else {
        hamburgerButton.classList.add('inactive')
        hamburgerButton.classList.remove('active')
        isMenuOpen = false
    }

}