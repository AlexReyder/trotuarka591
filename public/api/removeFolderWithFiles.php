<?php
$rootDir = realpath($_SERVER["DOCUMENT_ROOT"]);
$tempPaletteFolder = "temporaryPalettes";
$paletteName = $_POST['paletteFolderName'];

function deleteDir($path)
{
    if (empty($path)) {
        return false;
    }
    return is_file($path) ?
        @unlink($path) :
        array_map(__FUNCTION__, glob($path . '/*')) == @rmdir($path);
}
deleteDir("$rootDir/Клинкер/$paletteName");
