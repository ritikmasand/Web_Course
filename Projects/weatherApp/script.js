var inputValue = document.querySelector(".input");
var windspeed = document.querySelector(".windspeed");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var apiKey = "1fdbf0a2f50cd3d40b9b0a5017429296";

function input(e) {
  e.preventDefault();
  //   console.log(e);
  var word = document.querySelector("#inputValue").value;
  console.log(word);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var TempValue = data.main.temp;
      var descValue = data.weather[0].description;
      var WindSpeedValue = data.wind.speed;

      temp.innerHTML = "Temperature:" + " " + Math.floor((TempValue - 273)) + "Celcius";
      desc.innerHTML = "Description: " + descValue;
      windspeed.innerHTML = "Wind Speed: " + WindSpeedValue;
    });
}

inputValue.addEventListener("submit", input);
