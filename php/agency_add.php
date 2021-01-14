<?php
    include 'config/database.php';

    $app_key = $_POST['app_key'];
    $contact = $_POST['contact'];
    $company = $_POST['company'];
    $mobile = $_POST['mobile'];
    $company_size = $_POST['company_size'];
    $city = $_POST['city'];
    $description = $_POST['description'];

    $sql = "INSERT INTO jz_agency_apply (app_key, contact, company, mobile, company_size, city, description)
    VALUES ('$app_key','$contact','$company','$mobile','$company_size','$city','$description')";
    
    if(mysqli_query($conn, $sql)){
        $data = [
            'code' => 10000,
            'msg'  => "新记录插入成功"
        ];
    }else{
        $data = [
            'code' => 10001,
            'msg' =>  "Error: " . $sql . "<br>" . mysqli_error($conn)
        ];
    }

    header('Content-Type:application/json');
    
    echo json_encode($data);
?>