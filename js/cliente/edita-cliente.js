const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');


const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalheCliente(id).then((cliente) => {
  inputNome.value = cliente[0].nome;
  inputCPF.value = cliente[0].cpf;
});

const formEdicao = document.querySelector('[data-form]');

formEdicao.addEventListener('submit', (event) => {
  event.preventDefault();

  let result = validaCPF(inputCPF.value);

  if (!validaCPF(inputCPF.value)) {
    alert('Ops... O CPF digitado é invalido, digite um numero valido!');
    return;
  }

  editaCliente(id, inputCPF.value, inputNome.value).then((res) => {
      if (res.status === 200) {
        formEdicao.appendChild(mensagemSucesso('Cliente editado com sucesso'))
      } else {
        formEdicao.appendChild(mensagemErro('Erro ao editar o cliente'))
      }
  });
})
