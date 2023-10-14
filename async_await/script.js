// async and await

const btn = document.getElementById("main_btn");
const id = document.getElementById("login_id");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://fakoreapi.com/products");
    // fetch returns us a promise . on resolution , we get the response object .
    // from this object , we need to extract the body which contains the data that we want
    const data = await response.json();
    //   const data_2 = await fetch("https://api.github.com/users/ritikmasand");
    //   const userdata = await data_2.json();
    //   const userdata2 = Object.entries(userdata);
    //   console.log(userdata2);
    //     console.log(userdata);
    //   console.log(userdata);
    //   id.innerHTML = `<span>${userdata.login} </span>`;
    //   const final_array = [...userdata2, ...data];
    console.log(data);
  } catch (err) {
    console.log("error loading the data !! OOPS 404!!!");
  }
});
const obj = {
  name: "Ritik",
  age: "24",
  hoobby: "cricket",
};

console.log(JSON.stringify(obj));

const obj1 = '{"name":"Ritik","age":"24","hoobby":"cricket"}'
console.log(JSON.parse(obj1))