<?php
header('Content-Type: application/json');

const DATA_FILE = 'data.json';

function loadData() {
    if (!file_exists(DATA_FILE)) {
        return [];
    }
    
    $content = file_get_contents(DATA_FILE);
    return json_decode($content, true) ?: [];
}

function saveData($data) {
    return file_put_contents(DATA_FILE, json_encode($data, JSON_PRETTY_PRINT));
}

function sendResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit;
}

function sendError($message, $statusCode = 404) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$data = loadData();

switch ($method) {
    case 'GET':
        if (isset($_GET['category'])) {
            $category = $_GET['category'];
            
            if (!isset($data[$category])) {
                sendError('Unknown category', 404);
            }
            
            sendResponse($data[$category]);
        } else {
            sendResponse($data);
        }
        break;
        
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input || !isset($input['category']) || !isset($input['name']) || !isset($input['price'])) {
            sendError('Invalid request body', 400);
        }
        
        $category = $input['category'];
        $name = $input['name'];
        $price = $input['price'];
        
        if (!isset($data[$category])) {
            sendError('Unknown category', 404);
        }
        
        // Add new product to the category
        $data[$category][] = [
            'name' => $name,
            'price' => $price
        ];
        
        if (saveData($data) === false) {
            sendError('Failed to save data', 500);
        }
        
        sendResponse(['message' => 'Product added successfully'], 201);
        break;
        
    default:
        sendError('Method not allowed', 405);
        break;
}
?>