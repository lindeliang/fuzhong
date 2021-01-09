<div class="good__wrapper">
              <div class="good">
                <div class="good__icon"> <img style="width:30px;" src="/skin/images/s{dede:global.itemindex/}_icon.png" alt="" class="good__icon"> </div>
                <h5 class="good__title">{dede:field name='typename'/}</h5>
                <div class="good__image"> <img src="/skin/images/s{dede:global.itemindex/}.png"
                                            alt=""> </div>
                <div class="good__mask">
                  <h5 class="good__mask__title">{dede:field name='typename'/}</h5>
                  {dede:arclist typeid='' row='2' titlelen='60' orderby='pubdate'}
				  <div class="good__mask__item">
                    <div class="good__mask__item__image"> <img src="[field:litpic/]" alt="" class="good__mask__item__image"> </div>
                    <h6 class="good__mask__item__title"> [field:title/] </h6>
                    <p class="good__mask__item__content"> [field:shorttitle/] </p>
                  </div>
				  {/dede:arclist}
                </div>
              </div>
            </div>