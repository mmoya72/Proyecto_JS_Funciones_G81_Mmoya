
const elemento = document.querySelector('#ele1');

function pintar(color = 'Green'){
    elemento.style.backgroundColor = color;
}   

pintar();

elemento.addEventListener("click", () => pintar("Yellow"));

