/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function($){
    $(function () {
        // modal 控制
        $(".homepage__mask").click(function () {
            $(this).css("display", "none");
            $("#image-join-now").css("display", "none");
        });
        $(".btn-join-now").click(function () {
            $(".homepage__mask").css("display", "flex");
            $("#image-join-now").css("display", "flex");
        });
        
        var secondarySwiper = new Swiper(".left__swiper-container", {
            loop: true, // 循环模式选项
            centeredSlides: true,
            slidesPerView: 3,
            effect: "coverflow",
            autoplay: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 20,
                depth: 100,
                modifier: 2,
                slideShadows : false
            },
            // 如果需要分页器
            pagination: {
              el: ".left__swiper-pagination",
              clickable: true
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".secondary__swiper-button-next",
              prevEl: ".secondary__swiper-button-prev"
            }
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
       
        document.querySelector("#point-address").addEventListener("click", function () {
            scrolling(530);
        });
        document.querySelector("#operational-data").addEventListener("click", function () {
            scrolling(1132);
        });
        document.querySelector("#point-plan").addEventListener("click", function () {
            scrolling(1776);
        });
        document.querySelector("#base-advantages").addEventListener("click", function () {
            scrolling(2662);
        });
        document.querySelector("#join-right").addEventListener("click", function () {
            scrolling(3562);
        });
        document.querySelector("#base-vision").addEventListener("click", function () {
            scrolling(5008);
        });
        document.querySelector("#point-join").addEventListener("click", function () {
            scrolling(5506);
        });
      
        document.querySelector(".index-page").addEventListener("scroll", function () {
            $(document.querySelector("#point-address")).removeClass("active");
            $(document.querySelector("#operational-data")).removeClass("active");
            $(document.querySelector("#point-plan")).removeClass("active");
            $(document.querySelector("#base-advantages")).removeClass("active");
            $(document.querySelector("#join-right")).removeClass("active");
            $(document.querySelector("#base-vision")).removeClass("active");
            $(document.querySelector("#point-join")).removeClass("active");
           
            if (this.scrollTop >= 530) {
                document.querySelector(".nav-bar").style.top = '10px';
                document.querySelector(".nav-bar").style.position = 'fixed';
                if (this.scrollTop < 1132) {
                    $(document.querySelector("#point-address")).addClass("active");
                }else if (this.scrollTop < 1776) {
                    $(document.querySelector("#operational-data")).addClass("active");
                }else if (this.scrollTop < 2662) {
                    $(document.querySelector("#point-plan")).addClass("active");
                }else if (this.scrollTop < 3562) {
                    $(document.querySelector("#base-advantages")).addClass("active");
                }else if (this.scrollTop < 5008) {
                    $(document.querySelector("#join-right")).addClass("active");
                }else if (this.scrollTop < 5506) {
                    $(document.querySelector("#base-vision")).addClass("active");
                }else if (this.scrollTop < 6046) {
                    $(document.querySelector("#point-join")).addClass("active");
                }

            } else {
                $(document.querySelector("#point-address")).addClass("active");
                document.querySelector(".nav-bar").style.top = '';
                document.querySelector(".nav-bar").style.position = 'absolute';
            }
        });

    });
})(jQuery)
