<?php
$z[0]=Array("global","",202,228);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",314,341);
$z[1][4]=array();
$z[1][4]['name']="cfg_keywords";
$z[2]=Array("global","",381,411);
$z[2][4]=array();
$z[2][4]['name']="cfg_description";
$z[3]=Array("include","",971,1006);
$z[3][4]=array();
$z[3][4]['filename']="head.htm";
$z[4]=Array("myppt","\r\n		<li><a><img src=\"[field:pic/]\" alt=\"[field:title/]\"/></a></li>\r\n		",1074,1180);
$z[4][4]=array();
$z[4][4]['typeid']="2";
$z[5]=Array("arclist","\r\n							<li><a href='[field:arcurl/]'>[field:title/]</a></li>\r\n							",1660,1812);
$z[5][4]=array();
$z[5][4]['typeid']="12";
$z[5][4]['row']="5";
$z[5][4]['titlelen']="60";
$z[5][4]['orderby']="pubdate";
$z[6]=Array("channelartlist","\r\n<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n			<div class=\"product_index\">\r\n				<div class=\"product_head\" data-move-y=\"-40px\">\r\n					<h2>{dede:field name='typename'/}</h2>\r\n					<p>{dede:field name='typenameen'/}</p>\r\n				</div>\r\n				<div class=\"product_list\">\r\n					{dede:arclist typeid='' row='6' titlelen='50' orderby='pubdate'}\r\n					<div class=\"col-sm-4 col-md-4 col-mm-6 product_img\">\r\n						<a href=\"[field:arcurl/]\">\r\n						<img src=\"[field:litpic/]\" class=\"img-thumbnail\" alt=\"[field:title/]\">\r\n						</a>\r\n						<p class=\"product_title\">\r\n							<a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a>\r\n						</p>\r\n					</div>\r\n					{/dede:arclist}\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",2404,3234);
$z[6][4]=array();
$z[6][4]['typeid']="5,5";
$z[7]=Array("channelartlist","\r\n<div class=\"about_serv\" style=\"background-image: url(/skin/images/about.jpg); background-size: cover;\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-xs-12 col-sm-6 col-md-6 left col\">\r\n			</div>\r\n			<div class=\"col-xs-12 col-sm-6 col-md-6 about_right\">\r\n				<h2>{dede:field name='typename'/}</h2>\r\n				<p>{dede:field name='typenameen'/}</p>\r\n				<p class=\"about_contents\">\r\n					 {dede:sql sql='Select content from dede_arctype where id=1'} \r\n        [field:content  function='cn_substr(html2text(@me),550)'/]\r\n        {/dede:sql}...\r\n				</p>\r\n				<p>\r\n				</p>\r\n				<a href=\"{dede:field name='typeurl'/}\" class=\"about_btn\">MORE</a>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",3236,3989);
$z[7][4]=array();
$z[7][4]['typeid']="1,1";
$z[8]=Array("channelartlist","\r\n<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n			<div class=\"product_index\">\r\n				<div class=\"product_head\" data-move-y=\"-40px\">\r\n					<h2>{dede:field name='typename'/}</h2>\r\n					<p>{dede:field name='typenameen'/}</p>\r\n				</div>\r\n				<div class=\"product_list\">\r\n					{dede:arclist typeid='' row='4' titlelen='50' orderby='pubdate'}\r\n					<div class=\"col-sm-4 col-md-3 col-mm-6 product_img\">\r\n						<a href=\"[field:arcurl/]\"><img src=\"[field:litpic/]\" class=\"img-thumbnail\" alt=\"[field:title/]\"/></a>\r\n						<p class=\"product_title\">\r\n							<a href=\"[field:arcurl/]\">[field:title/]</a>\r\n						</p>\r\n					</div>\r\n					{/dede:arclist}\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",3991,4785);
$z[8][4]=array();
$z[8][4]['typeid']="16,16";
$z[9]=Array("channelartlist","\r\n<div class=\"news_bg\" style=\"background:#F5F5F5;\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n				<div class=\"product_index\">\r\n					<div class=\"product_head\" data-move-y=\"-40px\">\r\n						<h2>{dede:field name='typename'/}</h2>\r\n						<p>{dede:field name='typenameen'/}</p>\r\n					</div>\r\n					<div class=\"news_listd\" data-move-y=\"-40px\">\r\n						<div class=\"col-xs-12 col-sm-6 col-md-6 \">\r\n							<ul class=\"news_index\">\r\n								{dede:arclist typeid='' row='4' titlelen='60' orderby='pubdate'}\r\n								<li>\r\n								<span>\r\n								<strong>[field:pubdate function=\"MyDate('d',@me)\"/]</strong>\r\n								<i>[field:pubdate function=\"MyDate('Y-m',@me)\"/]</i>\r\n								</span>\r\n								<a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a><br>\r\n								<em>[field:description function=\"cn_substr(@me,100)\"/]...</em>\r\n								</li>\r\n								{/dede:arclist}\r\n							</ul>\r\n						</div>\r\n						<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n							<div class=\"col-sm-12 col-md-5 news_img\" data-move-x=\"-100px\" style=\"background-image: url(/skin/images/news.jpg);\">\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",4787,6057);
$z[9][4]=array();
$z[9][4]['typeid']="12,12";
$z[10]=Array("type","\r\n					<h2>[field:typename /]</h2>\r\n					<p>[field:typenameen /]</p>\r\n					",6240,6350);
$z[10][4]=array();
$z[10][4]['typeid']="46";
$z[11]=Array("arclist","\r\n					<div class=\"col-xs-4 col-md-3 col-mm-6 cooperation_img\" data-move-y=\"50px\">\r\n						<a title=\"[field:title/]\">\r\n						<img src=\"[field:litpic/]\" class=\"img-thumbnail\" alt=\"[field:title/]\">\r\n						</a>\r\n					</div>\r\n					",6401,6708);
$z[11][4]=array();
$z[11][4]['typeid']="46";
$z[11][4]['row']="8";
$z[11][4]['titlelen']="50";
$z[11][4]['orderby']="pubdate";
$z[12]=Array("include","",6762,6799);
$z[12][4]=array();
$z[12][4]['filename']="footer.htm";

?>