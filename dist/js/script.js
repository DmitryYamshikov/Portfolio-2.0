const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close");

hamburger.addEventListener('click', ()=>{
        menu.classList.add('active');
});

menuClose.addEventListener('click', ()=>{
        menu.classList.remove('active');
});