const searchInput = document.getElementById("search_input");
const coinsContainer = document.getElementById("coins_container");
const searchbtn = document.getElementById("search_input_button");
const coins_container = document.getElementById("coin_container");
const trendingcoinSlideshow = document.getElementById(
  "trending_coin_slideshow"
);


async function getTrendingCoins() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const response = await res.json();
  const BitcoinValue = await getBitcoinValue();
  //   console.log(BitcoinValue);
  const coins = response.coins;
  console.log(coins);
  let html = "";
  for (let i = 0; i < coins.length; i++) {
    const coinname = coins[i].item.name; // each index has an object
    const coinprice = coins[i].item.price_btc * BitcoinValue.bitcoin.inr; // bitcoinvalue is again an object that has bitcoin as the key and inside that we have inr as the key which
    // has the value of inr bitcoin
    const coinsymbol = coins[i].item.small; // on line 23 , we are doing string concatenation.
    html = html+ `<div id="trending_coins_container">
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
     trendingcoinSlideshow.innerHTML = html;
  }
}

getTrendingCoins();
// const bitcoinValue = await getBitcoinValue();
// console.log(bitcoinValue);
async function getBitcoinValue() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr"
  );
  const response = await res.json();
  //   console.log(response);
  return response;
}
