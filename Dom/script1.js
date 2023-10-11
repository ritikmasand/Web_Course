// Q1
const elements = document.getElementsByClassName("shrey");
console.log(elements);

// Q2
const para_elem = document.getElementById("shubham");
console.log(para_elem);

const divv = document.getElementById("magicdiv");

const li_items = document.getElementsByTagName("li");
console.log(li_items);

const li_array = Array.from(li_items);
console.log(li_array);

const ip = document.getElementsByName("input1");
console.log(ip);

const ip_array = Array.from(ip);
console.log(ip_array);


// ip.style.backgroundColor = "yellow";
// 1. html collection (objects) - ✅ Q1
// 2. Node List (array)  - rajat(Q1)
// 3. array - imaran (Q1)
// 4. element - rajat, imran (Q2)

elements[1].addEventListener("click", () => {
  elements[1].innerText = "Lets write magic";
  divv.innerHTML = `
  <h1> This is a magic div </h1>
  `;

  arr_elements.forEach((elem) => {
    console.log(elem);
    elem.style.backgroundColor = "red";
    elem.style.padding = "20px";
    // elem.style.visiblity = 'visible'
  });
});

// elements.array.forEach((element) => {
//   console.log("iterated");
// });

const arr_elements = Array.from(elements);
console.log(arr_elements);

console.log(arr_elements.length);
