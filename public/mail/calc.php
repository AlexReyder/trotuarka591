<?php

$to = 'ooo_arianasochi@mail.ru';

$subject = 'Заявка';
$text = '';
$_POST = json_decode(file_get_contents('php://input'), true);
$phone = $_POST["phone"];
$messanger = $_POST["answerMessenger"];
$qaArr = array_intersect_key($_POST, array_flip(array_filter(array_keys($_POST), 'is_numeric')));
var_dump($qaArr);

for ($i = 0; $i <= count($qaArr); $i++) {
	$index = $i + 1;
	foreach ($qaArr[$i] as $key => $val) {
		if($key === "question"){
			$text .= $index .". " . "Вопрос: " . $val . "\n";
		} else {
			$text .= "Ответ: " . $val . "\n";
		}

}
}


$message = "Номер телефона: " . $phone . "\n" . $text . "\n" . "Отправить расчет на: " . $messanger;

mail($to, $subject, $message);

?>
