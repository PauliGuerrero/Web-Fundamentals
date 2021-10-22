//*Generar un arreglo de 10 números aleatorios entre 0 y 100*/
// Ordenarlos de mayor a menor
//Ordenarlos de menor a mayor
//convertir los valores al triple

function getRandomInt(min, max) {
  let newArray = [];
  for (let i = 1; i <= 10; i++) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    newArray.push(num);
  }
  return newArray;
}



let x = getRandomInt(1, 100);
console.log(x);

// Ordenarlos de mayor a menor
console.log ('ordenarlos de mayor a menor:',x.sort((a,b)=>b-a));

//Ordenarlos de menor a mayor

console.log('ordenar de menor a mayor:',x.sort((a,b)=>a-b));

//convertir los valores al triple

console.log('convertir los valores al triple',x.map((x) => x * 3));

