console.log("promises");

const p = new Promise((resolve, reject) => {
  console.log("ABCD");
  reject("Your promise has been resolved");
});

console.log(p);

p.then((d) => {
  console.log(d);
  console.log("promise fulfilled , doing something else");
}).catch(() => {
  console.log("promise has been rejected");
});


// interview ques : 

// 1 . what is a promise . 
// 2 . states of prmomises . 
// 3 . .then?
// 4 . .catch?
// 5 . when to use promises?