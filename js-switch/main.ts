const diasMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// const ejercicio1 = (diaMes:number) => console.log(diasMes[diaMes-1]);
const ejercicio1 = (diaMes: number) => {
    switch (diaMes) {
        case 1:
            console.log(diasMes[0]);
            break;

        case 2:
            console.log(diasMes[1]);
            break;

        case 3:
            console.log(diasMes[2]);
            break;

        case 4:
            console.log(diasMes[3]);
            break;

        case 5:
            console.log(diasMes[4]);
            break;

        case 6:
            console.log(diasMes[5]);
            break;

        case 7:
            console.log(diasMes[6]);
            break;

        case 8:
            console.log(diasMes[7]);
            break;

        case 9:
            console.log(diasMes[8]);
            break;

        case 10:
            console.log(diasMes[9]);
            break;

        case 11:
            console.log(diasMes[10]);
            break;

        case 12:
            console.log(diasMes[11]);
            break;

        default:
            console.log("Introduce un numero entre 1 y 12!")
            break;
    }
}
ejercicio1(8);
ejercicio1(2);
ejercicio1(23);
ejercicio1(11);


const ejercicio2 = (valor: string) => {
    switch (valor) {
        case 'uno':
            return 1;
            break;
        case 'dos':
            return 2;
            break;
        case 'tres':
            return 3;
            break;
        case 'cuatro':
            return 4;
            break;
        case 'cinco':
            return 5;
            break;
        default:
            return "Introduce un numero del 1 al 5";
            break;
    }
}

console.log(ejercicio2('test'));
console.log(ejercicio2('tres'));