const texto = document.getElementById("texto");

function mudar() {
    if (texto.style.color === "red") {
        texto.style.color = "blue";
    } else {
        texto.style.color = "red";
    }
}

texto.addEventListener("click", mudar);

const img = document.getElementById('foto');

img.tabIndex = 0;

img.addEventListener('click', () => {
    img.classList.toggle('is-expanded')
});

img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        img.classList.toggle('is-expanded');
        e.preventDefault();
    }
});

img.addEventListener('mouseenter', () => img.classList.add('is-expanded'));
img.addEventListener('mouseleave', () => img.classList.remove('is-expanded'));