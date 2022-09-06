console.log("hello world")

let currentscrollPosition = 0;
let scrollAmount = 300;


const sCont = document.querySelector(".storys-container")
const hscroll = document.querySelector(".horizontal-scroll")
const btnscrollLeft = document.querySelector("#btn-sroll-left")
const btnscrollRight = document.querySelector("#btn-sroll-right")

let maxScroll = -sCont.offsetWidth + hscroll.offsetWidth;

scrollHorizontally = (val) => {

    currentscrollPosition += (val * scrollAmount);

    console.log(currentscrollPosition)
    if (currentscrollPosition >= 0) {
        currentscrollPosition = 0
        btnscrollLeft.style.opacity = "0"
    }
    else {
        btnscrollLeft.style.opacity = "1"
    }

    if (currentscrollPosition <= maxScroll) {
        currentscrollPosition = maxScroll;
        btnscrollRight.style.opacity = "0"

    }
    else {
        btnscrollRight.style.opacity = "1"
    }
    sCont.style.left = currentscrollPosition + "px";

}