<?php 







?>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <title>矩阵直播带货商家后台</title>

    <link href="css/app.17cab2ce.css" rel="stylesheet">
    <link href="css/chunk-vendors.b87475b8.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/Login.1441c05b.css">
    <link rel="stylesheet" href="css/font_891649_1if9e0vzqfh.css">

    <script src="js/jquery@3.4.min.js"></script>
    <!-- <link rel="icon" href="./favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    

    <script src="js/echarts@4.7.min.js"></script>
 
  
   
    <style type="text/css"> .__cov-progress { opacity: 1; z-index: 999999; } </style>
   
    <script charset="utf-8" src="js/Login.a92fa403.js"></script>
    <script type="text/javascript" src="https://jic.talkingdata.com/app/h5/v1/websdk/js/sdk_release.js"></script> -->
</head>

<body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
    <div class="login-wrapper">
        <div class="login-view">
            <div class="login-main">
                <div class="before-login">
                    <div class="login-logo"></div>
                    <div class="tip_text">请选择您的登录身份</div>
                    <div class="choice_options opction1" onclick="login_page(0);">
                        <p class="left_info1"></p>
                        <p class="center_info center_info_1">
                            <span class="span1">我是店主</span>
                            <span class="span2">矩阵商家账号登录</span>
                        </p>
                        <p class="right_info"></p>
                    </div>

                    <div class="choice_options opction2" onclick="login_page(1);">
                        <p class="left_info2"></p>
                        <p class="center_info center_info_2">
                            <span class="span1">我是员工</span>
                            <span class="span2">矩阵小店子账号登录</span>
                        </p>
                        <p class="right_info"></p>
                    </div>
                </div>

                <div class="login-content" style="display:none"></div>

            </div>
        </div>
    </div>
</body>


<script>
    // $(function () {
    //     var isChecked = document.getElementById("checkbox").checked;
    //     //alert(isChecked);
    // });

    var code = '';


    function login_page(params) {
        $(".login-content").html("");
        var content_html = '<div class="code_pic">扫码登录更便捷</div>';
            content_html += '<div class="qr_pic" onclick="qr_code_scan();"></div>';
            content_html += '<div class="login-logo"></div>';
            content_html += '<div class="input-group">';
            content_html += '<div class="el-input el-input-group el-input-group--prepend">';
            content_html += '<div class="el-input-group__prepend"><i class="iconfont icon-username"></i></div>';
            content_html += '<input type="text" autocomplete="off" id="username" placeholder="请输入手机号" class="el-input__inner">';
            content_html += '</div>';
            content_html += '</div>';
            content_html += '<div class="input-group">';
            content_html += '<div class="el-input el-input-group el-input-group--prepend">';
            content_html += '<div class="el-input-group__prepend"><i class="iconfont icon-password"></i></div>';
            content_html += '<input type="password" autocomplete="off" id="password" placeholder="请输入密码" class="el-input__inner">';
            content_html += '</div>';
            content_html += '</div>';
            content_html += '<div class="forget-passwd" onclick="forget_password();"> 忘记密码 ? </div>';
            content_html += '<div class="check-protocol">';
            content_html += '<label class="el-checkbox" id="checkbox">';
            content_html += '<span class="el-checkbox__input">';
            //content_html += '<span class="el-checkbox__inner"></span>';
            content_html += '<input type="checkbox" name="vehicle" value="" id="checkbox" />';
            content_html += '</span><span class="el-checkbox__label"> 勾选即表示同意<a href="../agreement/user_agreement.html" target="_blank" class="el-link el-link--primary is-underline">';
            content_html += '<span class="el-link--inner">用户协议</span><!----></a>和<a href="../agreement/privacy_policy.html" target="_blank" class="el-link el-link--primary is-underline">';
            content_html += '<span class="el-link--inner">隐私协议</span><!----></a><!----></span></label></div><div class="input-group submit-btn">';
            content_html += '<button type="button" class="el-button el-button--primary" id="login" onclick="store_login();">';
            content_html += '<!----><!----><span> 登录 </span>';
            content_html += '</button>';
            content_html += '</div>';

            $(".login-main .login-content").html(content_html);
            $(".before-login").hide();
            $(".login-content").show();
    }


    function qr_code_scan(params) {
        $(".login-content").html("");
        var content_html ='<div class="psw_text">密码登录</div>';
            content_html +='<div class="psw_pic" onclick="login_page();"></div>';
            content_html +='<div class="login-logo"></div>';
            content_html +='<div class="check-protocol">';
            content_html +='<label class="el-checkbox">';
            //content_html +='<span class="el-checkbox__input"><span class="el-checkbox__inner"></span>';
            content_html += '<input type="checkbox" name="vehicle" value="" id="checkbox" />';
            content_html +='</span>';
            content_html +='<span class="el-checkbox__label"> 勾选即表示同意<a href="../agreement/user_agreement.html" target="_blank" class="el-link el-link--primary is-underline">';
            content_html +='<span class="el-link--inner">用户协议</span></a>和<a href="../agreement/privacy_policy.html" target="_blank" class="el-link el-link--primary is-underline">';
            content_html +='<span class="el-link--inner">隐私协议</span></a></span>';
            content_html +='</label>';
            content_html +='</div>';
            content_html +='<div class="show_code">';
            content_html +='<div class="big_code">';
            content_html +='<img src="https://wdzg-file-online-cdn.feed.9t2.net/open_file202101121014164780000348">';
            content_html +='<div class="mask_code" style="display: none;"><i class="el-icon-refresh-right"></i><p></p>';
            content_html +='</div>';
            content_html +='</div>';
            content_html +='<div class="code_tip">请使用最新版矩阵直播带货app扫码登录</div>';

        $(".login-main .login-content").html(content_html);
        $(".before-login").hide();
        $("login-content").show();
    }

    function forget_password() {
        $(".login-content").html("");
        var content_html = '<div class="forget-password-content">';
            content_html +='<div class="login-logo"></div>';
            content_html +='<div class="step-item"><div class="input-group"><div class="el-input el-input-group el-input-group--prepend">';
            content_html +='<div class="el-input-group__prepend"><i class="iconfont icon-username"></i></div>';
            content_html +='<input type="text" autocomplete="off" id="username" placeholder="请输入手机号" class="el-input__inner">';
            content_html +='</div></div><div class="input-group" style="display: flex;">';
            content_html +='<div class="el-input"><input type="text" autocomplete="off" placeholder="短信验证码" class="el-input__inner" id="code">';
            content_html +='</div><button type="button" class="el-button btn-send-code el-button--primary" onclick="send_message();" id="msg_code">';
            content_html +='<span> 获取验证码 </span></button></div></div>';
            content_html +='<div class="check-protocol"><label class="el-checkbox">';
            //content_html +='<span class="el-checkbox__input"><span class="el-checkbox__inner"></span>';
            content_html += '<input type="checkbox" name="vehicle" value="" id="checkbox" />';
            content_html +='</span><span class="el-checkbox__label"> 勾选即表示同意<a href="../agreement/user_agreement.html" target="_blank" class="el-link el-link--primary is-underline">';
            content_html +='<span class="el-link--inner">用户协议</span><!----></a>和<a href="../agreement/privacy_policy.html" target="_blank" class="el-link el-link--primary is-underline">';
            content_html +='<span class="el-link--inner">隐私协议</span><!----></a><!----></span></label></div><div class="input-group submit-btn"><button type="button" class="el-button el-button--primary" id="next" onclick="next_step();">';
            content_html +='<span> 下一步 </span></button><!----></div><div class="back-login" onclick="login_page()"> 返回登录 </div></div>';

            $(".login-main .login-content").html(content_html);
            $(".before-login").hide();
            $("login-content").show();
    }

    function reset_password(params) {
        var content_html = '<div class="forget-password-content">';
            content_html +='<div class="login-logo"></div><!----><div class="step-item"><div class="input-group">';
            content_html +='<div class="el-input el-input-group el-input-group--prepend"><div class="el-input-group__prepend">';
            content_html +='<i class="iconfont icon-password"></i></div><input type="password" autocomplete="off" id="password" placeholder="请输入新密码" class="el-input__inner"></div></div><div class="input-group" style=""><div class="el-input el-input-group el-input-group--prepend">';
            content_html +='<div class="el-input-group__prepend"><i class="iconfont icon-password"></i></div>';
            content_html +='<input type="password" autocomplete="off" placeholder="请再次输入新密码" class="el-input__inner" id="password"></div></div>';
            content_html +='<div class="pwd-tips"> 密码要求6-16位之间，要求至少包含英文字母和数字，可以输入特殊字符 </div></div>';
            content_html +='<div class="check-protocol"><label class="el-checkbox">';
            //content_html +='<span class="el-checkbox__input"><span class="el-checkbox__inner"></span>';
            content_html += '<input type="checkbox" name="vehicle" value="" id="checkbox" />';
            content_html +='</span><span class="el-checkbox__label"> 勾选即表示同意<a href="../agreement/user_agreement.html" target="_blank" class="el-link el-link--primary is-underline">';
            content_html +='<span class="el-link--inner">用户协议</span><!----></a>和<a href="../agreement/privacy_policy.html" target="_blank" class="el-link el-link--primary is-underline">';
            content_html +='<span class="el-link--inner">隐私协议</span><!----></a><!----></span></label></div>';
            content_html +='<div class="input-group submit-btn"><!----><button type="button" class="el-button el-button--primary" id="reset">';
            content_html +='<!----><!----><span> 重置密码 </span></button></div><div class="back-login" onclick="forget_password();"> 返回上一步 </div></div>';
    }

    function check_phone_password(phones,password){
        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if(phones == ''){
            alert('手机号不能为空')
            return false;
        }else{
            if (!myreg.test(phones)) {
                alert('手机号格式不正确')
                return false;
            }else{
                //alert('手机号格式正确')
                if(password == ''){
                    alert('密码不能为空');
                    return false;
                }else{
                    return true;
                }
            }
        }
    }

    function store_login(params) {
        var phones = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var hasPhone = check_phone_password(phones,password); 
        var isCheck = $("input[type=checkbox]").is(':checked');

       
        if(hasPhone){
            if(!isCheck){
                alert("请先阅读并同意协议");
            }else{
                $.ajax({
                    type: "GET",
                    url: "../../php/check_login.php",
                    data: {phones:phones, password:password},
                    dataType: "json",
                    success: function(data){
                        
                    },
                    error: function(){}
                });
            }
        }
    }

    function send_message(params) {
        if ($(".el-input__inner").val() == '') {
            var popup_msg =  '<div role="alert" class="el-message el-message--error" style="top: 20px; z-index: 2008;" id="tel_alert">';
                popup_msg += '<i class="el-message__icon el-icon-error"></i><p class="el-message__content">手机号格式不正确</p></div>';
            $(".login-wrapper").append(popup_msg);
            setTimeout(function () {
                 $("div#tel_alert").remove();
            },3000);

            return;
        }

        var second = 59
        //$('#msg_code span').text((second) + "秒后重新发送")
        var interval = setInterval(function () {
            second--
            $('#msg_code span').text((second) + "秒后重新发送")
            if (second === -1) {
                $('#msg_code span').text("获取验证码");
                clearInterval(interval);
                code = '';
            }
        }, 1000)

        var phones = document.getElementById('username').value;
        $.ajax({
            type: "GET",
            url: "../../php/lib/EasyCaptcha/getcode.php",
            data: {phones:phones},
            dataType: "json",
            success: (res) => {
                //if (res.code === 10000 && res.data.data && res.data.data.length) {
                //if (res.msg == 1){
                //    code = res.code;
                //}
                //toastInfo("对不起，暂未查到该代理商信息，请联系矩阵官方客服核实");
            },
            error: () => {
                //toastInfo("对不起，暂未查到该代理商信息，请联系矩阵官方客服核实");
            }
        });
    }

    function next_step() {
        var phones = document.getElementById('username').value;
        var code = document.getElementById('code').value;

        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if(phones == ''){
            alert('手机号不能为空')
            //return false;
        }else{
            if (!myreg.test(phones)) {
                alert('手机号格式不正确')
                //return false;
            }else{
                var reg = /^\d{6}\b/;
                
                if(code == ''){
                    alert('验证码不能为空');
                    //return false;
                }else if(!reg.test(code)){
                    alert('请输入6位数的验证码');
                    //return false;
                //}else if(){
                    //alert('请输入6位数的验证码');
                    //return true;
                }
            }

        }


        console.log(code);

        //reset_password();
    }

</script>