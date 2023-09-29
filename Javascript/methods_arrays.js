// length :

// it will just return the length of the array

// for ex:

// const arr = [1,2,45,6,78]
// console.log(arr.length);

// map (v,v,v,v,v.imp)

// // var i = 1;

// for (let j = 0; j < arr.length; j++) {
//   const sq = arr[j] * arr[j];
//   arr[j] = sq;
// }
// console.log(arr);

// const sq_arr = arr.map((i, arr) => {
//   return i * i;
// });
// console.log(sq_arr);   // sq
// console.log(arr);     //

// function fn() {
//   console.log("fn");
// }

// const help = (fn) => {
//   console.log(fn);
// };

// help();

// fn -> callback
// help -> high-order-function

// const arr = [40, 20, 30, 40, 50];

const passing_marks = arr.filter((i , idx , arr) => {
  if (i >= 40) {
    return true;
  } else return false;
});
console.log(passing_marks);



