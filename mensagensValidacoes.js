const mensagemSucesso = ( mensagem ) => {
  const linha = document.createElement('p');

  const conteudoLinha = `
    <div class="alert alert-success" role="alert">
      ${mensagem}
    </div>
  `;

  linha.innerHTML = conteudoLinha;

  return linha;
}

const mensagemErro = ( mensagem ) => {
  const linha = document.createElement('p');

  const conteudoLinha = `
    <div class="alert alert-warning" role="alert">
      ${mensagem}
    </div>
  `;

  linha.innerHTML = conteudoLinha;

  return linha;
}
