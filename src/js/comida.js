import { stringParaFloat } from "./helpers.js";

let multiplicadorBovina = 0.2;
let multiplicadorFrango = 0.1;
let multiplicadorSuina = 0.1;

function calcularComida({
  quantidadeConvidados,
  valorBovina,
  valorFrango,
  valorSuina,
}) {
  let quantidadesComida = quantidade(quantidadeConvidados);
  let valoresComida = valor(
    quantidadesComida,
    valorBovina,
    valorFrango,
    valorSuina
  );
  return {
    quantidades: {
      ...quantidadesComida,
    },
    valores: {
      ...valoresComida,
    },
    totais: {
      ...total(quantidadesComida, valoresComida),
    },
  };
}

function quantidade(convidados) {
  let bovina, frango, suina;
  bovina = convidados * multiplicadorBovina;
  frango = convidados * multiplicadorFrango;
  suina = convidados * multiplicadorSuina;

  return { bovina, frango, suina };
}

function valor(quantidadesComida, valorBovina, valorFrango, valorSuina) {
  let bovina, frango, suina;

  bovina = quantidadesComida.bovina * stringParaFloat(valorBovina);
  frango = quantidadesComida.frango * stringParaFloat(valorFrango);
  suina = quantidadesComida.suina * stringParaFloat(valorSuina);

  return { bovina, frango, suina };
}

function total(quantidadesComidas, valoresComida) {
  let valorTotal =
    valoresComida.bovina + valoresComida.frango + valoresComida.suina;
  let quantidadeTotal =
    quantidadesComidas.bovina +
    quantidadesComidas.frango +
    quantidadesComidas.suina;

  return { valorTotal, quantidadeTotal };
}

export { calcularComida };
