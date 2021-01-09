<div class="block__wrapper" style="background-color:white;">
        <div class="block">
          <h2 class="homepage__title celebrity__banner__title"> {dede:field name='description'/} </h2>
          <div class="celebrity__banner">
            <div class="celebrity__banner__image">
              <div class="secondary__swiper-container">
                <div class="swiper-wrapper">
                  {dede:arclist typeid='' row='3' titlelen='60' orderby='pubdate'}
				  <div class="swiper-slide"> <img src="[field:litpic/]" alt=""> </div>
				  {/dede:arclist}
                </div>
                <!-- 如果需要分页器 -->
                <div class="secondary__swiper-pagination"></div>
              </div>
            </div>
            <div class="celebrity__banner__text">
              {dede:arclist typeid='' row='3' titlelen='60' orderby='pubdate'}
			  <div class="celebrity__banner__text__item">
                <h3 class="celebrity__banner__text__item__title">[field:title/]</h3>
                <p class="celebrity__banner__text__item__content"> [field:description function="cn_substr(@me,300)"/] </p>
              </div>
			  {/dede:arclist}
            </div>
          </div>
        </div>
      </div>