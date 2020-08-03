// fetch: Faz a requisição e fica aguardando resposta
// then: será executado após a promise ser resolvida
const listarClientes = () => {
  return fetch('http://localhost:4000/clientes')
  .then((resposta) => {
    return resposta.json();
  })
  .then((json) => {
    return json;
  })
}


const cadastrarCliente = (nome, cpf) => {
  const json = JSON.stringify({
    nome,
    cpf,
  });
  return fetch('http://localhost:4000/clientes/cliente', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
  .then(res => {
    res.body
  })
}

const deletarCliente = (id) => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'DELETE'
  });
}
