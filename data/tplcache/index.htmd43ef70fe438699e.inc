<?php
$z[0]=Array("global","",218,244);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",288,318);
$z[1][4]=array();
$z[1][4]['name']="cfg_description";
$z[2]=Array("global","",355,382);
$z[2][4]=array();
$z[2][4]['name']="cfg_keywords";
$z[3]=Array("include","",1366,1401);
$z[3][4]=array();
$z[3][4]['filename']="head.htm";
$z[4]=Array("myppt","\r\n		  <div class=\"swiper-slide\" style=\"background-image:url('[field:pic/]')\">\r\n            <div class=\"swiper-slide__container\">\r\n              <h1 class=\"swiper-slide__container__title\"></h1>\r\n              <h3 class=\"swiper-slide__container__content\"></h3>\r\n              <div class=\"btn-group\">\r\n                <button class=\"btn btn-large btn-immediatelyOpen btn-open-immediately\">立即开通</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n		  ",1556,2065);
$z[4][4]=array();
$z[4][4]['typeid']="2";
$z[5]=Array("global","",2262,2288);
$z[5][4]=array();
$z[5][4]['name']="cfg_webname";
$z[6]=Array("channelartlist","\r\n	<div class=\"online-celebrity\" id=\"shangjia\">\r\n      <div class=\"block__wrapper\" style=\"background-color:white;\">\r\n        <div class=\"block\">\r\n          <h2 class=\"homepage__title celebrity__banner__title\"> {dede:field name='description'/} </h2>\r\n          <div class=\"celebrity__banner\">\r\n            <div class=\"celebrity__banner__image\">\r\n              <div class=\"secondary__swiper-container\">\r\n                <div class=\"swiper-wrapper\">\r\n                  {dede:arclist typeid='' row='3' titlelen='60' orderby='pubdate'}\r\n				  <div class=\"swiper-slide\"> <img src=\"[field:litpic/]\" alt=\"\"> </div>\r\n				  {/dede:arclist}\r\n                </div>\r\n                <!-- 如果需要分页器 -->\r\n                <div class=\"secondary__swiper-pagination\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"celebrity__banner__text\">\r\n              {dede:arclist typeid='' row='3' titlelen='60' orderby='pubdate'}\r\n			  <div class=\"celebrity__banner__text__item\">\r\n                <h3 class=\"celebrity__banner__text__item__title\">[field:title/]</h3>\r\n                <p class=\"celebrity__banner__text__item__content\"> [field:description function=\"cn_substr(@me,300)\"/] </p>\r\n              </div>\r\n			  {/dede:arclist}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n	",2455,3838);
$z[6][4]=array();
$z[6][4]['typeid']="1,1";
$z[7]=Array("channelartlist","\r\n	  <div class=\"block__wrapper\" style=\"background-color:white;\">\r\n        <div class=\"block\">\r\n          <h2 class=\"homepage__title business__banner__title\"> {dede:field name='description'/} </h2>\r\n          <div class=\"business__banner\">\r\n            <div class=\"business__banner__text\">\r\n              {dede:arclist typeid='' row='4' titlelen='60' orderby='pubdate'}\r\n			  <div class=\"business__banner__text__item[field:global runphp='yes' name=autoindex]\r\n                      \$a=\"\";\r\n                        \$b=\" business__banner__text__item--active\";\r\n                        if ((@me%1)==0 && @me!=1)  @me=\$a;\r\n                        else  @me=\$b;\r\n                        [/field:global]\">\r\n                <h3 class=\"business__banner__text__item__title\"> [field:title/] </h3>\r\n                <p class=\"business__banner__text__item__content\"> [field:description function=\"cn_substr(@me,300)\"/]</p>\r\n              </div>\r\n			  {/dede:arclist}\r\n            </div>\r\n            <div class=\"business__banner__image\" style=\"margin-top: 80px;\">\r\n              <div class=\"business__swiper-container\">\r\n                <div class=\"swiper-wrapper\">\r\n                  {dede:arclist typeid='' row='4' titlelen='60' orderby='pubdate'}\r\n				  <div class=\"swiper-slide\"> <img style=\"width: 400px;height: 390px;\" src=\"[field:litpic/]\" alt=\"\"> </div>\r\n				  {/dede:arclist}\r\n                </div>\r\n                <!-- 如果需要分页器 -->\r\n                <div class=\"business__swiper-pagination\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n	  ",3903,5561);
$z[7][4]=array();
$z[7][4]['typeid']="3,3";
$z[8]=Array("type","[field:description /]",5714,5769);
$z[8][4]=array();
$z[8][4]['typeid']="4";
$z[9]=Array("channelartlist","\r\n			<div class=\"good__wrapper\">\r\n              <div class=\"good\">\r\n                <div class=\"good__icon\"> <img style=\"width:30px;\" src=\"/skin/images/s{dede:global.itemindex/}_icon.png\" alt=\"\" class=\"good__icon\"> </div>\r\n                <h5 class=\"good__title\">{dede:field name='typename'/}</h5>\r\n                <div class=\"good__image\"> <img src=\"/skin/images/s{dede:global.itemindex/}.png\"\r\n                                            alt=\"\"> </div>\r\n                <div class=\"good__mask\">\r\n                  <h5 class=\"good__mask__title\">{dede:field name='typename'/}</h5>\r\n                  {dede:arclist typeid='' row='2' titlelen='60' orderby='pubdate'}\r\n				  <div class=\"good__mask__item\">\r\n                    <div class=\"good__mask__item__image\"> <img src=\"[field:litpic/]\" alt=\"\" class=\"good__mask__item__image\"> </div>\r\n                    <h6 class=\"good__mask__item__title\"> [field:title/] </h6>\r\n                    <p class=\"good__mask__item__content\"> [field:shorttitle/] </p>\r\n                  </div>\r\n				  {/dede:arclist}\r\n                </div>\r\n              </div>\r\n            </div>\r\n			",5832,7004);
$z[9][4]=array();
$z[9][4]['typeid']="4";
$z[10]=Array("channelartlist","\r\n	  <div class=\"supplier\">\r\n        <div class=\"block__wrapper\" style=\"background-color:white;\">\r\n          <div class=\"block\">\r\n            <div class=\"banner__list\">\r\n              <div class=\"banner__title\">\r\n                <h3>{dede:field name='typename'/}</h3>\r\n              </div>\r\n              <div class=\"banner__context\">\r\n                {dede:arclist typeid='' limit='0,6' titlelen='60' orderby='pubdate'}\r\n				<div class=\"banner__item\"> <img style=\"width:144px;height:39px\" src=\"[field:litpic/]\" alt=\"[field:title/]\"> </div>\r\n				{/dede:arclist}\r\n              </div>\r\n              <div class=\"banner__context\">\r\n                {dede:arclist typeid='' limit='6,6' titlelen='60' orderby='pubdate'}\r\n				<div class=\"banner__item\"> <img style=\"width:144px;height:39px\" src=\"[field:litpic/]\" alt=\"[field:title/]\"> </div>\r\n				{/dede:arclist}\r\n              </div>\r\n              <div class=\"banner__context\">\r\n                {dede:arclist typeid='' limit='12,6' titlelen='60' orderby='pubdate'}\r\n				<div class=\"banner__item\"> <img style=\"width:144px;height:39px\" src=\"[field:litpic/]\" alt=\"[field:title/]\"> </div>\r\n				{/dede:arclist}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n	  ",7311,8612);
$z[10][4]=array();
$z[10][4]['typeid']="5,5";
$z[11]=Array("channelartlist","\r\n	  <div class=\"block__wrapper\" style=\"background-color:white;\">\r\n        <div class=\"block\">\r\n          <h2 class=\"homepage__title celebrity__banner__title\"> {dede:field name='description'/} </h2>\r\n          <div class=\"celebrity__banner\">\r\n            <div class=\"celebrity__banner__image\">\r\n              <div class=\"secondary__swiper-container\">\r\n                <div class=\"swiper-wrapper\">\r\n                  {dede:arclist typeid='' row='3' titlelen='60' orderby='pubdate'}\r\n				  <div class=\"swiper-slide\"> <img src=\"[field:litpic/]\" alt=\"\"> </div>\r\n				  {/dede:arclist}\r\n                </div>\r\n                <!-- 如果需要分页器 -->\r\n                <div class=\"secondary__swiper-pagination\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"celebrity__banner__text\">\r\n              {dede:arclist typeid='' row='3' titlelen='60' orderby='pubdate'}\r\n			  <div class=\"celebrity__banner__text__item\">\r\n                <h3 class=\"celebrity__banner__text__item__title\">[field:title/]</h3>\r\n                <p class=\"celebrity__banner__text__item__content\"> [field:description function=\"cn_substr(@me,300)\"/] </p>\r\n              </div>\r\n			  {/dede:arclist}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n	  ",8682,10005);
$z[11][4]=array();
$z[11][4]['typeid']="2,2";
$z[12]=Array("channelartlist","\r\n		  <h3 class=\"homepage__secondary__title system__list__title\"> <span>{dede:field name='description'/}</span> </h3>\r\n          <div class=\"system__list\">\r\n            {dede:arclist typeid='' row='6' titlelen='60' orderby='pubdate'}\r\n			<div class=\"system__wrapper\">\r\n              <div class=\"system\">\r\n                <div style=\"background-image: url('/skin/images/wh_tx[field:global.autoindex/].png');\"\r\n                                        class=\"image\"> <img style=\"width:46px\" src=\"/skin/images/wh_tx[field:global.autoindex/]_icon.png\" alt=\"\"> </div>\r\n                <h5 class=\"system__title\">[field:title/]</h5>\r\n                <div class=\"system__mask\">\r\n                  <h6 class=\"system__mask__title\"> [field:title/] </h6>\r\n                  <p class=\"system__mask__cotnent\"> [field:description function=\"cn_substr(@me,300)\"/] </p>\r\n                  <a href=\"javascript:;\" target=\"blank\">\r\n                  <p class=\"system__mask__link\"> 了解更多 </p>\r\n                  </a>\r\n                  <button class=\"btn btn-primary system__mask__button btn-open-immediately\"> 立即开通 </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n			{/dede:arclist}\r\n          </div>\r\n		  ",10082,11365);
$z[12][4]=array();
$z[12][4]['typeid']="6,6";
$z[13]=Array("channelartlist","\r\n		  <h3 class=\"homepage__secondary__title portrait__list__title\"> <span>{dede:field name='typename'/}</span> </h3>\r\n          <div class=\"portrait__list\">\r\n            <div class=\"portrait__row\">\r\n              {dede:arclist typeid='' limit='0,5' titlelen='60' orderby='pubdate'}\r\n			  <div class=\"portrait\">\r\n                <div class=\"img\"> <img src=\"[field:litpic/]\"> </div>\r\n                <h6 class=\"portrait__title\">[field:title/]</h6>\r\n                <p class=\"portrait__mark\">粉丝量：[field:shorttitle/]</p>\r\n              </div>\r\n			  {/dede:arclist}\r\n            </div>\r\n            <div class=\"portrait__row\">\r\n              {dede:arclist typeid='' limit='5,5' titlelen='60' orderby='pubdate'}\r\n			  <div class=\"portrait\">\r\n                <div class=\"img\"> <img src=\"[field:litpic/]\"> </div>\r\n                <h6 class=\"portrait__title\">[field:title/]</h6>\r\n                <p class=\"portrait__mark\">粉丝量：[field:shorttitle/]</p>\r\n              </div>\r\n			  {/dede:arclist}\r\n            </div>\r\n          </div>\r\n		  ",11377,12479);
$z[13][4]=array();
$z[13][4]['typeid']="19,19";
$z[14]=Array("include","",13542,13579);
$z[14][4]=array();
$z[14][4]['filename']="footer.htm";

?>