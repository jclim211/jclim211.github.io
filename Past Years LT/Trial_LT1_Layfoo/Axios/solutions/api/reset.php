<?php
// Configuration - easily changeable file names
$originalFile = 'original-data.json';
$dataFile = 'data.json';

// Set content type to JSON
header('Content-Type: application/json');

try {
    // Check if original file exists
    if (!file_exists($originalFile)) {
        http_response_code(500);
        echo json_encode(['error' => "Original file '{$originalFile}' not found"]);
        exit;
    }

    // Check if original file is readable
    if (!is_readable($originalFile)) {
        http_response_code(500);
        echo json_encode(['error' => "Cannot read original file '{$originalFile}'"]);
        exit;
    }

    // Check if data file directory is writable
    if (!is_writable(dirname($dataFile))) {
        http_response_code(500);
        echo json_encode(['error' => "Cannot write to directory"]);
        exit;
    }

    // Copy original file to data file
    if (!copy($originalFile, $dataFile)) {
        http_response_code(500);
        echo json_encode(['error' => "Failed to copy '{$originalFile}' to '{$dataFile}'"]);
        exit;
    }

    // Success response
    http_response_code(200);
    echo json_encode(['status' => 'success']);

} catch (Exception $e) {
    // Handle any unexpected errors
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>