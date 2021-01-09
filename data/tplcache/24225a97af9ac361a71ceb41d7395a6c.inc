<div class="supplier">
        <div class="block__wrapper" style="background-color:white;">
          <div class="block">
            <div class="banner__list">
              <div class="banner__title">
                <h3>{dede:field name='typename'/}</h3>
              </div>
              <div class="banner__context">
                {dede:arclist typeid='' limit='0,6' titlelen='60' orderby='pubdate'}
				<div class="banner__item"> <img style="width:144px;height:39px" src="[field:litpic/]" alt="[field:title/]"> </div>
				{/dede:arclist}
              </div>
              <div class="banner__context">
                {dede:arclist typeid='' limit='6,6' titlelen='60' orderby='pubdate'}
				<div class="banner__item"> <img style="width:144px;height:39px" src="[field:litpic/]" alt="[field:title/]"> </div>
				{/dede:arclist}
              </div>
              <div class="banner__context">
                {dede:arclist typeid='' limit='12,6' titlelen='60' orderby='pubdate'}
				<div class="banner__item"> <img style="width:144px;height:39px" src="[field:litpic/]" alt="[field:title/]"> </div>
				{/dede:arclist}
              </div>
            </div>
          </div>
        </div>
      </div>