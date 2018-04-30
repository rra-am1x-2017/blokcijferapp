<?php
  if (isset($_GET["id"])) {
    
    $id = $_GET["id"];

    include("connect_db.php");

    $query = "SELECT * FROM `grades` WHERE `user_id` = '{$id}'";

    $result = mysqli_query($conn, $query);

    $record = mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode($record);
  }
?>
