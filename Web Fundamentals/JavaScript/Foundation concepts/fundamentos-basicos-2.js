/*Fundamentos basicos*/

/*Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. 
Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].*/

/*function tamanoGrande(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = 'big';
    }
  }
  console.log(arr);
}
tamanoGrande([-1, 4, 5, -6]);*/

/* 2.Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.  */

/*function imprimeMenorDevuelveMayor(arr) {
  var low = arr[0];
  var high = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    } else if (arr[i] > high) {
      high = arr[i];
    }
  }
  console.log(low);
  return high;
}

console.log(imprimeMenorDevuelveMayor([3, 8, 7, 5]));*/

/*3.Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/
/*function imprimeDevuelve(arr) {
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      return arr[i];
    }
  }
}

imprimeDevuelve([2, 4, 5, 7, 8]);*/

/*4.Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. */

/*function dobleVision(arr){
    var doble=[];
    for(var i=0; i<arr.length; i++){
        doble.push(arr[i]*2)
    }
    return doble;
}

console.log(dobleVision([4,8,12]));*/

/* 5.Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. 
Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].*/

/*function contarPositivos(arr) {
  var positivo = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positivo++;
    }
  }
  arr[arr.length - 1] = positivo;
  return arr;
}

console.log(contarPositivos([-3, -5, 5, 6, 8]));*/

/* 
6.Pares e Impares - Crea una función que acepte un array. 
Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
*/

/*function paresImpares(arr) {
  var impar = 0;
  var par = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      impar++;
      par = 0;
    } else {
      par++;
      impar = 0;
    }
    if (impar == 3) {
      console.log("¡Que imparcial!");
      par = 0;
    } else if(par == 3){
      console.log("Es para bien!");
      impar = 0;
    }
  }
}

paresImpares([2, 2, 2, 2, 1, 2]);
paresImpares([1,1,1,2,3]); */

/*7.Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. */

/*function incrementSeconds(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementSeconds([5,6,7,8,9]));*/

/*8 Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. 
Pista: ¿For loops solo puede ir hacia adelante?*/

/*function longitudesPrevias(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length;
  }
  return arr;
}
console.log(longitudesPrevias(['hola', 'dojo', 'sol'])); */

/*9Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. 
Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. */

/*function agregaSiete(arr) {
  var siete = [];
  for (var i = 0; i < arr.length; i++) {
    siete.push(arr[i] + 7);
  }
  return siete;
}
console.log(agregaSiete([2, 3, 4])); */

/*10.Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).*/

/*11.Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array 
original, pero negativos (no simplemente multiplicando por -1).Dado [1,-3,5], devuelve [-1,-3,-5].*/

/*function negativo(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = -arr[i];
    }
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(negativo([2, 4, 6])); */

/*11.Siempre hambriento - 
Crea una función que acepte un array e imprima “yummy” cada vez que alguno de los valores sea “comida”. 
Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. */

/*function hambre(arr);{
  

}


hambre([1,2,4,'hola']);*/

/*function hungry(arr){
  var gotFood = false;
  for (var i = 0; i < arr.length; i++){
      if (arr[i] === "food"){
          console.log("yummy");
          gotFood = true;
      }
  }
  if (gotFood == false){
      console.log("I'm hungry");
  }
}
hungry([1,2,4,"sleep"]); */
/*12.Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo,
 etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]
 . cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. */