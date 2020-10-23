<?php
$timezones = ["Asia/Seoul", "America/New_York"];
header('Content-Type: application/json');
echo json_encode($timezones);
// json_encode는 PHP의 데이터를 JSON 형식으로 전환해주는 PHP의 내장함수다.
// ["Asia\/Seoul","America\/New_York"]

// 언어마다 JSON 형싟으로 전환해주는 API가 존재한다.
?>