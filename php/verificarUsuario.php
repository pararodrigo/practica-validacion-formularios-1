<?php
sleep(1);
include('consexion.php');
if($_REQUEST) {
    $username = $_REQUEST['username'];
    $query = "select * from usuarios where username = '".strtolower($username)."'";
    $results = mysql_query( $query) or die('ok');

}
?>