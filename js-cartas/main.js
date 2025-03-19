"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const cartas = document.querySelectorAll(".carta");
    cartas.forEach((carta) => {
        carta.addEventListener('mouseover', () => carta.classList.add("flipped"));
        carta.addEventListener('mouseleave', () => carta.classList.remove("flipped"));
    });
});
