<div class="block__wrapper" style="background-color:white;">
        <div class="block">
          <h2 class="homepage__title business__banner__title"> {dede:field name='description'/} </h2>
          <div class="business__banner">
            <div class="business__banner__text">
              {dede:arclist typeid='' row='4' titlelen='60' orderby='pubdate'}
			  <div class="business__banner__text__item[field:global runphp='yes' name=autoindex]
                      $a="";
                        $b=" business__banner__text__item--active";
                        if ((@me%1)==0 && @me!=1)  @me=$a;
                        else  @me=$b;
                        [/field:global]">
                <h3 class="business__banner__text__item__title"> [field:title/] </h3>
                <p class="business__banner__text__item__content"> [field:description function="cn_substr(@me,300)"/]</p>
              </div>
			  {/dede:arclist}
            </div>
            <div class="business__banner__image" style="margin-top: 80px;">
              <div class="business__swiper-container">
                <div class="swiper-wrapper">
                  {dede:arclist typeid='' row='4' titlelen='60' orderby='pubdate'}
				  <div class="swiper-slide"> <img style="width: 400px;height: 390px;" src="[field:litpic/]" alt=""> </div>
				  {/dede:arclist}
                </div>
                <!-- 如果需要分页器 -->
                <div class="business__swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>