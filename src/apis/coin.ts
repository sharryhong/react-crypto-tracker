export async function fetchCoins() {
  const data = await (await fetch(`/coins`)).json();
  return data.slice(0, 100);
}

export async function fetchCoinInfo(coinId: string) {
  const data = await (await fetch(`/coins/${coinId}`)).json();
  return data;
}

export async function fetchCoinPrice(coinId: string) {
  const data = await (await fetch(`/tickers/${coinId}`)).json();
  return data;
}

export async function fetchCoinHistory(coinId: string) {
  const data = await (
    await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
  ).json();
  return data;
}
