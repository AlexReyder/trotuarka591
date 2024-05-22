<?php
$data = $_POST['data'];
$rootDir = realpath($_SERVER["DOCUMENT_ROOT"]);

$str = file_get_contents($rootDir . '/assets/data/design.json');
$arr = json_decode($str, true,);
$newData = json_decode($data, true);
array_push($arr, $newData);
$str = json_encode($arr, JSON_UNESCAPED_UNICODE);
$file = file_put_contents($rootDir . '/assets/data/design.json', $str);
