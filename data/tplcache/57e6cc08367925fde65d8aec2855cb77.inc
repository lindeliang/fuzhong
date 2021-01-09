<h3 class="homepage__secondary__title portrait__list__title"> <span>{dede:field name='typename'/}</span> </h3>
          <div class="portrait__list">
            <div class="portrait__row">
              {dede:arclist typeid='' row='15' titlelen='60' orderby='pubdate'}
			  <div class="portrait">
                <div class="img"> <img src="[field:litpic/]"> </div>
                <h6 class="portrait__title">[field:title/]</h6>
                <p class="portrait__mark">粉丝量：[field:shorttitle/]</p>
              </div>
			  {/dede:arclist}
            </div>
          </div>