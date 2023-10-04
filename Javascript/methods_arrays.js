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

// const passing_marks = arr.filter((i , idx , arr) => {
//   if (i >= 40) {
//     return true;
//   } else return false;
// });
// console.log(passing_marks);

// for-each

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((element , index) => {
//   console.log(element , index);
// });

// some

// filter

// const filt_arr = arr.filter((elem) => {
//   return elem % 2 == 0;
// });
// console.log(filt_arr);

// const obj = [
//   {
//     name: "John",
//     marks: 43,
//   },
//   {
//     name: "imran",
//     marks: 60,
//   },
//   {
//     name: "rajat",
//     marks: 40,
//   },
//   {
//     name: "anshul",
//     marks: 65,
//   },
//   {
//     name: "priya",
//     marks: 42,
//   },
//   {
//     name: "ritik",
//     marks: 22,
//   },
// ];

// Q1 : Find out if any student has failed or not (if failed : true , else false)
// Q2 : we have a passing criteria , the marks should be >= 45 . I want to know all the students who have failed /

// [rajat , priya , ritik]

// console.log(
//   obj.some((elem) => {
//     return elem.marks <= 45;
//   })
// );

// const pass_list = obj
//   .filter((elem) => {
//     return elem.marks >= 45;
//   })
//   .map((elem) => {
//     return elem.name;
//   });
// console.log(pass_list);

// syntax ;

// Array.method((callback)=>{
// // codition
// }
// )

// reverse

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr.reverse())

// find

console.log(
  arr1.find((elem) => {
    return elem % 2 == 0;
  })
);


// findindex