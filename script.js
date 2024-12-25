// Função para rolagem suave quando clicar em links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicionando um efeito de scroll suave ao carregar a página
window.addEventListener('load', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo(0, headerHeight);
});

// Adicionando efeitos nos botões quando o mouse passar por cima
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease";
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });
});