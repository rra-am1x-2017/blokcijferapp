<?php
  header('Access-Control-Allow-Origin: *');
  include("connect_db.php");

  $query = "SELECT * FROM `users`";

  $result = mysqli_query($conn, $query);

  $record = mysqli_fetch_all($result, MYSQLI_ASSOC);

  echo json_encode($record);
?>  