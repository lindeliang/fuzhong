<?php

    include 'config/database.php';

    $app_key = $_GET['app_key'];
    $company_name = $_GET['company_name'];

    $sql = "select company_name from jz_agency where company_name = '$company_name'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // 输出数据
        while($row = mysqli_fetch_assoc($result)) {
            $data = [
                'code' => 10000,
                'data'  => "查询成功"
            ];
        }
    }else{
        $data = [
            'code' => 10001,
            'data' =>  "查询失败"
        ];
    }

    header('Content-Type:application/json');
    
    echo json_encode($data);
?>