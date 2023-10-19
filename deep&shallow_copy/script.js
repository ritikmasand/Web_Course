// let obj = {
//   age: "24",
//   background: "indian",
//   languages_known: "English and Hindi",
// };

// let obj1 = obj;
// obj.background = "African";

// console.log(obj);  // american
// console.log(obj1); // american

// shallow copy .

// deep copy

// let b = {
//   time: "21:12",
//   location: "India",
//   state: "Delhi",
// };

// let e = JSON.parse(JSON.stringify(b));
// // let d = JSON.stringify(b); // seperate location
// // let e = JSON.parse(d); // different location as we are converting it from strings

// e.state = "Uttrakhand";
// console.log(b, e);

// let c = { ...b }; // spread operator

// c.state = "Mumbai";

// console.log(b);
// console.log(c);

let obj = {
  dummy: {
    name: {
      firstName: "John", // depth 3
    }, 
  },
  laptop: "Omen", // depth 1
};

let obj1 = JSON.parse(JSON.stringify(obj));

obj1.dummy.name.firstName = "Imran";
console.log(obj,obj1);
// obj1.laptop = "Macbook";
