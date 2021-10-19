/*function numeros(){
    var z=[]
    for (var i=1; i<256; i++){
        z.push(i);
    }
    return z
}
console.log(numeros())


function numerosPares(){
    var sum=0;
    for(var i=1; i<=1000; i++){
        if (i%2==0){
            sum=sum+i;
        }
    }
    return sum;
}
console.log(numerosPares())

function suma(numArr){
    var sum=0;
    for(var i=0; i < numArr.length; i++){
        sum = sum+ numArr[i];
    }
    return sum
}
console.log(suma([2,3,4]));


function encuentraMayor(numArr){
    max=numArr[0];
    for(var i=0; i<numArr.length; i++){
        if(numArr[i]>max){
            max=numArr[i];
        }
    }
    return max;
}


console.log(encuentraMayor([2,7,6,5]));


function encuentraAvg(numArr){
   var sum=0
   var avg=0
   for(var i=0; i<numArr.length; i++){
       sum=sum+numArr[i];
   }
   avg=sum/numArr.length;
   return avg

}



console.log(encuentraAvg([3,4,6,7,8,10]));




function oddArray(){
    var arr=[];
    for(var i=1; i<50; i=i+2){
        arr.push(i);
    }
    return arr;
}

console.log(oddArray());

function impares5000() {
  sum_impar = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 != 0) {
      // SI ES IMPAR
      console.log("Numero Impar: " + i);
      sum_impar += i;
    } else {
      // NO ES IMPAR
      console.log("-------------");
    }
  }
  console.log("");
  return "SUMA IMPARES HASTA EL 5000: " + sum_impar;
}
y = impares5000();
console.log(y);

function greaterThat(x,y){
    var counter=0;
    for (var i=0; i<x.length; i++){
        if(x[i]>y){
            counter++;
        }
    }
    return counter;

}


w= greaterThat([2,3,4,6],3)
console.log(w);

function cuadrado(x) {
  for (var i = 0; i < x.length; i++) {
    var cuadrado = x[i] * x[i];
  }
  return x;
}

w = cuadrado([2, 3, 4]);
console.log(w);*/

/*Dado un array con múltiples valores, escribe una función que reemplace cualquier número
 negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos
(ej: [1,5,10,-2] se convertirá en [1,5,10,0]). */

/*function noNegativos(arr) {
  for (var i = 0; i < arr.length; i++) {
    // examine each value and see if it's negative.
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
}
noNegativos([-1,-3,-5])

function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var x = 0; x < arr.length; x++){
        sum = sum + arr[x];
        if (arr[x] > max){
            max = arr[x];
        }
        else if (arr[x] < min){
            min = arr[x];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
console.log(maxMinAvg([4,8,-2,5]));*/

function noNegativo(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    console.log(arr);
}
noNegativo([-3,6,-2]);