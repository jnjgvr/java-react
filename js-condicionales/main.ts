const ejercicio1 = () =>{
    let random : number = Math.round(Math.random());
    console.log((random > 0) ? "Cara" : "Cruz");
}
ejercicio1();
ejercicio1();
ejercicio1();

const ejercicio2 = (num1:number, num2:number, num3:number) => num1+num2+num3;
console.log(ejercicio2(2, 3, 5));

const ejercicio3 = (nombre:string, apellido1:string, apellido2:string) => nombre+' '+apellido1+' '+apellido2;
console.log(ejercicio3('JuanJose', 'Guevara', 'Alvarez'));

const ejercicio4 = (value1:number, value2:number) => (value1 < value2) ? value2 : value1;
console.log(ejercicio4(8, 4));