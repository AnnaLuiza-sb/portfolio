const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const overlayMenu = document.getElementById('overlay-menu');
const btn = document.getElementById('btnTop');



btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});

overlayMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});


// Rola suavemente para o topo
btn.addEventListener('click', function () {
window.scrollTo({ top: 0, behavior: 'smooth' });
btn.classList.add('mostrar');
});


// Mostra/esconde conforme a rolagem
window.addEventListener('scroll', function () {
if (window.scrollY > 100) {
btn.classList.add('mostrar');
} else {
btn.classList.remove('mostrar');
}
});