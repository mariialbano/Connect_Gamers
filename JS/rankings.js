const details = document.querySelectorAll("details");

details.forEach((detail) => {
const content = detail.querySelector(".table-custom");

detail.querySelector("summary").addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = detail.hasAttribute("open");
    // Fecha todos com animação
    details.forEach((d) => {
    if (d !== detail && d.hasAttribute("open")) {
        const c = d.querySelector(".table-custom");
        c.style.maxHeight = '0';
        c.style.opacity = '0';
        c.style.transform = 'translateY(-10px)';
        // Remove open depois da transição
        setTimeout(() => d.removeAttribute("open"), 600);
    }
    });

    if (isOpen) {
      // Fechar o clicado com animação
    content.style.maxHeight = '0';
    content.style.opacity = '0';
    content.style.transform = 'translateY(-10px)';
    setTimeout(() => detail.removeAttribute("open"), 600);
    } else {
      // Abrir o clicado com animação
    detail.setAttribute("open", "");
    setTimeout(() => {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 10);
    }
});
});
