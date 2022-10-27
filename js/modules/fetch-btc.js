export default function fetchBtc(url, target) {
  const btcPreco = document.querySelector(target);

  async function getBTC() {
    try {
      // Faz o fetch, armazena e transforma em json
      const btcResponse = await fetch(url);
      const btcJSON = await btcResponse.json();

      // Coloca o texto do elemento selecionado num vaLor de 100 reais em bitcoin arrendondados
      btcPreco.innerText = (100 / btcJSON.BRL.sell).toFixed(6);
    } catch (erro) {
      console.log(erro);
    }
  }

  getBTC();
}
