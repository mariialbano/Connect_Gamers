console.log("Script da página de Pesquisa e Dados carregado com sucesso.");

const titulo = document.querySelector('.form-container h2');

if (titulo) {
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = '#ff4fc9';
        titulo.style.cursor = 'pointer';
    });

    titulo.addEventListener('mouseout', () => {
        titulo.style.color = 'rgb(253, 77, 121)';
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === "#") {
            e.preventDefault();
            alert("Este link ainda não está configurado.");
        }
    });
});

