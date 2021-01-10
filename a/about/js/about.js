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

            on: {
                transitionEnd: function () {
                    $(".celebrity__banner__text")
                        .children(".celebrity__banner__text__item")
                        .removeClass("celebrity__banner__text__item--active");
                    $(
                        $(".celebrity__banner__text").children(
                            ".celebrity__banner__text__item"
                        )[this.activeIndex]
                    ).addClass("celebrity__banner__text__item--active");
                }
            }
        });


        var secondarySwiper = new Swiper(".about__secondary__swiper-container", {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
                el: ".about__secondary__swiper-pagination",
                clickable: true
            },
        });
        var map = new AMap.Map('map',
            {
                center: [119.991927, 30.277723],
                zoom: 15,
            }
        );
        var marker = new AMap.Marker({
            position: new AMap.LngLat(119.991927, 30.277723),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '魔筷科技',
            icon: '//img.mockuai.com/tms/2019/9/16/upload_775c7c67f56c7f84784c134c5d43a3dd.png',
            offset: new AMap.Pixel(-18, -46)
        });
        map.add(marker);

        // modal 控制
        $(".homepage__mask").click(function () {
            $(this).css("display", "none");
            $("#image-open-immediately").css("display", "none");
            $("#image-in-supplier").css("display", "none");
            $("#image-download-product").css("display", "none");
        });
        $(".btn-open-immediately").click(function () {
            $(".homepage__mask").css("display", "flex");
            $("#image-open-immediately").css("display", "flex");
        });
        $(".btn-in-supplier").click(function () {
            $(".homepage__mask").css("display", "flex");
            $("#image-in-supplier").css("display", "flex");
        });
        $(".btn-download-product").click(function () {
            $(".homepage__mask").css("display", "flex");
            $("#image-download-product").css("display", "flex");
        });

        function scrolling(to) {
            let from = document.querySelector(".index-page").scrollTop,
                part = (to - from) / 100,
                index = 1;

            let scrollInterval = setInterval(function () {
                document.querySelector(".index-page").scrollTop = from + index * part;
                index++;
                if (index > 100) {
                    clearInterval(scrollInterval);
                }
            }, 5);
        }

        document.querySelector("#point-introduce").addEventListener("click", function () {
            scrolling(528);
        });
        document.querySelector("#point-founder").addEventListener("click", function () {
            scrolling(980);
        });
        document.querySelector("#point-team").addEventListener("click", function () {
            scrolling(2529);
        });
        document.querySelector("#point-development").addEventListener("click", function () {
            scrolling(3174);
        });
        document.querySelector("#point-honor").addEventListener("click", function () {
            scrolling(4442);
        });
        document.querySelector(".index-page").addEventListener("scroll", function () {
            $(document.querySelector("#point-introduce")).removeClass("active");
            $(document.querySelector("#point-founder")).removeClass("active");
            $(document.querySelector("#point-team")).removeClass("active");
            $(document.querySelector("#point-development")).removeClass("active");
            $(document.querySelector("#point-honor")).removeClass("active");
            if (this.scrollTop >= 528) {
                document.querySelector(".nav-bar").style.top = '10px';
                document.querySelector(".nav-bar").style.position = 'fixed';
                if (this.scrollTop < 980) {
                    $(document.querySelector("#point-introduce")).addClass("active");
                } else if (this.scrollTop < 2529) {
                    $(document.querySelector("#point-founder")).addClass("active");
                } else if (this.scrollTop < 3174) {
                    $(document.querySelector("#point-team")).addClass("active");
                } else if (this.scrollTop < 4442) {
                    $(document.querySelector("#point-development")).addClass("active");
                } else {
                    $(document.querySelector("#point-honor")).addClass("active");
                }
            } else {
                $(document.querySelector("#point-introduce")).addClass("active");
                document.querySelector(".nav-bar").style.top = '';
                document.querySelector(".nav-bar").style.position = 'absolute';
            }
        });


        certifySwiper = new Swiper('.swiper-container-team', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 3,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination-team',
                clickable: true
            },
            on: {
                progress: function (progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        console.log(progress, slideProgress)
                        modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.5 + 1;
                        }
                        translate = slideProgress * modify * 9 + 'px';
                        scale = 1 - Math.abs(slideProgress) / 7.5;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
                }

            }



        })
    });
})(jQuery);
