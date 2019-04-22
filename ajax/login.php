<?php

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if ($email == 'abc@abc.com' && $password == '123') {
    $result = [
        'type' => 'success',
        'message' => 'Login Success'
    ];
    echo json_encode($result);
} else {
    $result = [
        'type' => 'error',
        'message' => 'Email or password incorrect.'
    ];
    echo json_encode($result);
}

