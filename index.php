<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="jquery-3.1.1.min.js"></script>
    <link rel="icon" type="image/png" href="Sr._Gato.png" />
    <title>Menu</title>
    <link rel="stylesheet" href="estilos.css">
    <!--<script src="jquery.js"></script>-->
</head>
<body>
    <script type="text/javascript">
 
 function abrirHijo() {
 window.open("juego.html"); 
 }
 
 </script>
     <div class="menu">
        <h1>Cat Traps</h1>
        <img src="Sr._Gato1.png" alt="Senor gato" width="40%">
        
        <form method="POST" action="juego.php" >
            <p>Tamaño de la malla</p>
            <input type="number" id="tamM" name="tamM">
            <p>Numero de obstaculos</p>
            <input type="number" id="obst" name="obst"><br>
            <input type="submit" value="Jugar" class="boton2">
        </form>
        <!--<button onclick="abrirHijo();" class="boton2">Jugar</button>-->
            
    </div>
  
</body>
</html>
