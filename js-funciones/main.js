const ejercicioFunciones1 = () => "Juanjose Guevara Alvarez";
console.log(ejercicioFunciones1());

const ejercicioFunciones2 = (booleano) => {
    console.log(booleano);
}

ejercicioFunciones2(true);

const ejercicioFunciones3 = (...parametros) => {
    parametros.forEach( parametro => {
        console.log(parametro);
    })
}

ejercicioFunciones3(1, 2, 3, 4, 5);