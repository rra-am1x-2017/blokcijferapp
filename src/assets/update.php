<?php
  header('Access-Control-Allow-Origin: *');
  //header('Access-Control-Allow-Methods', 'POST, GET');
  //header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

  //$request_body = file_get_contents('php://input');
  //$data = json_decode($request_body, true);
  //var_dump($_POST);
  //echo $_POST["todoText"];
  //echo "Hoilsf"; // . $data["todoTest"];
  //echo json_encode($_POST);

  include("connect_db.php");

    
    //$query = "SELECT `residence`, `absence`, `birthday`,`grades`.`period`, `users`.`id`, `user_id`, `firstname`, `infix`, `lastname`, `photo`, CONCAT('[', GROUP_CONCAT('{ ', '\"period\"', ': ', period, ', ','\"web\"', ': ', web, ', ', '\"game\"', ': ', game, ', ', '\"slb\"', ': ', slb, ', ', '\"ned\"', ': ', ned, ', ', '\"eng\"', ': ', eng, ', ', '\"rek\"', ': ', rek, ', ', '\"proj\"', ': ', proj, ', ', '\"data\"', ': ', datab, ', ', '\"blok\"', ': \"', blok, '\" }' ORDER BY `period`), ']') AS `period` FROM `grades`, `users` WHERE `grades`.`user_id` = `users`.`id` GROUP BY `grades`.`user_id` ORDER BY `grades`.`id` ASC";
    $query = "UPDATE `grades` SET `" . $_POST["vak"] . "` = '" . $_POST["todoText"] .
             "' WHERE `grades`.`period` = " . $_POST["data"] . " AND `grades`.`user_id` = " . $_POST["rapport"] . ";";
    //echo $query;
    $result = mysqli_query($conn, $query);

    header('Content-Type: application/json');
    // header('Content-Type: text/html');
    echo json_encode($_POST);

?>