<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$payload = json_decode($rawInput, true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON payload']);
    exit;
}

$amount = isset($payload['amount']) ? (int) $payload['amount'] : 0;
$currency = isset($payload['currency']) ? strtoupper((string) $payload['currency']) : 'INR';
$receipt = isset($payload['receipt']) ? (string) $payload['receipt'] : 'seo-order';
$customer = isset($payload['customer']) && is_array($payload['customer']) ? $payload['customer'] : [];
$items = isset($payload['items']) && is_array($payload['items']) ? $payload['items'] : [];

if ($amount <= 0) {
    http_response_code(422);
    echo json_encode(['error' => 'Amount must be greater than zero']);
    exit;
}

$razorpayKeyId = getenv('RAZORPAY_KEY_ID');
$razorpayKeySecret = getenv('RAZORPAY_KEY_SECRET');

if (!$razorpayKeyId || !$razorpayKeySecret) {
    $configPaths = [__DIR__ . DIRECTORY_SEPARATOR . 'razorpay-config.php'];

    foreach ($configPaths as $configPath) {
        if (!is_file($configPath) || !is_readable($configPath)) {
            continue;
        }

        $config = include $configPath;
        if (is_array($config)) {
            $razorpayKeyId = trim((string) ($config['razorpay_key_id'] ?? ''));
            $razorpayKeySecret = trim((string) ($config['razorpay_key_secret'] ?? ''));
            if ($razorpayKeyId && $razorpayKeySecret) {
                break;
            }
        }
    }
}

if (!$razorpayKeyId || !$razorpayKeySecret) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Razorpay credentials are not configured on the server. Create razorpay-config.php in the same folder as razorpay-create-order.php.',
    ]);
    exit;
}

$orderPayload = [
    'amount' => $amount,
    'currency' => $currency,
    'receipt' => $receipt,
    'notes' => [
        'customer_name' => trim((string) ($customer['name'] ?? '')),
        'customer_email' => trim((string) ($customer['email'] ?? '')),
        'customer_company' => trim((string) ($customer['company'] ?? '')),
        'customer_country' => trim((string) ($customer['country'] ?? '')),
        'items' => json_encode($items),
    ],
];

$curl = curl_init('https://api.razorpay.com/v1/orders');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => http_build_query($orderPayload),
    CURLOPT_HTTPHEADER => [
        'Authorization: Basic ' . base64_encode($razorpayKeyId . ':' . $razorpayKeySecret),
        'Content-Type: application/x-www-form-urlencoded',
    ],
]);

$responseBody = curl_exec($curl);
$httpCode = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
$curlError = curl_error($curl);
curl_close($curl);

if ($responseBody === false || $curlError) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not connect to Razorpay: ' . $curlError]);
    exit;
}

$responseData = json_decode($responseBody, true);
if (!is_array($responseData)) {
    http_response_code(500);
    echo json_encode(['error' => 'Razorpay returned an invalid response.']);
    exit;
}

if ($httpCode >= 400) {
    $message = $responseData['error']['description'] ?? 'Razorpay order creation failed.';
    http_response_code($httpCode);
    echo json_encode(['error' => $message]);
    exit;
}

echo json_encode([
    'orderId' => $responseData['id'] ?? '',
    'amount' => $responseData['amount'] ?? $amount,
    'currency' => $responseData['currency'] ?? $currency,
    'key' => $razorpayKeyId,
]);
