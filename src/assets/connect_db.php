<?php
  // **********************login gegevens van localhost***************************
  // We gaan contact maken in de code met de mysql database
  define("SERVER_NAME", "localhost");
  define("USER_NAME", "root");
  define("PASSWORD", "");
  define("DATABASE_NAME", "am1x-ionic");
  
  // define("SERVER_NAME", "rra-am1x-2017.stateu.org");
  // define("USER_NAME", "djmthqwf_rra");
  // define("PASSWORD", "Geheim321");
  // define("DATABASE_NAME", "djmthqwf_app");
  // Met deze functie maken we contact met de mysql server
  $conn = mysqli_connect(SERVER_NAME, USER_NAME, PASSWORD, DATABASE_NAME) or die("Hoi");
  // *****************************************************************************
?>