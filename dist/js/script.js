const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close");

hamburger.addEventListener('click', ()=>{
        menu.classList.add('active');
});

menuClose.addEventListener('click', ()=>{
        menu.classList.remove('active');
});

/*============raiting counter=============== */

const counters=document.querySelectorAll('.skills__skale-value');
const lines = document.querySelectorAll('.skills__skale-subskale');

counters.forEach((item,i)=> {
        lines[i].style.width = item.innerHTML;
});
