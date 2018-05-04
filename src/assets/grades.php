<?php
  // if (isset($_GET["id"])) {
    
    // $id = $_GET["id"];

    include("connect_db.php");

    $query = "SELECT `user_id`, `firstname`, `infix`, `lastname`, `photo`, CONCAT('[', GROUP_CONCAT(JSON_OBJECT('web', web, 'game', game)), ']') AS `period` 
              FROM `grades`, `users` 
              WHERE `user_id` = `users`.`id` 
              GROUP BY `user_id`";


    $result = mysqli_query($conn, $query);

    $record = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    echo json_encode($record);
  // }
?>
