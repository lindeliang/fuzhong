/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function ($) {
    $(function () {
        var mySwiper = new Swiper(".swiper-container", {
            loop: true, // 循环模式选项
            centeredSlides: true,
            // 如果需要分页器
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // on: {
            //     transitionEnd: function () {
            //         $(".celebrity__banner__text")
            //             .children(".celebrity__banner__text__item")
            //             .removeClass("celebrity__banner__text__item--active");
            //         $(
            //             $(".celebrity__banner__text").children(
            //                 ".celebrity__banner__text__item"
            //             )[this.activeIndex]
            //         ).addClass("celebrity__banner__text__item--active");
            //     }
            // }
        });

        var recruitSwiper = new Swiper('.swiper-container-2', {
            // effect: 'flip',
            // grabCursor: true,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true, // 循环模式选项
            navigation: {
              nextEl: '.swiper-button-next-2',
              prevEl: '.swiper-button-prev-2',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    });
})(jQuery);
