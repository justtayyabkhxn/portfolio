const scr=ScrollReveal({
    distance:'35px',
    duration:2400,
    reset:true
});
scr.reveal('.main-img',{delay:210,origin:'left'});
scr.reveal('.main-text h1',{delay:310,origin:'top'});
scr.reveal('.main-text h4',{delay:410,origin:'right'});
scr.reveal('.social',{delay:210,origin:'bottom'});

scr.reveal('.row',{delay:510,origin:'left'});
scr.reveal('.button',{delay:610,origin:'top'});
scr.reveal('.center',{delay:710,origin:'right'});

scr.reveal('.portfolio',{delay:810,origin:'top'});
scr.reveal('.skills',{delay:610,origin:'bottom'});
scr.reveal('.connect',{delay:610,origin:'bottom'});

let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menu.addEventListener("click",function(){
    navbar.classList.toggle("active");
});
window.onscroll =() => {
    navbar.classList.remove("acive");
}

