/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function($){
    $(function () {
        $(".nav-right").click(function() {
            ysf("config", {
              groupid: "397564209",
              robotShuntSwitch: 1,
              success: function() {
                ysf.open({
                  templateId: "6182954"
                });
              }
            });
          });
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
            scrolling(501);
        });
        document.querySelector("#point-founder").addEventListener("click", function () {
            scrolling(1340);
        });
        document.querySelector("#point-team").addEventListener("click", function () {
            scrolling(2160);
        });
        document.querySelector("#point-development").addEventListener("click", function () {
            scrolling(4250);
        });
        document.querySelector(".index-page").addEventListener("scroll", function () {
           
            $(document.querySelector("#point-introduce")).removeClass("active");
            $(document.querySelector("#point-founder")).removeClass("active");
            $(document.querySelector("#point-team")).removeClass("active");
            $(document.querySelector("#point-development")).removeClass("active");
            if (this.scrollTop >= 528) {
                document.querySelector(".nav-bar").style.top = '10px';
                document.querySelector(".nav-bar").style.position = 'fixed';
                if (this.scrollTop <1340 ) {
                    $(document.querySelector("#point-introduce")).addClass("active");
                } else if (this.scrollTop < 2160 ) {
                    $(document.querySelector("#point-founder")).addClass("active");
                } else if (this.scrollTop < 4250 ) {
                    $(document.querySelector("#point-team")).addClass("active");
                } else {
                    $(document.querySelector("#point-development")).addClass("active");
                } 
            } else {
                $(document.querySelector("#point-introduce")).addClass("active");
                document.querySelector(".nav-bar").style.top = '';
                document.querySelector(".nav-bar").style.position = 'absolute';
            }
            if (this.scrollTop >= 528) {
                // document.querySelector(".nav-right").style.top = '10px';
                // document.querySelector(".nav-right").style.position = 'fixed';
            } else {
                $(document.querySelector("#point-introduce")).addClass("active");
                // document.querySelector(".nav-right").style.top = '';
                // document.querySelector(".nav-right").style.position = 'absolute';
            }
        });
    });
})(jQuery)
