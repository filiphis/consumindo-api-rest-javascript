let $ = document.querySelector.bind(document);

let corpoTabela = $("[data-conteudo-tabela]");

const exibeCliente = (nome, cpf) => {
  const linha = document.createElement('tr');

  const conteudoLinha = `
    <td>${nome}</td>
    <td>${cpf}</td>
  `;

  linha.innerHTML = conteudoLinha;

  return linha;
}

console.log(listarClientes());

listarClientes().then((exibe) => {
  exibe.map(({nome, cpf}) => {
    corpoTabela.appendChild(exibeCliente(nome, cpf))
  })
});