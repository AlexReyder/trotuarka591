<?php
$rootDir = realpath($_SERVER["DOCUMENT_ROOT"]);
file_put_contents($rootDir . '/assets/data/map.json', $_POST['data']);
