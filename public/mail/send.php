<?php

$to = 'ooo_arianasochi@mail.ru';

$subject = 'Заявка';
$text = '';
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST["username"];
$phone = $_POST["phone"];
$theme = $_POST["theme"];

$message = "Имя: " . $name . "\n" . "Номер телефона: " . $phone . "\n" . "Тема: " . $theme;

mail($to, $subject, $message);
echo $message;
?>