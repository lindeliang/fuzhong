<?php 



    $mysql_server_name = '49.232.161.104'; //改成自己的mysql数据库服务器

    $mysql_username = 'juzhen'; //改成自己的mysql数据库用户名

    $mysql_password = 'G7dMNM8mirEr8YMA'; //改成自己的mysql数据库密码

    $mysql_database = 'juzhen'; //改成自己的mysql数据库名

    $conn=mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database); //连接数据库

    //连接数据库错误提示
    if (mysqli_connect_errno($conn)) { 
        die("连接 MySQL 失败: " . mysqli_connect_error()); 
    }


    mysqli_query($conn,"set names utf8"); //数据库编码格式



?>