<?php
require 'vendor/autoload.php';

use Intervention\Image\ImageManager;

$rootDir = realpath($_SERVER["DOCUMENT_ROOT"]);
$paletteName = $_POST['paletteFolderName'];
$asideName = $_POST['asideName'];
$path = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]";

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

$crop = json_decode($_POST['crop']);
$width = $crop->width;
$height = $crop->height;
$x = $crop->left;
$y = $crop->top;


$palette = $img->crop($width, $height, $x, $y)->resize(70, 50)->save("$rootDir/Клинкер/$paletteName/palette/palette-$asideName.png", 100, 'png');
$palette = $img->save("$rootDir/Клинкер/$paletteName/palette/palette-$asideName.webp", 100, 'webp');
$result = [
    "palette" => [
        "png" => "Клинкер/$paletteName/palette/palette-$asideName.png?" . filemtime("$rootDir/Клинкер/$paletteName/palette/palette-$asideName.png"),
        "webp" => "$path/Клинкер/$paletteName/palette/palette-$asideName.webp"
    ],

];
echo json_encode($result);
