<?php
$data = json_decode($_POST['order']);
$delete = json_decode($_POST['delete']);
$doNeedChange = false;
$rootDir = realpath($_SERVER["DOCUMENT_ROOT"]);


if ($delete) {
    foreach ($delete as $k => $v) {
        deleteDir("$rootDir/Клинкер/$v->id,$v->name");
    }
}
foreach ($data as $k => $v) {
    if ($v->id != ($k + 1)) {
        $doNeedChange = true;
        $oldId = $v->id;
        $newId = $k + 1;
        $oldFolderName = "$oldId,$v->name";
        $newFolderName = "$newId,$v->name";
        rename("$rootDir/Клинкер/$oldFolderName", "$rootDir/Клинкер/$newFolderName");
        $v->id = $newId;

        $v->house->jpg = str_replace($oldFolderName, $newFolderName, $v->house->jpg);
        $v->house->webp = str_replace($oldFolderName, $newFolderName, $v->house->webp);

        $v->variants[0] = str_replace($oldFolderName, $newFolderName, $v->variants[0]);
        $v->variants[1] = str_replace($oldFolderName, $newFolderName, $v->variants[1]);

        $v->previews[0]->jpg = str_replace($oldFolderName, $newFolderName, $v->previews[0]->jpg);
        $v->previews[0]->webp = str_replace($oldFolderName, $newFolderName, $v->previews[0]->webp);
        $v->previews[1]->jpg = str_replace($oldFolderName, $newFolderName, $v->previews[1]->jpg);
        $v->previews[1]->webp = str_replace($oldFolderName, $newFolderName, $v->previews[1]->webp);

        $v->palette->png = str_replace($oldFolderName, $newFolderName, $v->palette->png);
        $v->palette->webp = str_replace($oldFolderName, $newFolderName, $v->palette->webp);
    }
}
$res = json_encode($data, JSON_UNESCAPED_UNICODE);
$str = file_put_contents($rootDir . '/assets/data/design.json', $res);


function deleteDir($path)
{
    if (empty($path)) {
        return false;
    }
    return is_file($path) ?
        @unlink($path) :
        array_map(__FUNCTION__, glob($path . '/*')) == @rmdir($path);
}
