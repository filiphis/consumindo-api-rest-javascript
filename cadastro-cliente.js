const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.querySelector('[data-nome]').value;
    const cpf = this.querySelector('[data-cpf]').value;

    cadastrarCliente(nome, cpf);
})