$(document).ready(function(){
    var columnas = 5;
    var renglones = 5;
    var index = 0;
    var j,i
   //var $img = $('<img id="theCat"  src="Sr._Gato.png" />')
    creaMatriz()
    agrega_al_gatito()
    function agrega_al_gatito()
    {
        var x= renglones/2;
        var y= columnas/2;
        x= parseInt(x);
        y= parseInt(y);
        var idc = '#'+x+'c'+y;
        //var div=  document.getElementById(idc).children[0]
        //div.innerHTML= $img
        var $div = $(idc).children('div')
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
    $(function(){
        $('.circulo').click(function(){
            
            var $img= $(this).children('img');
            var idc = $img.attr('id')
            if(idc != 'theCat')
            {
                $(this).css('background-color','blue');
            }
        })
      })
})