//1) Analiza los valores de un array y obtén el promedio (average) de esos valores.

/*function printAverage(x){
    sum = 0;
    for(var i=0 ;i<x.length;i++){
        sum=sum+x[i];
    }
    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5 */

//2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)

/*function returnOddArray(){
    var x=[];
    for (var i=1; i<=255; i+=2){
        x.push(i);
    }
    return x;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]*/

//Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..

function squareValue(x) {
  var newArr = [];
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] * x[i];
  }
  return x;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]
