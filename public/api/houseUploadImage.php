<?php
require 'vendor/autoload.php';

use Intervention\Image\ImageManager;


$rootDir = realpath($_SERVER["DOCUMENT_ROOT"]);
$paletteName = $_POST['paletteFolderName'];
$fileName = $_POST['houseName'];

if (!is_dir("$rootDir/Клинкер/$paletteName/")) {
    mkdir("$rootDir/Клинкер/$paletteName/");
}
if (!is_dir("$rootDir/Клинкер/$paletteName/aside")) {
    mkdir("$rootDir/Клинкер/$paletteName/aside");
}
if (!is_dir("$rootDir/Клинкер/$paletteName/palette")) {
    mkdir("$rootDir/Клинкер/$paletteName/palette");
}

$manager = new ImageManager(['driver' => 'imagick']);
$img = $manager->make($_FILES['image']["tmp_name"]);
$jpg = $img->resize(1920, 1280)->crop(1920, 1181, 0, 99)->save("$rootDir/Клинкер/$paletteName/$fileName.jpg", 80, 'jpg');
$webp = $img->save("$rootDir/Клинкер/$paletteName/$fileName.webp", 80, 'webp');
$result = ["house" => [
    'jpg' => (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]/Клинкер/$paletteName/$fileName.jpg?" . filemtime("$rootDir/Клинкер/$paletteName/$fileName.jpg"),
    'webp' => (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]/Клинкер/$paletteName/$fileName.webp"
]];
echo json_encode($result);
