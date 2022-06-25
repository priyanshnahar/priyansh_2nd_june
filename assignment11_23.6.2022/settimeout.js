function hello() {
  console.log("Good Moning");
}
setTimeout(hello, 2000);
console.log("wait for 2 secs");

// setTimeout insdie the function

function hello() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 2000);
}
hello();

function hello() {
  setTimeout(() => {
    let a = ["hello", "world", "Good", "Morning"];
    console.log(a);
  }, 3000);
}
hello();
