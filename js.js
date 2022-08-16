// function f1(a, b, c) {}
// // sum3(1000, 2000);

// let x = 55;
// let y = 44;

// function sum2() {
//   console.log(x + y);
// }
// sum2();

// x = 100;
// y = 200;
// sum2();

// function sum3(x1 = 0, y1 = 0) {
//   console.log(x1 + y1);
// }

// sum3(44, 11);
// sum3(100, 200);
// let z = 77;
// sum3(z, 10);
// sum3(z, z * 2);
// sum3(2, 3, 4, 5);

// function showSum(elem, x, y) {
//   document.querySelector(elem).textContent = x + y;
// }
// showSum(".out-2", 3, 7);

// function showSum2(elem, x, y) {
//   elem.textContent = x + y;
// }
// showSum(".out-2", 3, 7);
// showSum2(document.querySelector(".out-1"), 311, 7);
// // showSum(document.querySelector(".out-1"), 11, 7);
// const out1 = document.querySelector(".out-1");
// showSum2(out1, 7, 6);

// function showSum3(x, y, elem = ".out-1") {
//   console.log(arguments);
//   document.querySelector(arguments[2]).textContent =
//     arguments[0] + arguments[1];
// }
// showSum3(20, 45, ".out-2");

// function showSum3(x, y, elem = ".out-1") {
//   console.log(arguments);
//   document.querySelector(elem).textContent = x + y;
// }
// showSum3(10, 15, "out-2");

// function showSumAll() {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }

// console.log(showSumAll(4, 5, 6, 20, 50));

// // function showSumAll2(...ghjyt) {
//   console.log(ghjyt);
//   // let sum = 0;
//   // for (let i = 0; i < arguments.length; i++) {
//   //   sum += arguments[i];
//   let sum = ghjyt.reduce((accum, item) => (accum += item));
//   console.log(sum);
// }

// console.log(showSumAll2(4, 5, 6, 20, 50));

function showAll(res) {
  document.querySelector(".out-1").innerHTML = `<b> ${res} </b>`;
}

function showSumAll3(x, y) {
  y(x);
}

showSumAll3(45, showAll);
