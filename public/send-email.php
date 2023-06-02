<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'Wiadomość ze strony';

    require 'vendor/autoload.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = 'formax.webd.pl';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 465;

    $mail->Username = '_mainaccount@formax.webd.pl';
    $mail->Password = 'anna12cvbcvb3';

    $mail->setFrom($email, $name);
    $mail->addAddress('formax@formax.webd.pl', 'Paweł Boryczka');

    $mail->Subject = 'Wiadomość ze strony';
    $mail->Body = $message . "\n\n" . 'Telefon: ' . $phone;

    $mail->send();

    echo 'Wiadomość została wysłana';

?>