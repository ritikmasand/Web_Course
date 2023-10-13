const follower = document.getElementById("followers");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const promise = fetch("https://api.github.com/users/ritikmasand");
  console.log(promise);
  var fol;
  promise.then((resp) => {
    const data = resp.json();
    console.log(data);
    data.then((text) => {
      console.log(text);
      fol = text.following;
      follower.innerHTML = `${fol} 
         <img src="https://avatars.githubusercontent.com/u/77391068?v=4" alt="">
      `;
    });
  });
});
