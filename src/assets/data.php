<?php
  if (isset($_GET["id"])) {
    $id = $_GET["id"];
    echo '
    { 
      "blok1": [{ "vak": "WEB", "cijfer": "' . $id .'"},
               { "vak": "GAME", "cijfer": "3,4"},
               { "vak": "SLB", "cijfer": "5,6"},
               { "vak": "NED", "cijfer":"7,8"},
               { "vak": "ENG", "cijfer": "8,9"},
               { "vak": "REK", "cijfer": "9,0"},
               { "vak": "PROJ", "cijfer": "1,2"},
               { "vak": "DATA", "cijfer": "3,4"},
               { "vak": "BLOK", "cijfer": "5,6"}],
      "blok2": [{ "vak": "WEB", "cijfer": "4,3"},
               { "vak": "GAME", "cijfer": "5,4"},
               { "vak": "SLB", "cijfer": "6,6"},
               { "vak": "NED", "cijfer":"7,8"},
               { "vak": "ENG", "cijfer": "2,9"},
               { "vak": "REK", "cijfer": "5,0"},
               { "vak": "PROJ", "cijfer": "9,2"},
               { "vak": "DATA", "cijfer": "2,4"},
               { "vak": "BLOK", "cijfer": "6,6"}],
      "blok3": [{ "vak": "WEB", "cijfer": "9,3"},
               { "vak": "GAME", "cijfer": "2,4"},
               { "vak": "SLB", "cijfer": "2,6"},
               { "vak": "NED", "cijfer":"8,8"},
               { "vak": "ENG", "cijfer": "3,9"},
               { "vak": "REK", "cijfer": "8,0"},
               { "vak": "PROJ", "cijfer": "4,2"},
               { "vak": "DATA", "cijfer": "7,4"},
               { "vak": "BLOK", "cijfer": "2,6"}],
      "blok4": [{ "vak": "WEB", "cijfer": "8,3"},
               { "vak": "GAME", "cijfer": "5,4"},
               { "vak": "SLB", "cijfer": "7,6"},
               { "vak": "NED", "cijfer":"6,8"},
               { "vak": "ENG", "cijfer": "7,9"},
               { "vak": "REK", "cijfer": "5,0"},
               { "vak": "PROJ", "cijfer": "8,2"},
               { "vak": "DATA", "cijfer": "6,4"},
               { "vak": "BLOK", "cijfer": "3,6"}]
   
   }';
  }
?>
