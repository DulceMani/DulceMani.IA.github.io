<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="jquery-3.1.1.min.js"></script>
    <link rel="icon" type="image/png" href="Sr._Gato.png" />
    <title>Cat Traps</title>
    <link rel="stylesheet" href="estilos.css">
    <script src="jquery.js"></script>
    <!--<script src="jq.js"></script>-->
</head>
<body>
    <!--<canvas width="480" height="320"> </canvas>-->
    <!--<div class="encabezado"> <h1>Cat Traps</h1>  </div>-->

    <table id="tabla">
        
        <tr id="r0">
            <td id="0c0"><div class="circulo"></div></td>
        </tr>
    
    </table> 
    <input type="number" value="<?php echo $_POST['obst'];?>" id="num" >
    <input type="number" value="<?php echo $_POST['tamM'];?>" id="maya" >
    <audio preload>
        <source src="gato_maullido.mp3" type="audio/mp3">
        <source src="gato_maullido.ogg" type="audio/ogg">            
    </audio>
    <audio preload>
        <source src="mp3gato1.mp3" type="audio/mp3">
        <source src="mp3gato1.ogg" type="audio/ogg">            
    </audio>
    <div class="perdiste">
        <div class="contP">
            <h1>Perdiste</h1>
            <!--<button class="boton">Juego Nuevo</button>-->
        </div>
        
    </div>
   <!-- <script>
      $(function(){
        $('.circulo').click(function(){
            $(this).css('background-color','blue');
        
        })
      })
    </script>-->

        <!--<script src="jquery.js"></script>-->
        
</body>
</html>
<?php 
    if($_POST){
         $_POST['tamM'];
         $_POST['obst'];
    }
?> 