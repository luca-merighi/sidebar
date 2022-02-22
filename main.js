const menuIcons = document.querySelector('.header .nav .toggle-sidebar')
const menu = document.querySelector('.header .nav .toggle-sidebar .menu-icon')
const close = document.querySelector('.header .nav .toggle-sidebar .close-icon')
const sidebar = document.querySelector('.sidebar')
const body = document.querySelector('body')

menuIcons.addEventListener('click', function() {
    menu.classList.toggle('hide')
    close.classList.toggle('hide')
    sidebar.classList.toggle('hide')
    body.classList.toggle('lock-scroll')
})


const sidebarLinks = document.querySelectorAll('.sidebar .links li a') 

sidebarLinks.forEach((result) => result.addEventListener('click', function() {
    sidebar.classList.toggle('hide')
    menu.classList.toggle('hide')
    close.classList.toggle('hide')
    body.classList.toggle('lock-scroll')
}))

 
