<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$data = ['result' => false];
$target_path = time().'.jpg';

//if (isset($_POST['file'])) {

    $imagedata = $_POST['file'];
    $imagedata = str_replace('data:image/jpeg;base64,','', $imagedata);
    $imagedata = str_replace('data:image/jpg;base64,','', $imagedata);
    $imagedata = str_replace(' ','+', $imagedata);
    $imagedata = base64_decode($imagedata);

    file_put_contents($target_path, $imagedata);

    $data = ['result' => true];
    $data = ['image_url'] = 'http://bmyscouter.co/db/mobile'.$target_path;
//}

echo json_encode($data);