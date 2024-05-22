<?php



$rootDir = realpath($_SERVER["DOCUMENT_ROOT"]);


if (!is_dir("$rootDir/assets/presentations/")) {
    mkdir("$rootDir/assets/presentations/");
}

$path = "$rootDir/assets/presentations/";

$info = pathinfo($_FILES['file']['name']);
$ext = $info['extension']; 
$newname = "presentation.".$ext; 


$target = $path . $newname;
move_uploaded_file( $_FILES['file']['tmp_name'], $target);




$result = ["download" => ""];
echo json_encode($result);
