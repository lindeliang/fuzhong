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
$z[5]=Array("arclist","\r\n				<div class=\"col-sm-4 col-md-4 col-mm-6 product_img\" data-move-y=\"50px\">\r\n					<a href=\"[field:arcurl/]\">\r\n						<img src=\"[field:litpic/]\" class=\"opacity_img\" alt=\"[field:title/]\">\r\n					</a>\r\n					<p class=\"product_title\">\r\n						<a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a>\r\n					</p>\r\n				</div>\r\n				",2837,3259);
$z[5][4]=array();
$z[5][4]['typeid']="5";
$z[5][4]['row']="3";
$z[5][4]['flag']="a";
$z[5][4]['titlelen']="50";
$z[5][4]['orderby']="pubdate";
$z[6]=Array("channel","\r\n						<li><a href='[field:typelink/]'>[field:typename/]</a></li>\r\n						",3783,3911);
$z[6][4]=array();
$z[6][4]['typeid']="5";
$z[6][4]['noself']="yes";
$z[7]=Array("arclist","\r\n					<div class=\"col-sm-4 col-md-4 col-mm-6 product_img\" data-move-y=\"50px\">\r\n						<a href=\"[field:arcurl/]\">\r\n						<img src=\"[field:litpic/]\" class=\"product_img\" alt=\"[field:title/]\">\r\n						</a>\r\n						<p class=\"product_title\">\r\n							<a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a>\r\n						</p>\r\n					</div>\r\n					",3980,4401);
$z[7][4]=array();
$z[7][4]['typeid']="5";
$z[7][4]['row']="6";
$z[7][4]['titlelen']="50";
$z[7][4]['orderby']="pubdate";
$z[8]=Array("channelartlist","\r\n<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"product_head\" data-move-y=\"-40px\">\r\n			<h2>{dede:field name='typename'/}</h2>\r\n			<p>{dede:field name='description'/}</p>\r\n		</div>\r\n		<div class=\"col-xs-12 col-sm-3 col-md-3\">\r\n			<div class=\"left_nav\" data-move-y=\"-30px\">\r\n				<div class=\"left_nav_bg\">\r\n					<ul class=\"left_nav_ul\" id=\"firstpane\">\r\n						{dede:channel typeid='5' noself='yes' }\r\n						<li><a class=\"biglink\" href='[field:typelink/]'>[field:typename/]</a></li>\r\n						{/dede:channel}						\r\n					</ul>\r\n					<div class=\"left_nav_tel\">{dede:global.cfg_tel/}</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"col-xs-12 col-sm-9 col-md-9\">\r\n			<div class=\"product_list\">\r\n				{dede:arclist typeid='' row='6' titlelen='50' orderby='pubdate'}\r\n				<div class=\"col-sm-4 col-md-4 col-mm-6 case_img\" data-move-y=\"50px\">\r\n					<a href=\"[field:arcurl/]\"><img src=\"[field:litpic/]\" class=\"opacity_img\" alt=\"[field:title/]\"/></a>\r\n					<p class=\"case_title\">\r\n						<a href=\"[field:arcurl/]\">[field:title/]</a>\r\n					</p>\r\n				</div>\r\n				{/dede:arclist}\r\n\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",4455,5631);
$z[8][4]=array();
$z[8][4]['typeid']="16,16";
$z[9]=Array("channelartlist","\r\n<div class=\"news_bg\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n				<div class=\"product_head\" data-move-y=\"-40px\">\r\n					<h2>{dede:field name='typename'/}</h2>\r\n					<p>{dede:field name='description'/}</p>\r\n				</div>\r\n				<ul class=\"news_index\" data-move-y=\"200px\">\r\n					{dede:arclist typeid='' row='6' titlelen='50' orderby='pubdate'}\r\n					<div class=\"col-sm-6 col-md-6 news_col\">\r\n						<li><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a><span class='news_time2'><strong>[field:pubdate function=\"MyDate('d',@me)\"/]</strong><i>[field:pubdate function=\"MyDate('Y-m',@me)\"/]</i></span><br>\r\n						<em class='news_time2'> [field:description function=\"cn_substr(@me,120)\"/]...</em></li>\r\n					</div>\r\n					{/dede:arclist}\r\n				</ul>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n",5750,6656);
$z[9][4]=array();
$z[9][4]['typeid']="12,12";
$z[10]=Array("type","\r\n			<div class=\"product_head\" data-move-y=\"-40px\">\r\n				<h2>[field:typename /]</h2>\r\n				<p>[field:description /]</p>\r\n			</div>\r\n			<img src=\"[field:typeimg /]\" style=\"max-width:100%;\"/>\r\n			",6753,6981);
$z[10][4]=array();
$z[10][4]['typeid']="46";
$z[11]=Array("include","",7328,7365);
$z[11][4]=array();
$z[11][4]['filename']="footer.htm";

?>