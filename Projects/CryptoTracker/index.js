const trendingcoinSlideshow = document.getElementById(
  "trending_coin_slideshow"
);
const searchInput = document.getElementById("search_input");
const coinsContainer = document.getElementById("coins_container");
const searchbtn = document.getElementById("search_input_button");
const coin_container = document.getElementById("coin_container");
const coinid = new URLSearchParams(window.location.search).get("q");

console.log(coinid);

async function getTrendingCoins() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const response = await res.json();
  const BitcoinValue = await getBitcoinValue();
  //   console.log(BitcoinValue);
  const coins = response.coins;
  // console.log(coins);
  let html = "";
  for (let i = 0; i < coins.length; i++) {
    const coinname = coins[i].item.name; // each index has an object
    const coinprice = coins[i].item.price_btc * BitcoinValue.bitcoin.inr; // bitcoinvalue is again an object that has bitcoin as the key and inside that we have inr as the key which
    // has the value of inr bitcoin
    const coinsymbol = coins[i].item.small; // on line 23 , we are doing string concatenation.
    html =
      html +
      `<div id="trending_coins_container">
          <img
            src="${coinsymbol}"
            alt=""
            id="trending_coin_image"
          />
          <div id="coin_info_container">
            <h3 class="coin_name">${coinname}</h3>
            <h4 id="coin_price">${coinprice.toFixed(6)}</h4>
          </div>
        </div>`;
    if (trendingcoinSlideshow != null) {
      trendingcoinSlideshow.innerHTML = html;
    }
  }
}

getTrendingCoins && getTrendingCoins();
// const bitcoinValue = await getBitcoinValue();
// console.log(bitcoinValue);
async function getBitcoinValue() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr"
  );
  const response = await res.json();
  // console.log(response);
  return response;
}

searchbtn && searchbtn.addEventListener("click", getcoins);

async function getcoins() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${searchInput.value}`
  );
  const response = await res.json();
  console.log(response);
  let html = "";
  for (let i = 0; i < response.coins.length; i++) {
    const coins = response.coins[i];
    const name = coins.name;
    const img = coins.large;
    const symbol = coins.symbol;
    // const serial_no = i + 1;
    html += ` <div id="main_info">
        <div id="coins_container_info">
          <h5 id="serial_number">${i + 1}</h5>
          <img
            class="coin_name"
            src="${img}"
            alt=""
            id="trending_coin_image"
          />
          <h2 id="coins_container_name">${name}</h2>
          <h2 id="coins_container_name">${symbol}</h2>
        </div>
        <div>
          <a href='./Viewmore.html?q=${coins.id}'>
            <button id="MoreInfo">More info</button>
          </a>
        </div>
      </div>`;
    coinsContainer.innerHTML = html;
  }
}

async function getMoreData(coinid) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
  console.log(coinid);
  const response = await res.json();
  console.log(response);
  const coin_name = response.name;
  if (response.market_data.current_price != undefined) {
    var inr_price = response.market_data.current_price.inr;
    var dollar_price = response.market_data.current_price.usd;
    var euro_price = response.market_data.current_price.eur;
    var pound_price = response.market_data.current_price.gbp;
    var description = response.description;
    var coin_image = response.image.large;
  }
  let html = "";
  html += `
        <div id="coin_heading">
        <h2>${coin_name}</h2>
      </div>
      <div id="coins_price">
        <div id="coin_rupees">₹ ${inr_price}</div>
        <div id="coin_dollar">$ ${dollar_price}</div>
        <div id="coin_euro">€ ${euro_price}</div>
        <div id="coin_pound">£ ${pound_price}</div>
      </div>
      <div id="coin_description">
      <img src = ${coin_image}>
        <h1>Description</h1>
        <p>${description.en}</p>
      </div>
  `;
  if (coin_container != null) {
    coin_container.innerHTML = html;
  }
  //
  //
}
getMoreData(coinid);
