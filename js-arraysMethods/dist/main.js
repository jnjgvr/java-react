"use strict";
const ejercicio1 = () => {
    const arr = ['🍔', '🌯', '🍣', '🍕', '🍜', '🍱', '🍙', '🍘', '🥑'];
    // 🍺
    const index = arr.indexOf('🍕');
    if (index !== -1) {
        arr.splice(index + 1, arr.length - (index + 1), ...Array(arr.length - (index + 1)).fill('🍺'));
    }
    return arr;
};
console.log(ejercicio1());
const ejercicio2 = () => {
    const arr = ['🍕', '🍕', '🍍', '🍕', '🍕'];
    return arr.includes('🍍');
};
console.log(ejercicio2());
const ejercicio3 = () => {
    const arr = ['🍕', '🍕', '🍍', '🍕', '🍕'];
    return arr.filter((icono) => '🍍' !== icono);
};
console.log(ejercicio3());
const ejercicio4 = () => {
    const arr = ['🍓', '🍋', '🍓', '🍋', '🍓'];
    // 🍄
    return arr.map(icono => '🍓' === icono ? '🍄' : icono);
};
console.log(ejercicio4());
const ejercicio5 = () => {
    const arr = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛'];
    //🥵
    arr.map((icono, index, array) => {
        if (icono === '🌶️') {
            array.splice(index + 1, 0, '🥵');
        }
    });
    return arr;
};
console.log(ejercicio5());
const ejercicio6 = () => {
    const arr = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴'];
    return arr.flatMap((icono, index, array) => {
        if (icono !== '🃏' && array.at(index + 1) === '🎴') {
            return [icono, '🃏'];
        }
        return icono;
    });
};
console.log(ejercicio6());
