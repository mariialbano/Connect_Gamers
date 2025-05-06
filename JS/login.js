document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    const usuarioInput = document.getElementById('usuario');
    const passwordInput = document.getElementById('password');
    const loginContainer = document.querySelector('.login-form-container');

    if (!form || !usuarioInput || !passwordInput || !loginContainer) {
        console.error('Erro: Elementos do formulário não encontrados.');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        // Validate the form
        const usuario = usuarioInput.value.trim();
        const password = passwordInput.value.trim();

        if (!usuario || !password) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
    });
});
