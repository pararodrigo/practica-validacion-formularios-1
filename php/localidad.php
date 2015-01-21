<?php 
header('Access-Control-Allow-Origin: *');
header('content-type: application/json; charset=utf-8');


//Cadena de conexión:
//Cadena de conexión:
//Cadena de conexión:
$connect = mysql_connect("localhost", "root", "root")
or die('Could not connect: ' . mysql_error());


//seleccionamos bbdd:
$bool = mysql_select_db("dwec", $connect);
if ($bool === False){
   print "No puedo encontrar la bbdd: $database";
}
//inicializamos el cliente en utf-8:
mysql_query('SET names utf8');


$query = "SELECT * FROM poblaciones";

$result = mysql_query($query) or die("SQL Error: " . mysql_error());
$data = array();
// obtenemos los datos:
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'cp' => $row['cod_postal'],
        'poblacion' => $row['poblacion'],
        'cod_prov' => $row['cod_prov'],
      );
}



//codificamos en json:
$json = json_encode($data);

//enviamos datos en json, tal y como espera la petición ajax:
echo $json;


?>

