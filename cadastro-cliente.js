const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.querySelector('[data-nome]').value;
    const cpf = this.querySelector('[data-cpf]').value;

    if(validaCPF(cpf)){
      cadastrarCliente(nome, cpf);
      formCadastroCliente.appendChild(mensagemSucesso('Cliente cadastrado com sucesso'));
    } else {
      alert('Ops... o CPF informado está incorreto !');
    }
})
