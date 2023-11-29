
$(document).ready(function (event) {
    //меню-бургер
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    // Слайдер
    $('.arrows__prev').click(function (event) {
        // $('slider-block__item.item-slider.active').removeClass('active');
        $('slider-block__item.item-slider.preview').addClass('active');
        $('slider-block__item.item-slider').addClass('preview');
    });
    $('.arrows__next').click(function (event) {

    });
});

// Лайк- модальне вікно
const modal = document.querySelector(".like__modal");
function modalVisible() {
    modal.classList.add("open");
}
function modalInvisible() {
    modal.classList.remove("open");
}

// new Swiper('.slider-block', {
//     navigation: {
//         prevEl: '.arrows__prev',
//         nextEl: '.arrows__next'
//     }
// });