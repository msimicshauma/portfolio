const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

openMenu.addEventListener('click', () => {
    contact.style.display = 'none';
    menu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    contact.style.display = 'flex';
});