const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const nav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')


//Initial State of Menu

let showMenu = false
const toggleMenu = () => {
    if (!showMenu) {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        nav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))

        showMenu = true
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        nav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'))

        showMenu = false
    }
}
menuBtn.addEventListener('click', toggleMenu)



