// select the elements 
const hamburgerButton = document.querySelector('.hamburger-button')
const navMenu = document.querySelector('.nav-menu-list')

// create an event listener to toggle the hamburger menu on and off by adding and removing the active class
hamburgerButton.addEventListener('click', () => {
    menuOpened()
})

function menuOpened() {
    // check if the menu contains the active class and remove it if it does. Leave it if it doesn't

    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active')
        hamburgerButton.classList.remove('active')
    } else {
        navMenu.classList.add('active')
        hamburgerButton.classList.add('active')
    }

}