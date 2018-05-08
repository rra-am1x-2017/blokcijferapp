<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
  
    include("connect_db.php");

    
    $query = "SELECT `residence`, `absence`, `birthday`,`grades`.`period`, `users`.`id`, `user_id`, `firstname`, `infix`, `lastname`, `photo`, CONCAT('[', GROUP_CONCAT('{ ', '\"period\"', ': ', period, ', ','\"web\"', ': ', web, ', ', '\"game\"', ': ', game, ', ', '\"slb\"', ': ', slb, ', ', '\"ned\"', ': ', ned, ', ', '\"eng\"', ': ', eng, ', ', '\"rek\"', ': ', rek, ', ', '\"proj\"', ': ', proj, ', ', '\"data\"', ': ', datab, ', ', '\"blok\"', ': \"', blok, '\" }' ORDER BY `period`), ']') AS `period` FROM `grades`, `users` WHERE `grades`.`user_id` = `users`.`id` GROUP BY `grades`.`user_id` ORDER BY `grades`.`id` ASC";

    
    $result = mysqli_query($conn, $query);

    $record = mysqli_fetch_all($result, MYSQLI_ASSOC);
    for ($i = 0; $i < sizeof($record); $i++) {
      $record[$i]["period"] = json_decode($record[$i]["period"]);
    }
    
    
    // header('Content-Type: text/html');
    echo json_encode( $record);
?>
