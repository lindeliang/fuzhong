<?php
$z[0]=Array("global","",566,592);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",633,660);
$z[1][4]=array();
$z[1][4]['name']="cfg_keywords";
$z[2]=Array("global","",700,730);
$z[2][4]=array();
$z[2][4]['name']="cfg_description";
$z[3]=Array("include","",894,929);
$z[3][4]=array();
$z[3][4]['filename']="head.htm";
$z[4]=Array("hotwords","",1083,1131);
$z[4][4]=array();
$z[4][4]['num']="6";
$z[4][4]['subday']="365";
$z[4][4]['maxlength']="16";
$z[5]=Array("channelartlist","<li>\r\n					<span class=\"iconfont icon-jiantou\"></span><a href=\"{dede:field name='typeurl'/}\" title=\"{dede:field name='typename'/}\">{dede:field name='typename'/}</a>\r\n					<ul class=\"subCategory\">\r\n						{dede:arclist row='8'}\r\n						<li><a href=\"[field:arcurl/]\"><span class=\"iconfont icon-jiantou\"></span>[field:title/]</a></li>\r\n						{/dede:arclist}\r\n                    </ul>\r\n                </li>",2496,2964);
$z[5][4]=array();
$z[5][4]['typeid']="1";
$z[5][4]['type']="son";
$z[6]=Array("arclist","\r\n			<li>\r\n				<a href=\"[field:arcurl/]\"  title=\"[field:title/]\">\r\n				<div class=\"pic\"><img src=\"[field:litpic/]\" alt=\"[field:title/]\"></div>\r\n				<p>[field:title/]</p>\r\n				</a>\r\n			</li>\r\n			",3121,3395);
$z[6][4]=array();
$z[6][4]['typeid']="1";
$z[6][4]['row']="6";
$z[6][4]['titlelen']="50";
$z[6][4]['orderby']="pubdate";
$z[7]=Array("global","",3622,3644);
$z[7][4]=array();
$z[7][4]['name']="cfg_tel";
$z[8]=Array("global","",3802,3823);
$z[8][4]=array();
$z[8][4]['name']="cfg_qq";
$z[9]=Array("global","",3899,3921);
$z[9][4]=array();
$z[9][4]['name']="cfg_tel";
$z[10]=Array("arclist","\r\n		<li>\r\n			<a href=\"[field:arcurl/]\"  title=\"[field:title/]\">\r\n            <div class=\"pic\"><img src=\"[field:litpic/]\" alt=\"[field:title/]\"></div>\r\n            <p>[field:title/]</p>\r\n            </a>\r\n		</li>\r\n		",8395,8689);
$z[10][4]=array();
$z[10][4]['typeid']="2";
$z[10][4]['row']="6";
$z[10][4]['titlelen']="50";
$z[10][4]['orderby']="pubdate";
$z[11]=Array("channelartlist","\r\n  <div class=\"row-a7\">\r\n    <div class=\"wp\">\r\n      <h3>消防实业</h3>\r\n      <h3>务实-创新-追求卓越</h3>\r\n        <div class=\"pic wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".1s\"><img src=\"{dede:field name='typeimg'/}\" alt=\"{dede:field name='typename'/}\"></div>\r\n        <div class=\"txt wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".1s\">\r\n			<p style=\"white-space: normal;\">　  {dede:sql sql='Select content from dede_arctype where id=16'} \r\n        [field:content  function='cn_substr(html2text(@me),570)'/]\r\n        {/dede:sql}...</p>\r\n		</div>\r\n       <a class=\"more wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".1s\" href=\"{dede:field name='typeurl'/}\">了解更多</a>\r\n    </div>\r\n  </div>\r\n  ",8728,9524);
$z[11][4]=array();
$z[11][4]['typeid']="16,16";
$z[12]=Array("type","<li class=\"on\">[field:typename /]</li>",9631,9704);
$z[12][4]=array();
$z[12][4]['typeid']="17";
$z[13]=Array("type","<li>[field:typename /]</li>",9714,9776);
$z[13][4]=array();
$z[13][4]['typeid']="18";
$z[14]=Array("arclist","\r\n		   <li><a href=\"[field:arcurl/]\"  title=\"[field:title/]\"><img src=\"[field:litpic/]\" alt=\"[field:title/]\"></a></li>\r\n		   ",9864,10070);
$z[14][4]=array();
$z[14][4]['typeid']="17";
$z[14][4]['row']="6";
$z[14][4]['titlelen']="60";
$z[14][4]['orderby']="pubdate";
$z[15]=Array("arclist","\r\n		   <li><a href=\"[field:arcurl/]\"  title=\"[field:title/]\"><img src=\"[field:litpic/]\" alt=\"[field:title/]\"></a></li>\r\n		   ",10171,10377);
$z[15][4]=array();
$z[15][4]['typeid']="18";
$z[15][4]['row']="6";
$z[15][4]['titlelen']="60";
$z[15][4]['orderby']="pubdate";
$z[16]=Array("channelartlist","\r\n  <div class=\"row-a9-mob wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".1s\">\r\n    <div class=\"wp\">\r\n      <div class=\"g-tit\">\r\n        <h3>{dede:field name='typename'/}</h3>\r\n        <p><span>{dede:field name='description'/}</span></p>\r\n      </div>\r\n      <ul class=\"ul-mobNews\">\r\n        {dede:arclist typeid='' row='5' titlelen='60' orderby='pubdate'}\r\n		<li><a href=\"[field:arcurl/]\"  title=\"[field:title/]\"><span>[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</span>[field:title/]</a></li>\r\n		{/dede:arclist}\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  ",10432,11050);
$z[16][4]=array();
$z[16][4]['typeid']="3,3";
$z[17]=Array("channelartlist","\r\n	  <div class=\"col-l wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".1s\">\r\n        <div class=\"g-tit-2\">\r\n          <a href=\"{dede:field name='typeurl'/}\" class=\"more\">更多+</a>\r\n          <span>{dede:field name='typename'/}</span><em>{dede:field name='typenameen'/}</em> </div>\r\n        <div class=\"pic\"><img src=\"{dede:field name='typeimg'/}\" alt=\"{dede:field name='typename'/}\"></div>\r\n        <div class=\"myscroll\">\r\n          <ul class=\"ul-news\">\r\n            {dede:arclist typeid='' row='10' titlelen='60' orderby='pubdate'}\r\n			<li><a href=\"[field:arcurl/]\"  title=\"[field:title/]\"><span>【[field:typename/]】</span>[field:title/]</a></li>\r\n			{/dede:arclist}\r\n          </ul>\r\n        </div>\r\n      </div>\r\n	  ",11104,11892);
$z[17][4]=array();
$z[17][4]['typeid']="13,13";
$z[18]=Array("channelartlist","\r\n	  <div class=\"col-m wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".1s\">\r\n        <div class=\"g-tit-2\">\r\n          <a href=\"{dede:field name='typeurl'/}\" class=\"more\">更多+</a>\r\n          <span>{dede:field name='typename'/}</span><em>{dede:field name='typenameen'/}</em> </div>\r\n        <div class=\"pic\"><img src=\"{dede:field name='typeimg'/}\" alt=\"{dede:field name='typename'/}\"></div>\r\n        <div class=\"myscroll\">\r\n          <ul class=\"ul-news\">\r\n            {dede:arclist typeid='' row='10' titlelen='60' orderby='pubdate'}\r\n			<li><a href=\"[field:arcurl/]\"  title=\"[field:title/]\"><span>【[field:typename/]】</span>[field:title/]</a></li>\r\n			{/dede:arclist}\r\n          </ul>\r\n        </div>\r\n      </div>\r\n	  ",11897,12685);
$z[18][4]=array();
$z[18][4]['typeid']="14,14";
$z[19]=Array("channelartlist","\r\n	  <div class=\"col-r wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".1s\">\r\n        <div class=\"g-tit-2\">\r\n          <a href=\"{dede:field name='typeimg'/}\" class=\"more\">更多+</a>\r\n          <span>{dede:field name='typename'/}</span><em>{dede:field name='typenameen'/}</em> </div>\r\n        <ul class=\"ul-ask\">\r\n			{dede:arclist typeid='' row='4' titlelen='60' orderby='pubdate'}\r\n			<li>\r\n              <h5><span>问</span>：[field:title/]</h5>\r\n              <p><span>答：</span>[field:description function=\"cn_substr(@me,300)\"/]... </p>\r\n            </li>\r\n			{/dede:arclist}\r\n        </ul>\r\n      </div>\r\n	  ",12690,13370);
$z[19][4]=array();
$z[19][4]['typeid']="14,14";
$z[20]=Array("flink","[field:link /] ",15533,15608);
$z[20][4]=array();
$z[20][4]['titlelen']="80";
$z[20][4]['row']="24";
$z[20][4]['type']="text";
$z[21]=Array("include","",15647,15684);
$z[21][4]=array();
$z[21][4]['filename']="footer.htm";

?>