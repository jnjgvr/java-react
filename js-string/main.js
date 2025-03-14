"use strict";
const ejercicio1 = (cadena) => {
    let arr = (cadena.toUpperCase()).split('');
    arr.forEach((arrElem, index, array) => {
        if (arrElem === 'A') {
            arr[index] = 'O';
        }
    });
    return arr.toString();
};
console.log(ejercicio1('ANTALAONA'));
const ejercicio2 = (cadena) => cadena.startsWith("aca");
console.log(ejercicio2("academia"));
console.log(ejercicio2("escuela"));
const ejercicio3 = (cadena) => {
    if (cadena.toUpperCase() === "HOLA") {
        console.log((cadena + '\n').repeat(3));
    }
    else {
        console.log("No eres bienvenido");
    }
};
ejercicio3('prueba');
ejercicio3('hola');
