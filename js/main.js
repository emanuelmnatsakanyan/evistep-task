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
        reward.style.transform = `scaleY(${0.6 + ((i + 1) * 0.08)}) translateX(${50 - (i * 10)}px)`
    } else {
        reward.style.transform = `scaleY(${1.32 - ((i - 1) * 0.08)}) translateX(${(4 - i) * 10}px)`
        reward.style.zIndex = 4 - i
    }
})

