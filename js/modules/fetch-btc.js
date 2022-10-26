export default function initFetchBtc() {
  async function getBTC(url) {
    try {
      const btcResponse = await fetch(url);
      const btcJSON = await btcResponse.json();
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / btcJSON.BRL.sell).toFixed(6);
    } catch (erro) {
      console.log(erro);
    }
  }

  getBTC("https://blockchain.info/ticker");
}
