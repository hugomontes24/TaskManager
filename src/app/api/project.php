<?php
require_once 'init.php';

if($_GET['action'] == 'readAll'){
    $sql = "SELECT * FROM project";

    $result = $pdo->prepare($sql);
    $result -> execute();

    $data = $result -> fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data); // echo envoie le data (tableau) en format json
}