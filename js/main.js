var swiper = new Swiper(".mySwiper", {
    slidesPerView: 11,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
});

const rewards = document.querySelectorAll('.reward')

rewards.forEach((reward, i) => {
    if (i < rewards.length / 2) {
        reward.style.transform = `scaleY(${0.6 + ((i + 1) * 0.08)}) translateX(${30 - (i * 5)}px)`
    } else {
        reward.style.transform = `scaleY(${1.32 - ((i - 1) * 0.08)}) translateX(${(4 - i) * 5}px)`
        reward.style.zIndex = 4 - i
    }
})

let tabHeader = document.querySelector(".feature__tabs_header");
let tabIndicator = document.querySelector(".feature__tabs_indicator div");
let tabBody = document.querySelector(".feature__tabs_body");


let tabsPane = tabHeader.querySelectorAll(".feature__tab_switch");

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBody.querySelectorAll(".feature__tab")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 6) * ${i})`;
    });
}