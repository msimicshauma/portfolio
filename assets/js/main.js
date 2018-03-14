const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');
const menu = document.querySelector('.menu');
const landingPage = document.querySelector('.landing');

openMenu.addEventListener('click', () => {
    landingPage.style.display = 'none';
    menu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    landingPage.style.display = 'flex';
});