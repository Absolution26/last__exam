new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

new Swiper('.team-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // breakpoints: {
    // 320: {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    // },
    // 720: {
    //     spaceBetween: 20,
    //     slidesPerView: 2,
    // },
    //     1024: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     }
    // }
});