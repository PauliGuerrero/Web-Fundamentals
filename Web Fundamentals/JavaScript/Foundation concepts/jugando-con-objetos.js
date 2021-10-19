var usuarios = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
];

/*¿Cómo harías print/log de la edad de John?*/

console.log(usuarios[1].age);

/*¿Cómo harías print/log del nombre del primer objeto?*/

console.log(usuarios[0].name);

/*¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto*/
for (var i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i].name, "-", usuarios[i].age);
}

/*¿Cómo harías para imprimir el nombre de los mayores de edad?*/

for(var i=0; i<usuarios.length;i++){
    if(usuarios[i].age>=18){
        console.log(usuarios[i].name);
    }
}