const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');
const menu = document.querySelector('.menu');
const projects = document.querySelector('.projects');

openMenu.addEventListener('click', () => {
    projects.style.display = 'none';
    menu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    projects.style.display = 'flex';
});