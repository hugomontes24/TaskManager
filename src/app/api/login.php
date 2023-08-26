<?php
include_once "init.php";

if($_GET['action'] == "auth"){

    $data = [];
    parse_str(file_get_contents("php://input"), $data);
    $keyOut = new \stdClass;
    // l'objet est la clé du tableau
    foreach($data as $key => $value){
        $keyOut = $key;
    }
    // il n'est pas dans un bon format
    $data1 = json_decode($keyOut);
    
    // verifier le password et userName 
    // retourner user


    echo json_encode($data1); // echo envoie le data (tableau) en format json

}