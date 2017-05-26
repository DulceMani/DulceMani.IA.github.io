$(document).ready(function(){
    var columnas = $('#maya').val();
    var renglones =  $('#maya').val();
    var index = 0;
    var j,i;
    var x= renglones/2;
    var y= columnas/2;
    var matriz = new Array(renglones);
    var arriba = false;
    var derecha = false;
    var HV = false;
    var bandj=false;    

   //var $img = $('<img id="theCat"  src="Sr._Gato.png" />')
   
   
   
    function agrega_al_gatito()
    {   
        var idcIni; 
        x= parseInt(x);
        y= parseInt(y);
        idcIni = '#'+x+'c'+y;
        var $div = $(idcIni).children('div')
        $div.prepend($('<img>',{id:'theCat',src:'Sr._Gato.png'}));
    }
    function creaMatriz_Num(){
        for(i=0;i<renglones;i++)
        {
            matriz[i] = new Array(columnas);
            for(j=0;j<columnas;j++)
            {
                matriz[i][j] = 0;
            }
        } 
    }
    function creaMatriz(){
        for(i=0;i<renglones;i++)
        {
            for(j=0;j<columnas-1;j++)
            {
                agregaColumna(i,j)
            }
            agregaRenglon(i,0)
        } 
    }
    function pon_obstaculos(numObs){
        //alert('numObst:'+numObs);
        for(i=0;i<numObs;i++){
            do{
                var xobs=Math.floor((Math.random() * (renglones-1)))
                var yobs=Math.floor((Math.random() * (renglones-1)))
            }while((xobs == parseInt(columnas/2) && yobs == parseInt(columnas/2) )||(xobs<0 && xobs>=renglones && yobs<0 && yobs>=renglones);
        
            matriz[yobs][xobs]=1;
            var idO='#'+yobs+'c'+xobs;
            var $div1= $(idO).children('div');
            $div1.css('background-color','blue')
        }
    } 
    function agregaColumna(i,j){
        var cid = '#'+i+'c'+j;
        var $td = $('<td>')
        $(cid).after($td)
        var newid = i+'c'+(j+1)
        $td.attr('id',newid)
        $div = $('<div class="circulo"></div>')
        $td.append($div)
        //$div.addClass('circulo');
        //document.getElementById(newid).children[0].onclick = "circuloClick()";
        //$div.onclick = "circuloClick()";
        
    }
    function agregaRenglon(i,j){
        var rid = '#r'+i
        var $tr = $('<tr>')
        $(rid).after($tr)
        var newid ='r'+(i+1)
        $tr.attr('id',newid)
        if(i!= renglones-1)
        agregaPrimerColumna($tr,i,j)
    }
    function agregaPrimerColumna($tr,i,j){
        var cid = '#'+i+'c'+j;
        var $td = $('<td>')
        $tr.append($td)
        var newid = (i+1)+'c'+j
        $td.attr('id',newid)
        $div = $('<div class="circulo"></div>')
        $td.append($div)
        
        //$('div').addClass('circulo');
        
    }

    function turnoCat(){
       
       var Dire;
       var idO;
       var $div1;
       var idN;
       var co;
       var p =[];
       
       p = algoritmo_greedy(elige_candidatos());

       if(p.length > 0){
            idO='#'+p[1]+'c'+p[0];
            $div1= $(idO).children('div');
            co = ($div1).css('backgroundColor');

            $("#theCat").remove()
            $div1.prepend($('<img>',{id:'theCat',src:'Sr._Gato.png'})); 
            x= p[0]; y=p[1]; 
            reproduce_sonido_gato(false);
        }else
        {
            cambia_gato(false);
            reproduce_sonido_gato(true);
        }

        if(x == columnas-1 || y == renglones-1 || x==0 ||y==0){
            var m=matriz[y][x];
            cambia_gato(true);
           perdiste();
       }
            
    }
    function algoritmo_greedy(candidatos)
    {
        var soluciones = [];
        var i = 0; var p = [];

        while(candidatos.length>0)
        {
            p=candidatos.shift();
            i++;
            if(matriz[p[1]][p[0]] == 0){
                soluciones.push(p);
            }
            p = [];
        }
        if(soluciones.length>0){
            arriba_o_abajo();
            izq_o_der();
            Hor_o_Ver();
            p = elige_movimiento(soluciones);
        }
        return p;
    }
    function elige_movimiento(s)
    {
        var p = [];
        if(HV == true){
            if(arriba)
                   s= ordenamiento(1,s,false);
                else
                   s= ordenamiento(1,s,true);

            if(derecha==true)
                p = valormaximo(0,s);
            else
                p = valorminimo(0,s);
        } else{
            if(derecha)
                  s=  ordenamiento(0,s,true);
                else
                   s= ordenamiento(0,s,false);

            if(arriba==true)
                p = valorminimo(1,s);
            else
                p = valormaximo(1,s);
        }
        return p; 
    }
    function valormaximo(m,s){
        var max = 0;
        var p = [];
        for(var i=0;i<s.length;i++){
            if(s[i][m]>max){
                max = s[i][m];
                p = s[i];
            }
        }
        return p;
    }
    function ordenamiento(m,s,mayor){
        var temp = [];
        for (i=0; i<s.length-1; i++){
            for (j=0 ; j<s.length - 1; j++){
                if(mayor){
                    if (s[j][m] < s[j+1][m]){
                            temp = s[j+1];
                            s[j+1]= s[j];
                            s[j] = temp;
                        }
                }else{
                    if (s[j][m] > s[j+1][m]){
                            temp = s[j+1];
                            s[j+1]= s[j];
                            s[j] = temp;
                        }
                }
            }
        }
        return s;
    }
    function valorminimo(m,s){
        var min = s[0][m];
        var p = s[0];
        for(var i=1;i<s.length;i++){
            if(s[i][m]<min){
                min = s[i][m];
                p = s[i];
            }
        }
        return p;
    }
    function Hor_o_Ver()
    {
        var j,i;
        if(arriba==false)
            j =renglones-y;
        else
            j=y;
        if(derecha==true)
            i =columnas-x;
        else
            i=x;
        if(i>j)
            HV = true;
        else if(i>j)
            HV = false;
        else if(Math.floor((Math.random() * 2) + 1) == 1)
                HV=true;
            else
                HV=false;
    }
    function arriba_o_abajo(){
         if(parseInt(renglones/2)>y)
            arriba = true
        else if(parseInt(renglones/2)<y)
            arriba = false;
        else{
            if(Math.floor((Math.random() * 2) + 1) == 1)
                arriba =true;
            else
                arriba = false;
        }
        
    }
    function izq_o_der(){
         if(parseInt(columnas/2)>x)
            derecha = false;
        else if(parseInt(columnas/2)<x)
            derecha = true;
        else{
            if(Math.floor((Math.random() * 2) + 1) == 1)
                derecha =true;
            else
                derecha = false;
        }       
    }
    function elige_candidatos()
    {
         var punto = [];
         var puntos = [];

         punto.push(x-1); punto.push(y-1);
         puntos.push(punto); punto = [];
         punto.push(x); punto.push(y-1);
         puntos.push(punto); punto = [];
         punto.push(x+1); punto.push(y-1);
         puntos.push(punto); punto = [];
         punto.push(x+1); punto.push(y);
         puntos.push(punto); punto = [];
         punto.push(x+1); punto.push(y+1);
         puntos.push(punto); punto = [];
         punto.push(x); punto.push(y+1);
         puntos.push(punto); punto = [];
         punto.push(x-1); punto.push(y+1);
         puntos.push(punto); punto = [];
         punto.push(x-1); punto.push(y);
         puntos.push(punto); punto = [];
         return puntos;
    }
    function perdiste()
    {    
        $('.perdiste').css({display: 'inline'})
    }
    function cambia_gato(perdiste){

        var $div=$('#theCat').parent();
        $('#theCat').remove();
        if(perdiste==true)
            $div.prepend($('<img>',{id:'theCat',src:'Sr._Gato1.png'}));
        else
            $div.prepend($('<img>',{id:'theCat',src:'Sr._Gato2.png'}));
    }
    function reproduce_sonido_gato(perdedor){
        var num = Math.floor((Math.random() * 4) + 1);
        if(perdedor == true)
            $('audio')[1].play();
        else if(num == 2){
            $('audio')[0].play();
        }
        
    }
   
         
           // $('.menu').remove();     
            creaMatriz()
            creaMatriz_Num()
            //do{
                var numObs = $('#num').val();
           // }while(numObs!=NaN);
            pon_obstaculos(parseInt(numObs))
            agrega_al_gatito()   
    
//    function circuloClick(){
//        var $img= $(this).children('img');
//             var idc = $img.attr('id')

//             var idp = $(this).parent().attr('id');
//             var ym = idp.substring(0,1);
//             var xm = idp.substring(2);
//             matriz[parseInt(ym)][parseInt(xm)] = 1;

//             if(idc != 'theCat')
//             {
//                 $(this).css('background-color','blue')
//                  turnoCat();
//             }
//    }
    // $(function(){
        $('.circulo').click(function(){
             
            var $img= $(this).children('img');
            var idc = $img.attr('id')

            var idp = $(this).parent().attr('id');
            var ym = idp.substring(0,1);
            var xm = idp.substring(2);
            matriz[parseInt(ym)][parseInt(xm)] = 1;

            if(idc != 'theCat')
            {
                $(this).css('background-color','blue')
                 turnoCat();
            }
        })
    //   })
     
})