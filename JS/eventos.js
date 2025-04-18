const containerCardGames = document.querySelector(".container-jogos");
const divModal = document.querySelector(".container-eventos-efeitos");
let cardAtualAberto = null;
const botao = document.createElement("a");
botao.classList.add("botao-cadastro");
botao.textContent = "Cadastrar-se";

divModal.style.display = "none";

console.log(containerCardGames)

containerCardGames.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "IMG") {
        const idImagemClicada = event.target.id;

        if (divModal.classList.contains("abrindo")) {
            if (cardAtualAberto === idImagemClicada) {
                divModal.classList.remove("abrindo");
                divModal.classList.add("fechando");

                setTimeout(() => {
                    divModal.classList.remove("fechando");
                    divModal.style.display = "none";
                    divModal.innerHTML = "";
                    cardAtualAberto = null; // reseta 
                }, 300);
            } else {
                // troca o card suavemente
                divModal.classList.remove("abrindo");
                divModal.classList.add("fechando");

                setTimeout(() => {
                    divModal.classList.remove("fechando");
                    divModal.innerHTML = "";
                    Modal(event.target); // chama novo modal
                    cardAtualAberto = idImagemClicada;
                }, 300);
            }
        } else {
            // nenhum modal aberto, abre um novo
            Modal(event.target);
            cardAtualAberto = idImagemClicada;
        }
    }
});

function Modal(imagem) {
    switch (imagem.id) {
        case "cardCs":
            divModal.style.display = "flex";
            setTimeout(() => {
                divModal.classList.add("abrindo");
            }, 10); // delay pra ativar a transição
            divModal.innerHTML = `  
                    <h3 class="nomes-jogos">Counter Strike 2</h3>   
                <div class="posicao-texto-eventos">
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 5v5</li>
                        <li class="texto-eventos">Sábado</li>
                        <li class="texto-eventos">13:00 as 15:00</li>
                    </ul>
                    
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 5v5</li>
                        <li class="texto-eventos">Domingo</li>
                        <li class="texto-eventos">13:00 as 15:00</li>
                    </ul>   
                </div>
                <div> <a href="cadastro.html" class="botao-cadastro">Cadastrar-se</a> </div>
                `
            break;

        case "cardFortnite":
            divModal.style.display = "flex";
            setTimeout(() => {
                divModal.classList.add("abrindo");
            }, 10); // delay pra ativar a transição
            divModal.innerHTML = `  
                    <h3 class="nomes-jogos">Fortnite</h3>   
                <div class= "posicao-texto-eventos">
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 2v2</li>
                        <li class="texto-eventos">Sábado</li>
                        <li class="texto-eventos">15:00 as 17:00</li>
                    </ul>
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 4v4</li>
                        <li class="texto-eventos">Domingo</li>
                        <li class="texto-eventos">15:00 as 17:00</li>     
                    </ul>
                </div>
                <div> <a href="cadastro.html" class="botao-cadastro">Cadastrar-se</a> </div>
                `
            break;

        case "cardLol":
            divModal.style.display = "flex";
            setTimeout(() => {
                divModal.classList.add("abrindo");
            }, 10); // delay pra ativar a transição
            divModal.innerHTML = `  
                    <h3 class="nomes-jogos">League of Legends</h3>   
                <div class= "posicao-texto-eventos">
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 5v5</li>
                        <li class="texto-eventos">Sábado</li>
                        <li class="texto-eventos">17:00 as 19:00</li>
                    </ul>
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 5v5</li>
                        <li class="texto-eventos">Domingo</li>
                        <li class="texto-eventos">17:00 as 19:00</li>
                    </ul>
                </div>
                <div> <a href="cadastro.html" class="botao-cadastro">Cadastrar-se</a> </div>
                `
            break;

        case "cardRocket":
            divModal.style.display = "flex";
            setTimeout(() => {
                divModal.classList.add("abrindo");
            }, 10); // delay pra ativar a transição
            divModal.innerHTML = `  
                    <h3 class="nomes-jogos">Rocket League</h3>   
                <div class= "posicao-texto-eventos">
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 3v3</li>
                        <li class="texto-eventos">Sábado</li>
                        <li class="texto-eventos">19:00 as 21:00</li>
                    </ul>       
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 3v3</li>
                        <li class="texto-eventos">Domingo</li>
                        <li class="texto-eventos">19:00 as 21:00</li>
                    </ul>   
                </div>
                <div> <a href="cadastro.html" class="botao-cadastro">Cadastrar-se</a> </div>
                `
            break;

        case "cardValorant":
            divModal.style.display = "flex";
            setTimeout(() => {
                divModal.classList.add("abrindo");
            }, 10); // delay pra ativar a transição
            divModal.innerHTML = `  
                    <h3 class="nomes-jogos">Valorant</h3>   
                <div class= "posicao-texto-eventos">
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 5v5</li>
                        <li class="texto-eventos">Sábado</li>
                        <li class="texto-eventos">21:00 as 23:00</li>
                    </ul>
                    <ul class="eventos">
                        <li class="texto-eventos">Modo de Jogo 5v5</li>
                        <li class="texto-eventos">Domingo</li>
                        <li class="texto-eventos">21:00 as 23:00</li>
                    </ul>
                </div>
                <div> <a href="cadastro.html" class="botao-cadastro">Cadastrar-se</a> </div>
                `
            break;

        default:
            console.error("ID da imagem não reconhecido:", imagem.id);
            break;
    }
}
