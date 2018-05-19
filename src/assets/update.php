<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  
  include("connect_db.php");    
    
  $query = "UPDATE `grades` 
            SET `" . $_POST["vak"] . "` = '" . $_POST["newGrade"] . "'
            WHERE `grades`.`period` = " . $_POST["period"] . " 
            AND `grades`.`user_id` = " . $_POST["id"] . ";";

  $result = mysqli_query($conn, $query);  
  echo json_encode($_POST);

?>