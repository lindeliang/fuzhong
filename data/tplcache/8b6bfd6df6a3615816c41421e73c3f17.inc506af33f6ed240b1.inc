<?php
$z[0]=Array("field","",11,37);
$z[0][4]=array();
$z[0][4]['name']="currentstyle";
$z[1]=Array("field","",48,77);
$z[1][4]=array();
$z[1][4]['name']="typename";
$z[2]=Array("field","\r\n            global \$dsql;\r\n            \$sql = \"SELECT id From `dede_arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n            \$row = \$dsql->GetOne(\$sql);      \r\n            @me=is_array(\$row)?' href=\"javascript:\"':'';\r\n            ",92,410);
$z[2][4]=array();
$z[2][4]['name']="typeid";
$z[2][4]['runphp']="yes";
$z[3]=Array("field","",417,445);
$z[3][4]=array();
$z[3][4]['name']="typeurl";
$z[4]=Array("field","",453,482);
$z[4][4]=array();
$z[4][4]['name']="typename";
$z[5]=Array("field","",489,518);
$z[5][4]=array();
$z[5][4]['name']="typename";
$z[6]=Array("field","\r\n            global \$dsql;\r\n            \$sql = \"SELECT id From `dede_arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n            \$row = \$dsql->GetOne(\$sql);      \r\n            @me=is_array(\$row)?'\r\n					<i class=\"touch-arrow-down\"></i>\r\n					':'';\r\n            ",533,878);
$z[6][4]=array();
$z[6][4]['name']="typeid";
$z[6][4]['runphp']="yes";
$z[7]=Array("field","",882,911);
$z[7][4]=array();
$z[7][4]['name']="typename";
$z[8]=Array("field","\r\n            global \$dsql;\r\n            \$sql = \"SELECT id From `dede_arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n            \$row = \$dsql->GetOne(\$sql);      \r\n            @me=is_array(\$row)?'\r\n					<ul class=\"two\">':'';\r\n            ",926,1248);
$z[8][4]=array();
$z[8][4]['name']="typeid";
$z[8][4]['runphp']="yes";
$z[9]=Array("channel","\r\n						<li><a indepth=\"true\" href=\"[field:typelink/]\"><span>[field:typename/]</span></a></li>\r\n						",1256,1411);
$z[9][4]=array();
$z[9][4]['type']="son";
$z[9][4]['noself']="yes";
$z[10]=Array("field","",1411,1440);
$z[10][4]=array();
$z[10][4]['name']="typename";
$z[11]=Array("field","\r\n            global \$dsql;\r\n            \$sql = \"SELECT id From `dede_arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n            \$row = \$dsql->GetOne(\$sql);      \r\n            @me=is_array(\$row)?'						\r\n					</ul>':'';\r\n            ",1455,1772);
$z[11][4]=array();
$z[11][4]['name']="typeid";
$z[11][4]['runphp']="yes";

?>