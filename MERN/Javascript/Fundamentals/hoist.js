/*//1
var hello;
console.log(hello);
hello = "world";

//2
/*var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

var needle;
function test() {
  var needle;
  needle = "magnet";
  console.log(needle);
}

needle = "haystack";
test();
console.log(needle);*/

//3
/*var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}

var brendan;
function print() {
  let brendan = "only okay";
  console.log(brendan);
}

brendan = "super cool";
print();
console.log(brendan);*/

//4
/*var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

*/

/*var food;
function eat() {
  food = 'half-chicken';
  console.log(food);
  let food = 'gone';
  console.log(food)
}
food = "chicken";
eat();
console.log(food);*/


//5
/*mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}*/

/*mean();  // aca ejecuta la funciona mean.

function mean() {  // por hoist se fue arriba.
    var food; // hoist de var food = "fish";
    food = "chicken"; // por ende esto funciona
    console.log(food);
    food = "fish";  // no tiene el var, porque se fue arriba por hoist
    console.log(food);
}
mean();

//6
/*console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


var genre;
function rewind() {
  var genre;
  genre = "rock";
  console.log(genre);
  genre = "r&b";
  console.log(genre);
}
console.log(genre);

genre="disco";
rewind();
console.log(genre);
*/

7//
/*dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

var dojo;
function learn() {
  var dojo;
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}

dojo="san jose";
learn();
console.log(dojo);*/

8//
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


function makeDojo(name, students){
  let dojo = {};
  dojo.name = name;
  dojo.students = students;
  if(dojo.students > 50){
      dojo.hiring = true;
  }
  else if(dojo.students <= 0){
      dojo = "closed for now";
  }
  return dojo;
}
dojo='makeDojo';
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));