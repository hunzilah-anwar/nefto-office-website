<?php
// Include PHPMailer classes
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit();
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid JSON data"]);
    exit();
}

$fullName = isset($data['fullName']) ? $data['fullName'] : 'N/A';
$email = isset($data['email']) ? $data['email'] : 'N/A';
$phone = isset($data['phone']) ? $data['phone'] : 'N/A';
$messageContent = isset($data['message']) ? $data['message'] : 'N/A';
$subject = isset($data['subject']) ? $data['subject'] : 'No Subject';
$newsletter = !empty($data['newsletter']) ? 'Yes' : 'No';
$events = !empty($data['events']) ? 'Yes' : 'No';

$body = "You have received a new message from the contact form on your website.\n\n" .
        "Details:\n" .
        "Name: $fullName\n" .
        "Email: $email\n" .
        "Phone: $phone\n" .
        "Subject: $subject\n" .
        "Newsletter Opt-in: $newsletter\n" .
        "Events Opt-in: $events\n\n" .
        "Message:\n$messageContent\n";

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'nefftosolution@gmail.com'; // SMTP username
    $mail->Password   = 'vkpcreegvxkgthrc';       // SMTP app password (spaces removed)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('nefftosolution@gmail.com', 'Neffto Website');
    $mail->addAddress('nefftosolution@gmail.com'); // Add a recipient

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, $fullName);
    }

    // Content
    $mail->isHTML(false);
    $mail->Subject = 'New Contact Form Submission: ' . $subject;
    $mail->Body    = $body;

    $mail->send();
    http_response_code(200);
    echo json_encode(["message" => "Email sent successfully"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Failed to send email. Mailer Error: {$mail->ErrorInfo}"]);
}
