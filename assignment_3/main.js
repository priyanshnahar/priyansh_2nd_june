var name = "priyansh";
var a = [1, 2, 3, "priyansh", true, false];

var priyansh = {
  name: "priyansh",
  age: 23,
  graduation: "BJMC",
  covidVaccine: true,
};

function one() {
  console.log("Start");
}
function two() {
  setTimeout(() => {
    console.log("MID");
  }, 2000);
}

function three() {
  console.log("END");
}

one();
two();
three();

// JS variables

// var
var x = 10;
var y = 9;
var z = x + y;

// let (if value of variables can change we have to use let)
let x = 10;
let y = 9;
let z = 10 + 9;

// const
const share1 = 5;
const share2 = 6;
let total = share1 + share2;

// Arthmetical operators in JS
// +Addition;
let a = 10;
let b = 20;
let c = a + b;
console.log(c);

//  - Subtraction;
let x = 10;
let y = 20;
let z = x - y;
console.log(z);

// * Multiplication;
let x = 50;
let y = 20;
let z = x * y;
console.log(z);

// / Division;
let x = 10;
let y = 20;
let z = x / y;
console.log(z);

//  % Modulus;
let x = 10;
let y = 20;
let z = x % y;
console.log(z);

// ++Increment;
let x = 10;
x++;
let y = x;
console.log(x);

// --Decrement;
let x = 10;
x--;
let y = x;
console.log(x);
