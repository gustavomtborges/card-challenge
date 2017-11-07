<?php
header("content-type: application/json");

$arrayJane = array (rand(1, 10), rand(1, 10), rand(1, 10));
$arrayJohn = array (rand(1, 10), rand(1, 10), rand(1, 10));

$object = (object) [
  'jane' => $arrayJane,
  'john' => $arrayJohn
];

echo json_encode($object);
?>