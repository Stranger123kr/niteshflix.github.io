/* ======================================
    This is a header section
=========================================*/

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let h_logo = document.querySelector(".h-logo");
    console.log(h_logo)
    header.classList.toggle("sticky", window.scrollY > 850);
    h_logo.classList.toggle("sticky", window.scrollY > 850);

});


/* ======================================
This is a header mobile navbar part
=========================================*/

let mob_header = document.querySelector(".header")
let mobile_nav = document.querySelector(".mobile-nav")

mobile_nav.addEventListener("click", () => {
    mob_header.classList.toggle("active")
});




/* ======================================
This is a header animation word part
=========================================*/


// this is a typing animation -----------
let typed = new Typed('.hero', {
    strings: ["Web Developer.", "Web Designer.", "And Now I'm still.", "Exploring And.", "Learning A.", " New Things (: "],
    typeSpeed: 30,
    loop: true
});



/* ======================================
This is a happy-clients section
=========================================*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay: {
        delay: 1500
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});







/* ======================================
This is a scroll-btn
=========================================*/

const TopUp = document.querySelector("#Home");
const scroll_icon = document.querySelector(".scroll-icon");


scroll_icon.addEventListener('click', function () {

    TopUp.scrollIntoView({ behavior: "smooth" })

});