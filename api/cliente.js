// fetch: Faz a requisição e fica aguardando resposta
// then: será executado após a promise ser resolvida
listarClientes = () => {
  return fetch('http://localhost:4000/clientes') 
  .then((resposta) => {
    return resposta.json();
  })
  .then((json) => {
    return json;
  })
}
