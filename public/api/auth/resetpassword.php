<?php
$link = mysqli_connect("localhost", "mskeg_klinder", "AQ&GX8Dq", "mskeg_klinder");

$query = mysqli_query($link, "SELECT user_login FROM users WHERE user_email='msk@simter.ru'");
$data = mysqli_fetch_assoc($query);
$password = randomPassword();
$passwordHash = md5(md5(trim($password)));
mysqli_query($link, "UPDATE users SET user_password='" . $passwordHash . "'  WHERE user_email='msk@simter.ru'");

echo json_encode($data);



function randomPassword()
{
    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    $pass = array();
    $alphaLength = strlen($alphabet) - 1;
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass);
}



$to  = 'msk@simter.ru';
$subject = "Восстановление пароля ПА от simter-st";


$message = '
<html>
    <head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Восстановление пароля ПА от simter-st</title>
    </head>
    <body>' .
    "<p>Логин:" . $data["user_login"] . "</p>" .
    "<p>Новый пароль:" . $password . "</p>" .
    ' </body>
</html>';





$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";


$headers .= "From: <msk@simter.ru>\r\n";

mail($to, $subject, $message, $headers);
