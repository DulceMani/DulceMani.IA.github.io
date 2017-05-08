$(document).ready(function(){
    var columnas = 7;
    var renglones = 7;
    var index = 0;
    var j,i;
    var x= renglones/2;
    var y= columnas/2;

   //var $img = $('<img id="theCat"  src="Sr._Gato.png" />')
    creaMatriz()
    agrega_al_gatito()
    function agrega_al_gatito()
    {   
        var idcIni; 
        //Idea para empezar la interaccion
        x= parseInt(x);
        y= parseInt(y);
        idcIni = '#'+x+'c'+y;
        //var div=  document.getElementById(idc).children[0]
        //div.innerHTML= $img
        var $div = $(idcIni).children('div')
        $div.prepend($('<img>',{id:'theCat',src:'Sr._Gato.png'}));
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
    function agregaColumna(i,j){
        var cid = '#'+i+'c'+j;
        var $td = $('<td>')
        $(cid).after($td)
        var newid = i+'c'+(j+1)
        $td.attr('id',newid)
        $td.append('<div>')
        $('div').addClass('circulo');
        
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
        $td.append('<div>')
        $('div').addClass('circulo');
        
    }
    
    function getAleatorio() {
        
         return Math.floor((Math.random() * 8) + 1);
    }

    // function getXActual(){
    //   return x;
    // }

    // function getYActual(){
    //    return y;
    // }

    function actualizacion(dir){

        switch(dir){

            case 1:
                if(y>0)
                   y--;
            break; 

            case 2:
                if(y<renglones)
                   y++;
            break;   

            case 3:
                if(x>0)
                   x--;
            break;   

            case 4:
                if(x<columnas)
                   x++;
            break;   
            case 5:
                if(x>0 && y>0){
                   x--;
                   y--;
                }
            break;
            case 6:
                if(x<columnas && y<renglones){
                   x++;
                   y++;
                }
            break;
            case 7:
                if(x<columnas && y>0){
                   x++;
                   y--;
                }
            break;
            case 8:
                if(x>0 && y<renglones){
                   x--;
                   y++;
                }
            break;
        }
  
    }

    function turnoCat(){
       
       var Dire;
       var idO;
       var $div1;
       var idN;
       var co;
            //do{
            Dire=getAleatorio();

            if(Dire==1){
                    idO='#'+(y-1)+'c'+x;
                    idN='#'+x+'c'+y;
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
                    
            }else if(Dire==2){
                    idO='#'+(y+1)+'c'+x;
                    idN='#'+x+'c'+y;
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
                    
                }else if(Dire==3){

                    idO='#'+y+'c'+(x-1);
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
                    
                }else if(Dire==4){
                    idO='#'+y+'c'+(x+1);
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
                    
               }else if(Dire==5){
                    idO='#'+(y-1)+'c'+(x-1);
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
                    
               }else if(Dire==6){
                    idO='#'+(y+1)+'c'+(x+1);
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
               }else if(Dire==7){
                    idO='#'+(y-1)+'c'+(x+1);
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
               }else if(Dire==8){
                    idO='#'+(y+1)+'c'+(x-1);
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
                    
               }

               if(co=="rgb(128, 0, 128)"){  
                        $("#theCat").remove()
                        $div1.prepend($('<img>',{id:'theCat',src:'Sr._Gato.png'})); 
                        actualizacion(Dire)
                        reproduce_sonido_gato();
                } 
            //}while(co=="rgb(0, 0, 255)");
    }
    function reproduce_sonido_gato(){
        var num = Math.floor((Math.random() * 4) + 1);

        if(num == 2){
            $('audio')[0].play();
        }
    }
    $(function(){
        $('.circulo').click(function(){
             
            var $img= $(this).children('img');
            var idc = $img.attr('id')
            if(idc != 'theCat')
            {
                $(this).css('background-color','blue')
                 turnoCat();
            }
        })
      })
})