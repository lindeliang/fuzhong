<?php

/*include 'config/database.php';
//载入ucpass类
require_once('lib/Ucpaas.class.php');

//初始化必填
//填写在开发者控制台首页上的Account Sid
$options['accountsid']='e65355c34631e91ad2849410039f18d8';
//填写在开发者控制台首页上的Auth Token
$options['token']='cb07ca16387dcca6290198023344a1c9';

//初始化 $options必填
$ucpass = new Ucpaas($options);

$appid = "aff4b2d39cf147a1bb2070c8b4dda639";	//应用的ID，可在开发者控制台内的短信产品下查看
$templateid = "583099";    //可在后台短信产品→选择接入的应用→短信模板-模板ID，查看该模板ID

$code = rand(100000,999999);//多个参数使用英文逗号隔开（如：param=“a,b,c”），如为参数则留空;随机生成验证码
$mobile =  $_GET['phones'];
$uid = "";


$sql = "INSERT INTO jz_mobile_code (code) VALUES ('$code')";

//70字内（含70字）计一条，超过70字，按67字/条计费，超过长度短信平台将会自动分割为多条发送。分割后的多条短信将按照具体占用条数计费。

$data = json_decode($ucpass->SendSms($appid,$templateid,$code,$mobile,$uid));


if($data->code != 000000){
    $success =  [
        'msg' =>  0
    ];
}

$success =  [
    'msg' =>  1
];


header('Content-Type:application/json');
    
echo json_encode($success);*/




//include '/lib/EasyCaptcha/autoload.php';
//$easy_captcha = new \EasyCaptcha\EasyCaptcha();

// //发送短信验证码
// $code = $easy_captcha->getSmsCode(4, ['number']);
// if(!empty($code)){
//     //使用默认短信平台和模板ID
//     //$easy_captcha->sendSmsCode('13011111111', ['code'=>$code]);
    
//     //指定短信平台和模板ID
//     $easy_captcha->sendSmsCode('18825046648', ['code'=>$code], '229019', 'juhe');
    
//     //设置授权信息
//     $alidy_access = [
//         'accessKeyId' => 'xxx',
//         'accessKeySecret' => 'yyy',
//         'signature'=>'aaa'
//     ];
//     $easy_captcha->setSmsAccess('alidy',$alidy_access);
//     $easy_captcha->sendSmsCode('13011111113', ['code'=>$code], '1111', 'alidy');

//     $juhe_access = [
//         'key' => 'xxx',
//     ];
//     $easy_captcha->setSmsAccess('juhe',$juhe_access);
//     $easy_captcha->sendSmsCode('13011111114', ['code'=>$code], '1111', 'juhe');
// }

// //校验短信验证码
// $verify_res = $easy_captcha->verifySmsCode('13011111111', 'xxxx');
// if($verify_res){
//     //your logic
// }else{
//     echo $easy_captcha->getError();
//     exit;
// }




