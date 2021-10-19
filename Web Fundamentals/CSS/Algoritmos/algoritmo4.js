/*1.Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. */
/*function mayoresY(arr, y) {
  var counter = 0;
  for (var i = 0; i < arr.lenght; i++) {
    if (arr[i] > y);
    counter++;
  }
  console.log("mayoresY");
}
mayoresY([2, 3, 5, 6], 3);
*/
/*Dado un array, imprime los valores máximos (max), mínimos 
(min) y promedio (average) para el array. */

/*function imprimirMaxMinAvg(arr) {
  var max = 0;
  var min = 0;
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log('max:',max, 'min:',min, 'promedio:',sum / arr.length);
}

imprimirMaxMinAvg([3, 5, 6, 8]);*/

/*Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos
 se reemplacen por el texto (string) ‘Dojo’. Por ejemplo,
 reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].*/

/*function reemplazaNegativos(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}

var resultado = reemplazaNegativos([1, 3, -4, 5, -6]);
console.log(resultado);*/

/*Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array).
 Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].*/
function remove(arr,inicio,fin){
    var offset=fin-inicio+1;
    for(var i=inicio; i<=offset;i++){
        arr[i]=arr[i+offset];
    }
    console.log(arr);
    arr.length= arr.length-offset;
    return arr
}

 remove([10,20,40,50],2,3)
 console.log(remove);
