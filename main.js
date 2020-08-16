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

//이방법은 좋지 않다 딱봐도 몰라서 하는게 티가남
//각각의 동일한 class말고 
/*
const winSize=[0,700,1400,2100,3500]
// 버튼 클릭시 그 위치로 가기
const navbarBtns = document.querySelectorAll('.navbar__item');
navbarBtns.forEach((btn,index) =>{
    btn.addEventListener('click',event=>{
        window.scrollTo(200,winSize[index]);
    })
})

//ContactMe btn
const contactBtn = document.querySelector(".Home__contact");
contactBtn.addEventListener('click',event =>{
    window.scrollTo(200,3500);
})
*/

// 다르게 해보자
// 1 메뉴를 누르면 그곳으로 가는 방법
function scrollIntoView(event){
    const postionName = event.target.dataset.link
    const postion = document.querySelector(postionName)
    postion.scrollIntoView({behavior: "smooth", block: "start", inline: "start"} );
}

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click',scrollIntoView)

//2. contactBtn을 넣기 
const contactBtn = document.querySelector(".Home__contact")
contactBtn.addEventListener('click',scrollIntoView)


//3. HOME 화면 점점 투명하게 만들기
const Home = document.querySelector(".Home__container")
const Homeheight = Home.getBoundingClientRect().height
document.addEventListener('scroll',event =>{
    const size = window.scrollY
    const opacity = 1-(size/Homeheight)
    Home.style.opacity = opacity
})