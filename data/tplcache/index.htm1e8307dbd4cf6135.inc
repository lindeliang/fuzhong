<?php
$z[0]=Array("global","",205,231);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",317,344);
$z[1][4]=array();
$z[1][4]['name']="cfg_keywords";
$z[2]=Array("global","",384,414);
$z[2][4]=array();
$z[2][4]['name']="cfg_description";
$z[3]=Array("include","",979,1014);
$z[3][4]=array();
$z[3][4]['filename']="head.htm";
$z[4]=Array("myppt","\r\n		<li><a><img src=\"[field:pic/]\" alt=\"[field:title/]\"/></a></li>\r\n		",1082,1188);
$z[4][4]=array();
$z[4][4]['typeid']="2";
$z[5]=Array("channelartlist","\r\n<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"col-xs-12 col-sm-12 col-md-12 about_us\">\r\n			<div class=\"col-xs-12 col-sm-6 col-md-6 \" data-move-y=\"-40px\">\r\n				<h3 class=\"about_h3\">{dede:field name='typenameen'/}</h3>\r\n				<p class=\"about_p\">{dede:field name='seotitle'/}</p>\r\n				<div class=\"about_content\">\r\n					 {dede:sql sql='Select content from dede_arctype where id=1'} \r\n        [field:content  function='cn_substr(html2text(@me),550)'/]\r\n        {/dede:sql}...\r\n				</div>\r\n				<a href=\"{dede:field name='typeurl'/}\" class=\"about_btn\">了解更多</a>\r\n			</div>\r\n			<div class=\"col-xs-12 col-sm-6 col-md-6 js_about_right\" data-move-y=\"40px\">\r\n				<video class=\"about_video\" poster=\"\" controls>\r\n					<source src=\"/skin/images/video.mp4\" type=\"video/mp4\">\r\n				</video>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",1419,2307);
$z[5][4]=array();
$z[5][4]['typeid']="1,1";
$z[6]=Array("type","\r\n					<div class=\"col-xs-6 col-sm-2 col-md-3 product_img\" data-move-y=\"50px\">\r\n						<div class=\"process_col\">\r\n							<a href=\"[field:typelink /]\">\r\n							<img src=\"/skin/images/ico1.png\" class=\"opacity_img\" alt=\"[field:typename /]\">\r\n							</a>\r\n							<p class=\"product_title\">\r\n								<a href=\"[field:typelink /]\" title=\"[field:typename /]\">[field:typename /]</a>\r\n							</p>\r\n						</div>\r\n					</div>\r\n					",2471,2923);
$z[6][4]=array();
$z[6][4]['typeid']="1";
$z[7]=Array("type","\r\n					<div class=\"col-xs-6 col-sm-2 col-md-3 product_img\" data-move-y=\"50px\">\r\n						<div class=\"process_col\">\r\n							<a href=\"[field:typelink /]\">\r\n							<img src=\"/skin/images/ico2.png\" class=\"opacity_img\" alt=\"[field:typename /]\">\r\n							</a>\r\n							<p class=\"product_title\">\r\n								<a href=\"[field:typelink /]\" title=\"[field:typename /]\">[field:typename /]</a>\r\n							</p>\r\n						</div>\r\n					</div>\r\n					",2930,3383);
$z[7][4]=array();
$z[7][4]['typeid']="45";
$z[8]=Array("type","\r\n					<div class=\"col-xs-6 col-sm-2 col-md-3 product_img\" data-move-y=\"50px\">\r\n						<div class=\"process_col\">\r\n							<a href=\"[field:typelink /]\">\r\n							<img src=\"/skin/images/ico3.png\" class=\"opacity_img\" alt=\"[field:typename /]\">\r\n							</a>\r\n							<p class=\"product_title\">\r\n								<a href=\"[field:typelink /]\" title=\"[field:typename /]\">[field:typename /]</a>\r\n							</p>\r\n						</div>\r\n					</div>\r\n					",3390,3843);
$z[8][4]=array();
$z[8][4]['typeid']="33";
$z[9]=Array("type","\r\n					<div class=\"col-xs-6 col-sm-2 col-md-3 product_img\" data-move-y=\"50px\">\r\n						<div class=\"process_col\">\r\n							<a href=\"[field:typelink /]\">\r\n							<img src=\"/skin/images/ico4.png\" class=\"opacity_img\" alt=\"[field:typename /]\">\r\n							</a>\r\n							<p class=\"product_title\">\r\n								<a href=\"[field:typelink /]\" title=\"[field:typename /]\">[field:typename /]</a>\r\n							</p>\r\n						</div>\r\n					</div>\r\n					",3850,4303);
$z[9][4]=array();
$z[9][4]['typeid']="49";
$z[10]=Array("channelartlist","\r\n<div class=\"sevices_bg\" style=\"background-image: url(/skin/images/1556358453.jpg); background-size: cover;background-attachment: fixed;background-color: #1A1A1A;\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n				<div class=\"case_head\" data-move-y=\"-40px\">\r\n					<h2>{dede:field name='typename'/}</h2>\r\n					<span></span>\r\n					<p>{dede:field name='description'/}</p>\r\n				</div>\r\n				<div class=\"case_list\">\r\n					{dede:arclist typeid='' row='6' titlelen='50' orderby='pubdate'}\r\n					<div class=\"col-sm-4 col-md-4 col-mm-6 product_img\" data-move-y=\"50px\">\r\n						<div class=\"page_img\" data-move-y=\"50px\">\r\n							<a href=\"[field:arcurl/]\">\r\n							<img src=\"[field:litpic/]\" class=\"opacity_img\" alt=\"[field:title/]\">\r\n							</a>\r\n							<p class=\"product_title\">\r\n								<a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a>\r\n							</p>\r\n						</div>\r\n					</div>\r\n					{/dede:arclist}\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",4355,5424);
$z[10][4]=array();
$z[10][4]['typeid']="49,49";
$z[11]=Array("channelartlist","\r\n<div class=\"case_bg\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n				<div class=\"product_head\" data-move-y=\"-40px\">\r\n					<h2>{dede:field name='typename'/}</h2>\r\n					<span></span>\r\n					<p>{dede:field name='description'/}</p>\r\n				</div>\r\n				<div class=\"case_list\">\r\n					{dede:arclist typeid='' row='4' titlelen='50' orderby='pubdate'}\r\n					<div class=\"col-sm-4 col-md-3 col-mm-6 case_img\" data-move-y=\"50px\">\r\n						<a href=\"[field:arcurl/]\"><img src=\"[field:litpic/]\" class=\"opacity_img\" alt=\"[field:title/]\"/></a>\r\n						<p class=\"case_title\">\r\n							<a href=\"[field:arcurl/]\">[field:title/]</a>\r\n						</p>\r\n					</div>\r\n					{/dede:arclist}\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",5426,6243);
$z[11][4]=array();
$z[11][4]['typeid']="16,16";
$z[12]=Array("channelartlist","\r\n<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n			<div class=\"news_head\" data-move-y=\"-40px\">\r\n				<h2>{dede:field name='typename'/}</h2>\r\n				<span></span>\r\n				<p>{dede:field name='description'/}</p>\r\n			</div>\r\n			<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n				<div class=\"col-sm-12 col-md-5 news_img\" data-move-x=\"-100px\" style=\"background-image: url(/skin/images/news.jpg);\">\r\n				</div>\r\n				<div class=\"col-xs-12 col-sm-12 col-md-7 news_text\" data-move-y=\"150px\">\r\n					<ul class=\"news_index\">\r\n						{dede:arclist typeid='' row='4' titlelen='60' orderby='pubdate'}\r\n						<li>\r\n						<span>\r\n						<strong>[field:pubdate function=\"MyDate('d',@me)\"/]</strong>\r\n						<i>[field:pubdate function=\"MyDate('Y-m',@me)\"/]</i>\r\n						</span>\r\n						<a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a><br>\r\n						<em>[field:description function=\"cn_substr(@me,120)\"/]...</em>\r\n						</li>\r\n						{/dede:arclist}\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",7871,8968);
$z[12][4]=array();
$z[12][4]['typeid']="12,12";
$z[13]=Array("type","\r\n				<h2>[field:typename /]</h2>\r\n				<span></span>\r\n				<p>[field:description /]</p>\r\n				",10592,10719);
$z[13][4]=array();
$z[13][4]['typeid']="46";
$z[14]=Array("arclist","\r\n			<div class=\"col-xs-4 col-md-3 col-mm-6 cooperation_img\" data-move-y=\"50px\">\r\n				<a title=\"[field:title/]\">\r\n				<img src=\"[field:litpic/]\" class=\"img-thumbnail\" alt=\"[field:title/]\">\r\n				</a>\r\n			</div>\r\n			",10735,11030);
$z[14][4]=array();
$z[14][4]['typeid']="46";
$z[14][4]['row']="8";
$z[14][4]['titlelen']="50";
$z[14][4]['orderby']="pubdate";
$z[15]=Array("global","",12405,12429);
$z[15][4]=array();
$z[15][4]['name']="cfg_phone";
$z[16]=Array("include","",12899,12936);
$z[16][4]=array();
$z[16][4]['filename']="footer.htm";

?>