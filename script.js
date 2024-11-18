// script.js

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Credenciais de teste (podem ser substituídas)
    const validEmail = "usuario@teste.com";
    const validPassword = "123456";

    // Captura os valores inseridos pelo usuário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validação de credenciais
    if (email === validEmail && password === validPassword) {
        // Redireciona para a homepage se as credenciais forem válidas
        window.location.href = 'homepage.html';
    } else {
        // Exibe mensagem de erro se as credenciais estiverem incorretas
        errorMessage.textContent = "E-mail ou senha incorretos!";
    }
});
