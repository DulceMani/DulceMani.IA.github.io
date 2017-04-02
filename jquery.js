$(document).ready(function(){
    var columnas = 10;
    var renglones = 10;
    var index = 0;
    var j,i

    creaMatriz()

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
})