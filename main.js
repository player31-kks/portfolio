'use strict'
// scroll 내릴시 
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',(event) =>{
    const sizeY=window.scrollY;
    if(sizeY>navbarHeight){
        navbar.classList.add("navbar--dark")
    }else{
        navbar.classList.remove("navbar--dark")
    }
})