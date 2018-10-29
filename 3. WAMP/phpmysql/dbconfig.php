<?php
$host = 'localhost';
$user = 'root';
$password = 'qwer1234';
$database = 'test';

$conn = mysqli_connect($host, $user, $password, $database);

mysqli_query("set session character_set_connection=utf8;");
mysqli_query("set session character_set_results=utf8;");
mysqli_query("set session character_set_client=utf8;");

?>