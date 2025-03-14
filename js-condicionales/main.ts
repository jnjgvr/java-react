const ejercicio1 = () =>{
    let random : number = Math.round(Math.random());
    console.log((random > 0) ? "Cara" : "Cruz");
}
ejercicio1();
ejercicio1();
ejercicio1();

const ejercicio2 = (num1, num2, num3) => num1+num2+num3;
console.log(ejercicio2(2, 3, 5));

const ejercicio3 = (nombre, apellido1, apellido2) => nombre+' '+apellido1+' '+apellido2;
console.log(ejercicio3('JuanJose', 'Guevara', 'Alvarez'));

const ejercicio4 = (value1, value2) => (value1 < value2) ? value2 : value1;
console.log(ejercicio4(2, 4));