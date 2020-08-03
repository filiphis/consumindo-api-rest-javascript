// fetch: Faz a requisição e fica aguardando res
// then: será executado após a promise ser resolvida
const listarClientes = () => {
  return fetch('http://localhost:4000/clientes')
  .then((res) => {
    return res.json();
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


const detalheCliente = (id) => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`)
  .then((res) => {
    return res.json();
  });
}

const editaCliente = (id, cpf, nome) => {
  const json = JSON.stringify({
    nome,
    cpf,
  });
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: json,
  })
}
