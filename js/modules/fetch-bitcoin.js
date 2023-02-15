export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinR = await fetch(url);
      const bitcoinJson = await bitcoinR.json();
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / bitcoinJson.BRL.buy).toFixed(5);
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchBitcoin('https://blockchain.info/ticker');
}
