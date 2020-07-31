let $ = document.querySelector.bind(document);

const informacoesClientes = [
  {
    nome: "Luiz",
    cpf: "11111111111"
  },
  {
    nome: "mozao da minha vida",
    cpf: "1212313231"
  },
  {
    nome: "Pão de batãtã",
    cpf: "7897897891"
  }
  // {
  //   nome: "Luiz",
  //   cpf: "11111111111",
  // }
]

// const conteudoLinha = informacoesClientes.map(cliente => `<tr><td>${cliente.nome}</td><td>${cliente.cpf}</td></tr>`).join('');

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

informacoesClientes.map(({nome, cpf}) => {
  corpoTabela.appendChild(exibeCliente(nome, cpf))
});