$(document).ready(function(){
    $('#boton').click(function(){
        alert($('#name').val ())
        $('#naranjo').append("<li>"+ $('#name').val +'</li>')
    });
});    
