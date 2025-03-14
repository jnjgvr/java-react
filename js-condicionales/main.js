var ejercicio1 = function () {
    var random = Math.round(Math.random());
    console.log((random > 0) ? "Cara" : "Cruz");
};
ejercicio1();
ejercicio1();
ejercicio1();
var ejercicio2 = function (num1, num2, num3) { return num1 + num2 + num3; };
console.log(ejercicio2(2, 3, 5));
var ejercicio3 = function (nombre, apellido1, apellido2) { return nombre + ' ' + apellido1 + ' ' + apellido2; };
console.log(ejercicio3('JuanJose', 'Guevara', 'Alvarez'));
var ejercicio4 = function (value1, value2) { return (value1 < value2) ? value2 : value1; };
console.log(ejercicio4(8, 4));
