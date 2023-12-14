export function SearchEth(coinInput) {
  console.log("run");
  const url = `https://etherscan.io/tx/${coinInput}`;
  window.open(url, "_blank");
}

export function SearchArbitrum(coinInput) {
  const url = `https://arbiscan.io/tx/${coinInput}`;
  window.open(url, "_blank");
}
