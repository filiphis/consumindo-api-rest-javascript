const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

console.log(id);

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalheCliente(id).then((cliente) => {
  inputNome.value = cliente[0].nome;
  inputCPF.value = cliente[0].cpf;
});


const formEdicao = document.querySelector('[data-form]');

formEdicao.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Enviado');

  if (!validaCPF(inputCPF.value)) {
    alert('Ops... O CPF digitado é invalido, digite um numero valido!');
    return;
  }

  console.log('Passou do cpf');

  editaCliente(id, inputCPF.value, inputNome.value);
})
