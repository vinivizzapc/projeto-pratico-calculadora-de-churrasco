// Validações de Alerta
function validacoes(informacoesDeEntrada) {
  let valorCerveja = informacoesDeEntrada.cerveja.value;
  let quantidadePessoasBebemCerveja =
    informacoesDeEntrada.quantidadePessoasBebemCerveja.value;

  if (
    verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) &&
    verificarValorPessoas(valorCerveja, quantidadePessoasBebemCerveja)
  ) {
    return true;
  }
  return false;
}

function verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) {
  if (quantidadePessoasBebemCerveja !== "" && valorCerveja === "") {
    alert("É necessário informar o valor da cerveja");
    return false;
  }

  return true;
}

function verificarValorPessoas(valorCerveja, quantidadePessoasBebemCerveja) {
  if (valorCerveja !== "" && quantidadePessoasBebemCerveja === "") {
    alert("É necessário informar a quantidade de pessoas que beberão cerveja");
    return false;
  }

  return true;
}

// Validações de Campos
function validacoesCampos(informacoesDeEntrada) {
  verificarNumeroDePessoasBebem(
    informacoesDeEntrada.quantidadePessoasBebemCerveja,
    informacoesDeEntrada.convidados
  );
  verificarQuantidadeConvidados(informacoesDeEntrada.convidados);
}

function verificarNumeroDePessoasBebem(pessoasBebem, convidados) {
  pessoasBebem.addEventListener("input", () => {
    if (parseInt(pessoasBebem.value) > parseInt(convidados.value)) {
      pessoasBebem.setCustomValidity(
        "O número de pessoas que bebem precisa ser menor que a quantidade de convidados"
      );
      return;
    }
    pessoasBebem.setCustomValidity("");
  });
}

function verificarQuantidadeConvidados(convidados) {
  convidados.addEventListener("input", () => {
    if (parseInt(convidados.value) < 2) {
      convidados.setCustomValidity(
        "Você precisa ter mais de uma pessoa para fazer o churrasco"
      );
	  return;
    }
	convidados.setCustomValidity("");
  });
}

export { validacoes, validacoesCampos };
