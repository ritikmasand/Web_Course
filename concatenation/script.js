//

// let a = "10";
// let b = "20";

// console.log(a + b);

// 1020

// console.log(a - b);

// -10
// console.log(a * b);

// 200

// console.log(a / b);

// 0.5

// console.log(a % b); // modulo
// modulo will calculate the remainder .

// 10

// let c = "101";
// let d = "100";
// let e = 103;

// console.log(c + d + e);

// c+d

// "101100" + 103

// 101100103

// console.log(1 + "1");

// console.log(Math.round(Math.random() * 10));

// const a2 = 10 + 10 + 10 + "20";
// console.log(a2);

// 3020 / 10101020 / 201020 /

// option 1 :

// 20 + 10 + '20'
// 30 + '20'
// '3020'
// console.log(a2);

// const a3 = "10" + 10 + 10 + 10;
// console.log(a3);

// 10101010

// '1010' + 10 + 10 + 10
// '101010' + 10 + 10
// '10101010' + 10
// '1010101010'

// const a4 = "10" + (10 + 10 + 10);
// console.log(a4);

// // 1030

// // '10' + (30)
// // '1030'

// const a5 = "10" + 10 ** 2;
// console.log(a5);

// '10' + 100

// 10100

// const a6 = "10" + 10 - 10;
// console.log(a6);

// // "1010" -10
// // 1000

// const a7 = "10" + 30 - 10;

// console.log(a7);

// const a8 = 10 + 10 - 10 + "10" - "10" + 20 - 30 + "0";

//20 -10 + '10' - '10' + 20 - 30 + "0"

// 10 + '10' - '10' + 20 - 30 + "0"

// '1010' - '10' + 20 - 30 + '0'

// 1000 + 20 - 30 + '0'

// 1020 - 30 + '0'

// 990 + '0'

// 9900
// console.log(a8);
// // 320

// const a9 = "abcd" - "xyx";
// console.log(a9);

// const a10 = 10 * "2";
// console.log(a10);

//
// Your OTP for transaction for <amount> Rupees with Card Number ending XX <Card Number> is <OTP VALUE>
//

//
// const amount = 60000;
// const cardNumber = 3328;
// const otp =
//   "" +
//   Math.floor(Math.random() * 10) +
//   Math.floor(Math.random() * 10) +
//   Math.floor(Math.random() * 10) +
//   Math.floor(Math.random() * 10);

// // "" + 1 + 2 + 3 + 4

// // "1" + 2 + 3 + 4
// // "12" + 3 + 4
// // "123" + 4
// // "1234"
// // console.log(otp);
// const str = `Your OTP for transaction for ${amount} Rupees with Card Number ending XX${cardNumber} is ${otp}`;
// console.log(str);

// const my_fname = "Imran";
// const my_lname = "Hashmi";
// const my_role = "educator";

// hello my name is <my_fname> <my_lname> and i am a <my_role>

// Q : You have to print the above statement with the details. Note : You cannot use string concatenation .

const products = [
  { product2: "banana", price: 69 },
  { product2: "mango", price: " " },
  { product2: "watermelon", price: 49 },
  { product2: "apples", price: " " },
  { product2: "guavava", price: 90 },
  { product2: "Pineapple", price: 110 },
];

// const filteredlist1 = products
//   .filter((elem) => {
//     if (elem.price == " ") {
//       return false;
//     } else return true;
//   })
//   .map((fruit) => {
//     return fruit.product2;
//   });

// console.log(filteredlist1);

//
// const filteredlist2 = products
//   .filter((elem) => {
//     if (typeof elem.price == "number") {
//       return true;
//     } else return false;
//   })
//   .map((elem1) => {
//     elem1.product2;
//   });
// console.log(filteredlist2);

const str = "Humpty dumpty sat on a wall and had a great fall";
// output = Humpty Dumpty Sat On A Wall And Had A Great Fall

let word_arr = str.split(" ");
console.log(word_arr);

word_arr = word_arr.map((elem) => {
  console.log(elem);
  return elem[0].toUpperCase() + elem.substring(1);
});
const result = word_arr.join(" ");
//   console.log(result);

// arr = [Humpty]

// arr[0] =

console.log(word_arr[0].toUpperCase());

// Humpty Dumpty Sat
