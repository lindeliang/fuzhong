<?php
$z[0]=Array("global","",480,506);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",548,575);
$z[1][4]=array();
$z[1][4]['name']="cfg_keywords";
$z[2]=Array("global","",616,646);
$z[2][4]=array();
$z[2][4]['name']="cfg_description";
$z[3]=Array("include","",1153,1192);
$z[3][4]=array();
$z[3][4]['filename']="header_m.htm";
$z[4]=Array("myppt","\r\n			 <li class=\"mod_01\"><a href=\"\"><img src=\"[field:pic/]\"></a></li>\r\n			 ",1273,1384);
$z[4][4]=array();
$z[4][4]['typeid']="3";
$z[5]=Array("channelartlist","\r\n	<div class=\"products\">\r\n        <div class=\"products_title\">\r\n            {dede:field name='typename'/}\r\n            <a href=\"list.php?tid={dede:field name='id'/}\">更多>></a>\r\n        </div>\r\n        <ul>\r\n                        {dede:arclist row='4' titlelen='50' orderby='pubdate'}\r\n						<li>\r\n                <a href=\"view.php?aid=[field:id/]\" title=\"[field:title/]\" class=\"img\">\r\n                   <img src=\"[field:litpic/]\" alt=\"[field:title/]\" />\r\n                   <h3>[field:title/]</h3>\r\n                </a>\r\n            </li>\r\n			{/dede:arclist}\r\n                    </ul>\r\n    </div>\r\n	",2846,3511);
$z[5][4]=array();
$z[5][4]['typeid']="15,15";
$z[6]=Array("channelartlist","\r\n	<div class=\"products\">\r\n        <div class=\"products_title\">\r\n            {dede:field name='typename'/}\r\n            <a href=\"list.php?tid={dede:field name='id'/}\">更多>></a>\r\n        </div>\r\n        <div class=\"contentss clearfix\">\r\n            <div class=\"jiantu\">\r\n                <p><img src=\"skin/images/1539652332680311.png\" title=\"1539652332680311.png\" alt=\"1495016063747548.png\"/></p>\r\n            </div>\r\n            <div class=\"gsnr\">\r\n                {dede:sql sql='Select content from dede_arctype where id=2'} \r\n        [field:content  function='cn_substr(html2text(@me),1500)'/]\r\n        {/dede:sql}\r\n            </div>\r\n        </div>\r\n    </div>\r\n	",4830,5555);
$z[6][4]=array();
$z[6][4]['typeid']="2,2";
$z[7]=Array("channelartlist","\r\n    <div class=\"products\">\r\n        <div class=\"products_title\">\r\n            {dede:field name='typename'/}\r\n            <a href=\"list.php?tid={dede:field name='id'/}\">更多>></a>\r\n        </div>\r\n        <ul>\r\n                        {dede:arclist row='4' titlelen='50' orderby='pubdate'}\r\n						<li>\r\n                <a href=\"view.php?aid=[field:id/]\" title=\"[field:title/]\" class=\"img\">\r\n                   <img src=\"[field:litpic/]\" alt=\"[field:title/]\" />\r\n                   <h3>[field:title/]</h3>\r\n                </a>\r\n            </li>\r\n			{/dede:arclist}\r\n                    </ul>\r\n    </div>\r\n	",5561,6227);
$z[7][4]=array();
$z[7][4]['typeid']="5,5";
$z[8]=Array("type","[field:typename /]",6308,6361);
$z[8][4]=array();
$z[8][4]['typeid']="45";
$z[9]=Array("type","<span>[field:typename /]</span>[field:typenameen /]",6537,6623);
$z[9][4]=array();
$z[9][4]['typeid']="45";
$z[10]=Array("arclist","\r\n												<li>\r\n                            <a href=\"\" class=\"img\">\r\n                                <img border=\"0\" src=\"[field:litpic/]\" title=\"\" alt=\"\"/>\r\n                            </a>\r\n                        </li>\r\n						",6795,7110);
$z[10][4]=array();
$z[10][4]['typeid']="45";
$z[10][4]['row']="10";
$z[10][4]['titlelen']="50";
$z[10][4]['orderby']="pubdate";
$z[11]=Array("channelartlist","\r\n	<div class=\"newsx\">\r\n        <div class=\"products_title\">\r\n            {dede:field name='typename'/}\r\n            <a href=\"list.php?tid={dede:field name='id'/}\">更多>></a>\r\n        </div>\r\n        <ul class=\"news-listx\">\r\n                        {dede:arclist row='6' titlelen='50' orderby='pubdate'}\r\n						<li>\r\n                <a href=\"view.php?aid=[field:id/]\" title=\"[field:title/]\">\r\n                        [field:title/]\r\n                        <span>[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</span>\r\n                </a>\r\n\r\n            </li>\r\n			{/dede:arclist}\r\n                    </ul>\r\n    </div>\r\n	",7661,8343);
$z[11][4]=array();
$z[11][4]['typeid']="12,12";
$z[12]=Array("type","<a href=\"list.php?tid=[field:id /]\">更多>></a>",8484,8567);
$z[12][4]=array();
$z[12][4]['typeid']="22";
$z[13]=Array("global","",8879,8902);
$z[13][4]=array();
$z[13][4]['name']="cfg_gsmc";
$z[14]=Array("global","",9058,9080);
$z[14][4]=array();
$z[14][4]['name']="cfg_tel";
$z[15]=Array("global","",9306,9328);
$z[15][4]=array();
$z[15][4]['name']="cfg_fax";
$z[16]=Array("global","",9491,9515);
$z[16][4]=array();
$z[16][4]['name']="cfg_email";
$z[17]=Array("global","",9671,9693);
$z[17][4]=array();
$z[17][4]['name']="cfg_add";
$z[18]=Array("include","",10087,10126);
$z[18][4]=array();
$z[18][4]['filename']="footer_m.htm";

?>