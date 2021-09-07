
     <?php

include ("conexion.php");
   $conexion = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
     
   error_reporting (0);
  
    $query2="SELECT id,nombre,usuario,fecha,saldo,tipo,idsub FROM usuario WHERE idsub='$_POST[idsub2]'";
   
    $buscar2=mysqli_query($conexion,$query2);
    $date = array();
   


    if ($buscar2->num_rows > 0)
    {

       while($filaAdmon2=@mysqli_fetch_array($buscar2))
        {
      
         $date[]=$filaAdmon2;



        }

        foreach ( $date as $key => $value) {
          $date2[$key]["#"] = ($key+1);
          $date2[$key]['id'] = $value['id'];
          $date2[$key]['nombre'] = $value['nombre'];
          $date2[$key]['usuario'] = $value['usuario'];
          $date2[$key]['fecha'] = $value['fecha'];
          $date2[$key]['saldo'] = number_format($value['saldo']);
          $date2[$key]['tipo'] = $value['tipo'];
          $date2[$key]['idsub'] = $value['idsub'];
       
      }


        $datauser = array(
         "sEcho" => 1,
         "iTotalRecords" => count($date2),
         "iTotalDisplayRecords" => count($date2),
         "aaData"=>$date2);

       
       
        }else{
          
      
          $datauser = array();
        }

        echo json_encode($datauser);

   ?>
