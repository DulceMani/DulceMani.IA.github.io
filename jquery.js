$(document).ready(function(){
    var columnas = 5;
    var renglones = 5;
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
        
         return Math.floor((Math.random() * 4) + 1);
    }

    function getXActual(){
      return x;
    }

    function getYActual(){
       return y;
    }

    function actualizacion(dir){

        switch(dir){

            case 1:
                if(getXActual()>0)
                   x--;
            break; 

            case 2:
                if(getXActual()<4)
                   x++;
            break;   

            case 3:
                if(getYActual()>0)
                   y--;
            break;   

            case 4:
                if(getXActual()<4)
                   y++;
            break;     
        }
  
    }

    function turnoCat(){
       
       var Dire;
       var idO;
       var $div1;
       var $div2;
       var idN;
       var co;
       var Cor;
       
            
            do{

            
            Dire=getAleatorio();
            //alert(Dire);
            
            if(Dire==1){
                    Cor=x;
                    Cor--;
                    idO='#'+Cor+'c'+y;
                    idN='#'+x+'c'+y;
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
                 
                    

                    if(co=="rgb(128, 0, 128)"){  
                        //$div2= $(idN).children('div')
                        $("#theCat").remove()
                        $div1.prepend($('<img>',{id:'theCat',src:'Sr._Gato.png'})); 
                        actualizacion(Dire)
                    } 
                    
            }

            if(Dire==2){
                    Cor=x;
                    Cor++;
                    idO='#'+Cor+'c'+y;
                    idN='#'+x+'c'+y;
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
                  

                    if(co=="rgb(128, 0, 128)"){  
                        //$div2= $(idN).children('div')
                        $("#theCat").remove()
                        $div1.prepend($('<img>',{id:'theCat',src:'Sr._Gato.png'})); 
                        actualizacion(Dire)
                    } 
                    
                }

                if(Dire==3){
                    Cor=y;
                    Cor--;
                    idO='#'+x+'c'+Cor;
                    idN='#'+x+'c'+y;
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');
        

                    if(co=="rgb(128, 0, 128)"){  
                        //$div2= $(idN).children('div')
                        $("#theCat").remove()
                        $div1.prepend($('<img>',{id:'theCat',src:'Sr._Gato.png'})); 
                        actualizacion(Dire)
                    } 
                    
                }
      
                if(Dire==4){
                    Cor=y;
                    Cor++;
                    idO='#'+Cor+'c'+y;
                    idN='#'+x+'c'+y;
                    $div1= $(idO).children('div');
                    co = ($div1).css('backgroundColor');

                    if(co=="rgb(128, 0, 128)"){  
                        //$div2= $(idN).children('div')
                        $("#theCat").remove()
                          $div1.prepend($('<img>',{id:'theCat',src:'Sr._Gato.png'}));
                          actualizacion(Dire) 
                        
                    } 
                    
               }
          
            }while(co=="rgb(0, 0, 255)");
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