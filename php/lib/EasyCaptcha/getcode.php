<?php
    include 'EasyCaptcha/autoload.php';
    $easy_captcha = new \EasyCaptcha\EasyCaptcha();

    // //发送短信验证码
    // $code = $easy_captcha->getSmsCode(4, ['number']);
    // if(!empty($code)){
    //     //使用默认短信平台和模板ID
    //     $easy_captcha->sendSmsCode('13011111111', ['code'=>$code]);
        
    //     //指定短信平台和模板ID
    //     $easy_captcha->sendSmsCode('13011111112', ['code'=>$code], '1111', 'alidy');
        
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

?>