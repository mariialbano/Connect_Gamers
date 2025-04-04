document.addEventListener("DOMContentLoaded", function () { // Manipulação do DOM para interações em tempo real
    const jogoSelecao = document.getElementById("jogo-selecao");
    const eventoContainer = document.getElementById("evento-container");
    const form = document.getElementById("formulario"); // Seleciona o formulário
    const formContainer = document.getElementById("form-container2"); // Container do formulário
  

    // Eventos para cada jogo
    const eventosPorJogo = {
        fortnite: ["Modo de Jogo 2x2 - Sábado - Das 15:00 as 17:00", "Modo de Jogo 4x4 - Domingo - Das 15:00 as 17:00"], // Utilização de Arrays para organizar o código
        valorant: ["Modo de Jogo 5x5 - Sábado - Das 21:00 as 23:00", "Modo de Jogo 5x5 - Domingo - Das 21:00 as 23:00"],
        cs: ["Modo de Jogo 5x5 - Sábado - Das 13:00 as 15:00", "Modo de Jogo 5x5 - Domingo - Das 13:00 as 15:00"],
        "rocket-league": ["Modo de Jogo 3x3 - Sábado - Das 19:00 as 21:00", "Modo de Jogo 3x3 - Domingo - Das 19:00 as 21:00"],
        lol: ["Modo de Jogo 5x5 - Sábado - Das 17:00 as 19:00", "Modo de Jogo 5x5 - Domingo - Das 17:00 as 19:00"]
    };

    jogoSelecao.addEventListener("change", function () { // Utilização de eventos e funções para melhorar a experiência do usuário
        const jogoSelecionado = jogoSelecao.value;
        eventoContainer.innerHTML = ""; // Limpa eventos anteriores

        if (jogoSelecionado && eventosPorJogo[jogoSelecionado]) {
            const novoSelect = document.createElement("select");
            novoSelect.required = true;

            const defaultOption = document.createElement("option");
            defaultOption.textContent = "Selecione um evento";
            defaultOption.value = "";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            novoSelect.appendChild(defaultOption);

            eventosPorJogo[jogoSelecionado].forEach(evento => {
                const option = document.createElement("option");
                option.value = evento;
                option.textContent = evento;
                novoSelect.appendChild(option);
            });

            eventoContainer.appendChild(novoSelect);
        }
    });

    form.addEventListener("submit", function (event) { // Validação do formulário ao submeter
        event.preventDefault(); // Evita recarregar a página

        const nomeSquad = document.getElementById("squad-name").value.trim();
        if (nomeSquad.length < 3) {
            alert("O nome do squad deve ter pelo menos 3 caracteres!");
            return;
        }

        const successMessage = document.createElement("div"); // Criar a nova tela de sucesso
        successMessage.classList.add("success-message");
        successMessage.innerHTML = `
            <h2>Cadastro realizado com sucesso!</h2>
            <p>Você será redirecionado para a página de Feedback em <span id="contador">5</span> segundos.</p>
        `;

        formContainer.innerHTML = ""; // Substituir o formulário pela mensagem de sucesso
        formContainer.appendChild(successMessage);

        let count = 5; // Contagem regressiva até 5 para o redirecionamento
        const countdownElement = document.getElementById("contador");

        const countdown = setInterval(() => {
            count--;
            countdownElement.textContent = count;

            if (count === 0) {
                clearInterval(countdown);
                window.location.href = "../pages/FAQ.html"; // Redireciona para a página de feedback
            }
        }, 1000);
    });
});
