export default function initFetchBitcoin(url, target) {
  async function fetchBitcoin() {
    try {
      const bitcoinR = await fetch(url);
      const bitcoinJson = await bitcoinR.json();
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoinJson.BRL.buy).toFixed(5);
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchBitcoin(url);
}
