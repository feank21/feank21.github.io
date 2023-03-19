<?php
$to = 'test@mail.com'; // Почта на которую будут приходить заявки

$name = isset($_POST['name']) and $_POST['name'] ? $_POST['name'] : false;
$phone = isset($_POST['phone']) and $_POST['phone'] ? $_POST['phone'] : false;

if ($name and $phone) {
	$subject = 'Новая заявка';
	$message = "Новая заявка<br><br>Имя: {$name}<br>Телефон: {$phone}";
	$from = 'noreply@mail.com';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= "From: <".$from.">\r\n";

	if (mail($to, $subject, $message, $headers)) exit('success');
}

exit('error');
?>