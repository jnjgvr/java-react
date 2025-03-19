"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let interruptor = document.querySelector(".int-boton");
    let bombilla = document.querySelector(".bombilla");
    interruptor === null || interruptor === void 0 ? void 0 : interruptor.addEventListener('click', () => openLigth());
    const openLigth = () => {
        if (interruptor !== null) {
            interruptor.src = interruptor.src.includes('boff.jpg') ? "./img/bon.jpg" : "./img/boff.jpg";
            bombilla.src = bombilla.src.includes('on.jpg') ? "./img/off.jpg" : "./img/on.jpg";
        }
    };
    // Variables para mantener estado
    let lastZoom = 5;
    let zoomApplied = 1;
    let lastRotation = 5;
    let rotationApplied = 0;
    let brilloPrevio = 5;
    let brilloAplicado = 1;
    // Función para actualizar transformaciones sin perder propiedades previas
    const updateTransform = () => {
        bombilla.style.transform = `scale(${zoomApplied}) rotate(${rotationApplied}deg)`;
    };
    // Evento de zoom
    const zoomRange = document.getElementById('zoom-lvl');
    zoomRange.addEventListener('input', () => {
        let zoomValue = +zoomRange.value;
        zoomApplied = getScale(zoomValue);
        updateTransform(); // Actualizar transformación combinada
        lastZoom = zoomValue;
    });
    // Evento de brillo
    const brightnesRange = document.getElementById('ligth');
    brightnesRange.addEventListener('input', () => {
        let brightValue = +brightnesRange.value;
        brilloAplicado = getBrightnes(brightValue);
        bombilla.style.filter = `brightness(${brilloAplicado})`;
        brilloPrevio = brightValue;
    });
    // Evento de rotación
    const rotationRange = document.getElementById('rotation-lvl');
    rotationRange.addEventListener('input', () => {
        let rotationValue = +rotationRange.value;
        rotationApplied = getRotation(rotationValue);
        updateTransform(); // Actualizar transformación combinada
        lastRotation = rotationValue;
    });
    // Funciones de cálculo
    const getRotation = (rotacion) => {
        return (rotacion - 5) * 45; // Ajuste para que parta de 5 y sea proporcional
    };
    const getBrightnes = (brillo) => {
        return 1 + (brillo - 5) * 0.2;
    };
    const getScale = (zoom) => {
        return 1 + (zoom - 5) * 0.1;
    };
});
