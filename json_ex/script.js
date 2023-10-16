import json from "./Json_data.js";

const jsn = document.getElementById("json");
const tags = document.getElementById("friends");
console.log(tags);
console.log(json);

json.forEach((element) => {
  const list = document.createElement("li");

  list.innerHTML = `${element.address}`;
  jsn.appendChild(list);
});

const friends = json.map((elem) => {
  return elem.friends;
});
console.log(friends);

friends[0].forEach((elem) => {
  const list = document.createElement("li");
  list.innerHTML=`${elem.name}`
  tags.appendChild(list);
});
