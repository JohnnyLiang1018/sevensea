<?php
header("Access-Control-Allow-Origin: *");
$json = file_get_contents("php://input");
$_GET = json_decode($json,true);

if($_GET){
    $data = file(./data/contact.txt);
    $array = explode(" ",$data);
    echo $array
}

?>