<?php
require_once 'init.php';

if($_GET['action'] == 'readAll'){
    $sql = "SELECT * FROM project";

    $result = $pdo->prepare($sql);
    $result -> execute();

    $data = $result -> fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data); // echo envoie le data (tableau) en format json
}

if($_GET['action'] == 'insert'){

    // l'objet passé est transformé en un tableau obj => ''
    $data = [];
    parse_str(file_get_contents("php://input"), $data);
    $keyOut = new \stdClass;
    // l'objet est la clé du tableau
    foreach($data as $key => $value){
        $keyOut = $key;
    }
    // il n'est pas dans un bon format
    $data1 = json_decode($keyOut);

    $sql = "INSERT INTO project 
            ( name, dateStart, teamSize )
            VALUES (:name, :dateStart, :teamSize )
            ";

    $result = $pdo->prepare($sql);
    $result -> execute([
                    ':name' => $data1->name,
                    ':dateStart' => $data1->dateStart,
                    ':teamSize' => $data1->teamSize
                ]);
    $lastInsert = $pdo->lastInsertId();

    $data1->id = $lastInsert;

    echo json_encode($data1); // echo envoie le data (tableau) en format json
}