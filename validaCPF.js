function verificaCPFInvalido(cpf) {
  const cpfsInvalidos = [
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
    "00000000000",
  ];

  return cpfsInvalidos.indexOf(cpf) === -1;
}

function somaNumerosCPF(cpf, totalDeDigitos, peso) {
  let soma = 0;
  for (let indice = 1; indice <= totalDeDigitos; indice++) {
    soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice + 1)
  }

  return soma;
}

function verificarDigito(cpf, totalDeDigitos, peso, digitoDeVerificacao) {
  const soma = somaNumerosCPF(cpf, totalDeDigitos, peso);
  const resto = (soma * 10) % 11 == 10 || (soma * 10) % 11 == 11 ? 0 : (soma * 10) % 11;
  const digito = cpf[digitoDeVerificacao - 1];

  return resto == digito;
}

function verificaPrimeiroDigito(cpf) {
  const totalDeDigitosPrimeiraParte = 9;
  const peso = 10;
  const digitoDeVerificacao = 10;

  return verificarDigito(cpf, totalDeDigitosPrimeiraParte, peso, digitoDeVerificacao);
}

function verificaSegundoDigito(cpf) {
  const totalDeDigitosSegundaParte = 10;
  const peso = 11;
  const digitoDeVerificacao = 11;

  return verificarDigito(cpf, totalDeDigitosSegundaParte, peso, digitoDeVerificacao);
}

function validaCPF(cpf) {
  return(
    verificaCPFInvalido(cpf) &&
    verificaPrimeiroDigito(cpf) &&
    verificaSegundoDigito(cpf)
  )
}
