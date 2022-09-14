console.log("hello nitesh")

/* 
=====================================
-------This is a portfolio section-----
===================================== */

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.btn');
const p_img_elem = document.querySelectorAll('.img-overlay')


p_btns.addEventListener('click', (e) => {

    const p_btn_clicked = e.target;

    // console.log(p_btn_clicked)

    p_btn.forEach((cumElem) => {
        cumElem.classList.remove("p-btn-active")

        p_btn_clicked.classList.add("p-btn-active")
    })





})


// swiper image slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 1500,
    }
});



// scroll to top button

// let footerEle = document.querySelectorAll(".section-footer");
// let scrollElement = document.createElement("div");



// scrollElement.classList.add("scrollTop-style");

// scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// footerEle.after=("scrollElement");

let herosection = document.querySelector(".header");

let scrollElement = document.querySelector(".scroll-top");

let scrollTop = () => {
    herosection.scrollIntoView({ behavior:"smooth"})
}
scrollElement.addEventListener('click', scrollTop);


// number counter

// const counterNum = document.querySelector(".counter-numbers")
// const speed = 200;

// counterNum.forEach((cumElem)=>{
//     console.log(counterNum)
// })


/* 
=====================================
-------This is a ham bargar section-----
===================================== */

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
    headerElem.classList.toggle('active')
})
