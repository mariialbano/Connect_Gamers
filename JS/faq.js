document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // card de confirmação
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = `
        <div class="confirmation-card">
            <h2>Obrigado pelo seu feedback!</h2>
            <p>Agradecemos por compartilhar sua opinião conosco.</p>
            <button id="return-home">Voltar à Página Inicial</button>
        </div>
    `;
    
    // clique do botão
    document.getElementById('return-home').addEventListener('click', function() {
        window.location.href = '../index.html'; // Redireciona para a página inicial
    });
});

const style = document.createElement('style');
style.textContent = `
    .confirmation-card {
        background-color: beige;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(253, 77, 121, 0.5);
        text-align: center;
        color: black;
    }
    
    .confirmation-card h2 {
        margin-bottom: 15px;
        color: black;
    }
    
    .confirmation-card p {
        margin-bottom: 20px;
        font-size: 16px;
    }
    
    #return-home {
        width: 100%;
        padding: 10px;
        background-color: rgba(253, 77, 121, 1);
        border: none;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
    }
    
    #return-home:hover {
        background-color: rgba(253, 77, 121, 0.8);
    }
`;
document.head.appendChild(style);

