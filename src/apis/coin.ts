const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  const data = await (await fetch(`${BASE_URL}/coins`)).json();
  return data.slice(0, 100);
}

export async function fetchCoinInfo(coinId: string) {
  const data = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  return data;
}

export async function fetchCoinPrice(coinId: string) {
  const data = await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
  return data;
}

export async function fetchCoinHistory(coinId: string) {
  const data = await (
    await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
  ).json();
  return data;
}
