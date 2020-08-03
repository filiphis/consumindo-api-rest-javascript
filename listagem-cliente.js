let $ = document.querySelector.bind(document);

let corpoTabela = $("[data-conteudo-tabela]");

{/* <button class="btn btn-danger" type="button" onClick=(deletarCliente(${id}))>Deletar</button> */}

function removeCliente(id) {
  if (confirm('Tem certeza que desja remover o cliente ? Ele não poderá ser recuperado !')) {
    deletarCliente(id);
  }
}

const exibeCliente = ({nome, cpf, id}) => {
  const linha = document.createElement('tr');

  const conteudoLinha = `
    <td>${nome}</td>
    <td>${cpf}</td>
    <button
      class="btn btn-danger"
      type="button"
      onclick="removeCliente(${id})"> Deletar
    </button>
    <a
      href="./edita-clientes.html?id=${id}"
      class="btn btn-info"
    >
      Editar
    </a>
  `;

  linha.innerHTML = conteudoLinha;

  return linha;
}



listarClientes().then((clientes) => {
  clientes.map((cliente) => {
    corpoTabela.appendChild(exibeCliente(cliente))
  })
});
