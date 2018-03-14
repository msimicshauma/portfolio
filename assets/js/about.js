const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');

openMenu.addEventListener('click', () => {
    about.style.display = 'none';
    menu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    about.style.display = 'flex';
});