const ham = document.getElementById("hamburger");
const nav = document.getElementById("navbar-links");
const navTop = document.getElementById("navbar");

ham.addEventListener("click", ()=>{
    nav.classList.toggle("display");
    navTop.classList.toggle("bgWhite");
    document.body.classList.toggle("scrollLock");
})