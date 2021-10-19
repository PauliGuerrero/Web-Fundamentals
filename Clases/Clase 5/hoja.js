function aggNombre(){
    var nombre = document.getElementById("name").value;
    document.getElementById("listado").innerHTML += "<li>" + nombre + "</li>";
    alert("Se ha agregado un nombre" + nombre + "correctamente");
}