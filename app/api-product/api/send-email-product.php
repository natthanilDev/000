<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* ===============================
   Composer autoload (แก้ path)
================================ */

require __DIR__ . '/../vendor/autoload.php';

/* ===============================
   CORS (แบบปลอดภัย)
================================ */
$allowedOrigins = [
  'http://localhost:3000',
  'http://192.168.100.228:3000',
  'https://jiei-thai.co.th',
  'https://www.jiei-thai.co.th',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
  header("Access-Control-Allow-Origin: $origin");
}

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

/* ===============================
   Preflight request
================================ */
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

/* ===============================
   รับ JSON
================================ */
$raw  = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!$data) {
  http_response_code(400);
  echo json_encode([
  ]);
  exit;
}

/* ===============================
   Honeypot
================================ */
if (!empty($data['honeypot'])) {
  http_response_code(403);
  echo json_encode(['success' => false, 'message' => 'Bot detected']);
  exit;
}

/* ===============================
   Sanitize
================================ */
$productName    = trim(strip_tags($data['productName'] ?? ''));
$email   = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = trim(strip_tags($data['message'] ?? ''));
$phone   = trim(strip_tags($data['phone'] ?? ''));

/* ===============================
   Required fields
================================ */
if (!$productName || !$email || !$message) {
  http_response_code(422);
  echo json_encode(['success' => false, 'message' => 'Missing required fields']);
  exit;
}

/* ===============================
   URL spam filter
================================ */
if (preg_match('/https?:\/\/|www\./i', $message)) {
  http_response_code(403);
  echo json_encode(['success' => false, 'message' => 'Links are not allowed']);
  exit;
}

/* ===============================
   Send Email
================================ */
$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host       = 'mail.jieithai.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'info-jiei@jiei-thai.co.th';
  $mail->Password   = 'lesiy[iy[-hv,^]0kd4kpovdgmjkoyho180/3*++';
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  $mail->Port       = 465;
  $mail->SMTPDebug = 2;
  $mail->Debugoutput = 'error_log';
  $mail->CharSet = 'UTF-8';

  $mail->setFrom('info-jiei@jiei-thai.co.th', 'Website Contact');
  $mail->addAddress('info-jiei@jiei-thai.co.th');
  $mail->addReplyTo($email, $productName);

  $mail->isHTML(true);
  $mail->Subject = "[Contact] {$productName}";
  $mail->Body = "
  <h2>New Contact Form Submission</h2>
    <strong>Product name:</strong> {$productName}<br>
    <strong>Phone:</strong> {$phone}<br>
    <strong>Message:</strong><br>

    <pre>{$message}</pre>
    
    *The sender’s email address will be visible only when replying to the email.*
  ";

  $mail->send();

  echo json_encode(['success' => true]);
} catch (Exception $e) {
  http_response_code(500);
  error_log($e->getMessage());
  echo json_encode(['success' => false, 'message' => 'Mail service error']);
}
