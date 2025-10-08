<?php

// DO NOT MODIFY THIS FILE
// USE THIS AS IS

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$file_loc = __DIR__ . '/requests.json';
$slots = [
    "2025-12-25 10:00",
    "2025-12-25 11:00",
    "2025-12-25 13:00",
    "2025-12-25 14:00"
];

// Load requests (array) from file; initialize if missing or invalid
function load_requests($file_loc) {
    if (!file_exists($file_loc)) {
        file_put_contents($file_loc, json_encode([], JSON_PRETTY_PRINT));
        return [];
    }
    $raw = file_get_contents($file_loc);
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

// Save requests (array) to file (atomic-ish)
function save_requests($file_loc, $requests) {
    $tmp = $file_loc . '.tmp';
    file_put_contents($tmp, json_encode($requests, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
    rename($tmp, $file_loc);
}

function next_id($requests) {
    if (!$requests) return 1;
    $max = 0;
    foreach ($requests as $r) {
        $id = isset($r['id']) ? (int)$r['id'] : 0;
        if ($id > $max) $id > $max && $max = $id;
        if ($id > $max) $max = $id; // safeguard
    }
    return $max + 1;
}

$method = $_SERVER['REQUEST_METHOD'];
if ($method === 'OPTIONS') { http_response_code(200); exit; }

if ($method === 'GET') {
    $requests = load_requests($file_loc);
    echo json_encode(["slots" => $slots, "requests" => $requests]);
    exit;
}

if ($method === 'POST') {
    $payload = json_decode(file_get_contents('php://input'), true);
    if (!is_array($payload)) $payload = [];

    $action = $payload['action'] ?? '';

    if ($action === 'create') {
        $name = trim((string)($payload['name'] ?? ''));
        $slot = trim((string)($payload['slot'] ?? ''));

        if ($name === '' || $slot === '') {
            http_response_code(400);
            echo json_encode(["message" => "Missing name or slot."]);
            exit;
        }
        if (!in_array($slot, $slots, true)) {
            http_response_code(400);
            echo json_encode(["message" => "Invalid slot."]);
            exit;
        }

        $requests = load_requests($file_loc);
        $new = [
            "id" => next_id($requests),
            "name" => $name,
            "slot" => $slot,
            "status" => "pending"
        ];
        array_unshift($requests, $new);
        save_requests($file_loc, $requests);

        echo json_encode(["message" => "Request created for {$name}.", "request" => $new]);
        exit;
    }

    if ($action === 'update') {
        $id = isset($payload['id']) ? (int)$payload['id'] : 0;
        $status = (string)($payload['status'] ?? '');
        $allowed = ["pending","approved","denied"];

        if ($id <= 0 || !in_array($status, $allowed, true)) {
            http_response_code(400);
            echo json_encode(["message" => "Invalid id or status."]);
            exit;
        }

        $requests = load_requests($file_loc);
        $idx = array_search($id, array_column($requests, 'id'));
        if ($idx === false) {
            http_response_code(400);
            echo json_encode(["message" => "Request not found."]);
            exit;
        }

        $requests[$idx]['status'] = $status;
        save_requests($file_loc, $requests);

        echo json_encode(["message" => "Status updated to {$status}.", "request" => $requests[$idx]]);
        exit;
    }

    http_response_code(400);
    echo json_encode(["message" => "Invalid action."]);
    exit;
}

http_response_code(405);
echo json_encode(["message" => "Method not allowed."]);
