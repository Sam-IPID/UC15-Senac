const texto = document.getElementById("texto");

function mudar() {
if (texto.style.color === "red") {
    texto.style.color = "blue";
} else {
    texto.style.color = "red";
}
}

texto.addEventListener("click", mudar);
