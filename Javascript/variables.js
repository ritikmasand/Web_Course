// var a; // variable declaration
// a=10;  // variable assignment

// var
// var a = 10; // shortcut for declaring and assigning altogther

// console.log(a); // 10

// {
//   a = 20; // this is a block
// }
//    console.log(a);
// let
// let a = 10;

// console.log(a); // 10

// {
//   let a = 20;
//   console.log(a); // 20
// }
// console.log(a);  // 10

// re-declare  ✅
// re-assign   ✅

// const

// const a = 10;
// console.log(a); // 10
// {
// //   a = 20;
//   console.log(a); // undefined
// }
// console.log(a); //  10

// re-assign   ❌
// re-declare  ❌

// var a = 10;
// var b = 20;
// var c = a+b;
// console.log(c);

// var c=40;
// var d=80
// var e = 40+80;
// console.log(e);

// function add(a, b) {
//   console.log(a + b, "ritik");
// }
// add(10, 10);
// add(20, 20);
// add(100, 100);
// add()

// method overridng and method overloading  (self-understand)

// arrow functions

// const fn = () =>{
//   console.log("hello world")
// }

// fn()

// function fn() {
//   console.log("named function");
//   const fn1 = () => {
//     console.log("arrow function");
//   };
//    return fn1;
// }
// var a = fn();
// a()

// if statements

// var a = 10;
// var b = 20;

// function z(v) {
//   console.log("function called");
//   return v;
// }

// if (a < b) {
//  var fn = z(10)
//  console.log(fn);
// }
// console.log("b is less than a ");

// var a = 10;
// var b = 20;
// var c = 30;
// if (a < b) {
//   // true
//   if (c > b) {
//     // true
//     console.log("c is greater than b"); // answer
//   } else {
//     console.log("conditions mismatched");
//   }
// } else {
//   console.log("we are outside");
// }

// var a = 10;
// var b = 20;
// var c =30;
// if (a < b) {
//   console.log("a is less than b");
// } else {
//   console.log("b is less than a");
// }


// a<b ? c<b ? console.log('c is greater') : console.log('a is greater') : console.log('outside');