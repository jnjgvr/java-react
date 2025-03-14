"use strict";
const ejercicio1al3 = () => {
    //1
    const dinner = [];
    dinner.push('🍔');
    dinner.push('🌭');
    //2
    dinner.push('🍟', '🍟');
    //3
    dinner[dinner.length] = '🧋';
    dinner[dinner.length] = '🧋';
    return dinner;
};
console.log(ejercicio1al3());
const ejercicio4 = () => {
    const arrPrincipal = ejercicio1al3();
    let arr1 = [...arrPrincipal].reverse();
    console.log(arr1);
    let arr2 = [];
    for (let index = arrPrincipal.length; index > 0; index--) {
        arr2.push(arrPrincipal[index - 1]);
    }
    console.log(arr2);
    let arr3 = [...arrPrincipal];
    for (let index = 0; index < Math.floor(arr3.length / 2); index++) {
        const alimento = arr3[index];
        arr3[index] = arr3[arr3.length - 1 - index];
        arr3[arr3.length - 1 - index] = alimento;
    }
    console.log(arr3);
    let arr4 = [...arrPrincipal];
    arr4.forEach((element, index, array) => {
        if (index < Math.floor(array.length / 2)) {
            arr4[index] = arr4[arr4.length - 1 - index];
            arr4[arr4.length - 1 - index] = element;
        }
    });
    console.log(arr4);
    let arr5 = [...arr4];
    arr5.unshift('🍸');
    console.log(arr5);
};
ejercicio4();
const ejercicio5 = () => {
    const ticket01 = ['🍺', '🍺', '🥜'];
    const ticket02 = ['🍺', '🥪', '🥙'];
    let combinedTicket1 = [];
    combinedTicket1 = ticket01.concat(ticket02);
    console.log(combinedTicket1);
    let combinedTicket2 = [...ticket01, ...ticket02];
    console.log(combinedTicket2);
    const combinedTicket3 = [];
    combinedTicket3.push.apply(combinedTicket3, ticket01);
    combinedTicket3.push.apply(combinedTicket3, ticket02);
    console.log(combinedTicket3);
    const combinedTicket4 = [];
    for (let i = 0; i < ticket01.length; i++) {
        combinedTicket4.push(ticket01[i]);
    }
    for (let i = 0; i < ticket02.length; i++) {
        combinedTicket4.push(ticket02[i]);
    }
    console.log(combinedTicket4);
    const combinedTicket5 = [];
    ticket01.forEach(element => combinedTicket5.push(element));
    ticket02.forEach(element => combinedTicket5.push(element));
    console.log(combinedTicket5);
};
ejercicio5();
const ejercicio6 = () => {
    const ticket = ['🍺', '🍺', '🍺', '🥜', '🍺', '🥪', '🥙'];
    ticket.shift();
    ticket.pop();
    console.log(ticket);
};
ejercicio6();
