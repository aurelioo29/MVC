<?php
if (!session_id()) session_start();
require_once "../app/init.php";

$app = new App();

// $konek = new Connection();
// $konek->connect('localhost', 'root', '', 'db_point_of_sales');