<?php
$database_host='secret';
$database_user='secret';
$database_password='secret';
$database_name='secretdb';

$connect = mysqli_connect($database_host, $database_user, $database_password, $database_name, 3306);

    if (!$connect) {
        die("Connection failed" );
        echo "<script>let alert = document.getElementById('alert'); alert.classList.add('alert__error'); alert.innerText = 'Ошибка соединения. Повторите попытку позднее'</script>";
    } 

    $sqlOne = mysqli_query($connect, "CREATE TABLE IF NOT EXISTS receipts (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, receiptnumber VARCHAR(255) NOT NULL, receiptdate VARCHAR(255) NOT NULL, receiptsum VARCHAR(255) NOT NULL);");

    if(isset($_COOKIE["user_name"]) && isset($_COOKIE["phone"]) && 
     isset($_COOKIE["receiptnumber"]) && isset($_COOKIE["receiptdate"]) && 
     isset($_COOKIE["receiptsum"])) 
    {
        $user_name = $_COOKIE["user_name"];
        $user_phone = $_COOKIE["phone"];
        $user_receiptnumber = $_COOKIE["receiptnumber"];
        $user_receiptdate = $_COOKIE["receiptdate"];
        $user_receiptsum = $_COOKIE["receiptsum"];

     $sqlTwo = mysqli_query($connect, "INSERT INTO receipts (username, phone, receiptnumber, receiptdate, receiptsum) VALUES ('$user_name', '$user_phone', '$user_receiptnumber', '$user_receiptdate', '$user_receiptsum');");
        
     if ($sqlTwo) {
         foreach($_COOKIE as $key => $value) setcookie($key, '', time() - 3600, '/');
         mysqli_close($connect);
       } else {
            echo "<script>let alert = document.getElementById('alert'); alert.classList.add('alert__error'); alert.innerText = 'Ошибка соединения. Повторите попытку позднее'</script>";
            echo '<script>console.log(Произошла ошибка: ' . mysqli_error($link) . ');</script>';
        };
    }
?> 