<?php

// Retrieve the raw POST data
$postData = file_get_contents("php://input");

// Decode the JSON data
$data = json_decode($postData, true);

// Check if 'data' key exists
if (isset($data['data'])) {
    $dataArray = $data['data'];

    $sumSubTotals = 0;
    $finalTotal = 0;

    $discountPercent = 0.05;
    $discountThreshold = 100;
    $discountReached = false;

    // Process the data as needed
    foreach ($dataArray as $item) {
        if (isset($item['subtotal'])) {
            $sumSubTotals += $item['subtotal'];
        }
    }

    if ($sumSubTotals >= $discountThreshold) {
        $finalTotal = number_format($sumSubTotals * (1 - $discountPercent), 2);
        $discountReached = true;
    } else {
        $finalTotal = $sumSubTotals;
    }

    // Prepare the response as an associative array
    $response = array(
        'finalTotal' => $finalTotal,
        'discountReached' => $discountReached,
    );

    // Encode the response as JSON
    echo json_encode($response);
} else {
    echo json_encode(['error' => 'Data key not found']);
}
