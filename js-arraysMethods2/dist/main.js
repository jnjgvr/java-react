import { foods } from "./foods.js";
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
const ejercicio7 = () => {
    const tarea2 = [...new Set(foods.map(food => food.category))];
    console.log(tarea2);
    const tarea3 = (categoria) => tarea2.includes(categoria);
    console.log(tarea3("Italian"));
    console.log(tarea3("Healthy"));
    console.log(tarea3("Spanish"));
    const tarea4 = (categoria) => foods.filter((food) => (food.category === categoria));
    console.log(tarea4("Italian"));
    console.log(tarea4("Spanish"));
    console.log(tarea4("Healthy"));
    const tarea5 = () => {
        const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];
        // Expected output: Total of the ticket: ["🥜","🌮","🥗","🍕","🍣","🧀"] is $52.48 
        let calcularPrecio = (ticket, foodList) => {
            let cuenta = 0;
            ticket.forEach((icon) => {
                let item = foodList.find((food) => food.icon === icon);
                if (item !== undefined) {
                    console.log(item);
                    cuenta += item.price;
                }
            });
            return cuenta.toFixed(2);
        };
        // let calcularPrecio = (ticket:string[], foodList:Array<any>) => 
        //     ticket.map((item) => foodList.find((food) => food.icon === item))
        //             .filter(Boolean)
        //             .reduce((total, food) => total + food.price, 0);
        console.log('Total of the ticket: ["🥜","🌮","🥗","🍕","🍣","🧀"] is $' + calcularPrecio(ticket, foods));
    };
    tarea5();
};
ejercicio7();
const ejercicio8 = () => {
    const shake = ['🥛', '🍓', '🍌'];
    console.log(shake.join("+"));
};
ejercicio8();
const ejercicio9 = () => {
    const tickets = [1, 100000, 21, 30, 4];
    console.log([...tickets].sort((a, b) => a - b));
    const bucleOrdenado = [...tickets];
    for (let i = 0; i < bucleOrdenado.length - 1; i++) {
        for (let x = 0; x < bucleOrdenado.length - i - 1; x++) {
            if (bucleOrdenado[x] > bucleOrdenado[x + 1]) {
                [bucleOrdenado[x], bucleOrdenado[x + 1]] = [bucleOrdenado[x + 1], bucleOrdenado[x]];
            }
        }
    }
    console.log(bucleOrdenado);
};
ejercicio9();
const ejercicio10 = () => {
    const ticket01 = ['☕', '☕', '☕', '☕'];
    const ticket02 = ['☕', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];
    const cafeConLeche = (ticket) => ticket.every((item) => item === '☕');
    console.log(cafeConLeche(ticket01));
    console.log(cafeConLeche(ticket02));
    const ticket03 = ['🍹', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];
    const persona1 = ['☕', '🥐'];
    const persona2 = ['🍵', '🥖'];
    const persona3 = ['🍹', '🥪'];
    const ticketPersona = (ticket, consumption) => {
        const individualTicket = [];
        for (const item of consumption) {
            const index = ticket.indexOf(item);
            if (index !== -1) {
                individualTicket.push(ticket.splice(index, 1)[0]);
            }
        }
        return individualTicket;
    };
    console.log('Person 1 Ticket:', ticketPersona(ticket03, persona1));
    console.log('Person 2 Ticket:', ticketPersona(ticket03, persona2));
    console.log('Person 3 Ticket:', ticketPersona(ticket03, persona3));
    console.log('Remaining items in the original ticket:', ticket03);
    const ticket03Slice = ['🍹', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];
    const persona1Slice = ['☕', '🥐'];
    const persona2Slice = ['🍵', '🥖'];
    const persona3Slice = ['🍹', '🥪'];
    const ticketPersonaSlice = (ticket, consumption) => {
        const individualTicket = [];
        for (const item of consumption) {
            const index = ticket.indexOf(item);
            if (index !== -1) {
                individualTicket.push(item);
            }
        }
        return individualTicket;
    };
    console.log('Person 1 Ticket:', ticketPersonaSlice(ticket03Slice.slice(), persona1Slice));
    console.log('Person 2 Ticket:', ticketPersonaSlice(ticket03Slice.slice(), persona2Slice));
    console.log('Person 3 Ticket:', ticketPersonaSlice(ticket03Slice.slice(), persona3Slice));
    console.log('Original ticket:', ticket03Slice);
};
ejercicio10();
const ejercicio11 = () => {
    const drinksConsumed = [
        { nombre: 'Alice', bebida: '🍹', hora: '18:30:00' },
        { nombre: 'Bob', bebida: '🍷', hora: '19:15:00' },
        { nombre: 'Charlie', bebida: '🍹', hora: '20:00:00' },
        { nombre: 'Alice', bebida: '🍸', hora: '21:45:00' },
        { nombre: 'Bob', bebida: '🥂', hora: '22:30:00' },
        { nombre: 'Charlie', bebida: '🍵', hora: '23:15:00' },
        { nombre: 'Alice', bebida: '🍹', hora: '03:30:00' },
        { nombre: 'Bob', bebida: '🍺', hora: '04:15:00' },
        { nombre: 'Charlie', bebida: '🍸', hora: '05:00:00' },
    ];
    const primerBebedor = (bebida) => {
        const coincidencia = drinksConsumed.map((item) => item.bebida).indexOf(bebida);
        if (coincidencia !== -1) {
            return 'El primero en beber ' + bebida + ' ha sido ' + drinksConsumed[coincidencia].nombre;
        }
        return 'Nadie ha consumido esta bebida ' + bebida;
    };
    console.log(primerBebedor('🍹'));
    console.log(primerBebedor('🥂'));
    console.log(primerBebedor('☕'));
    const ultimoBebedor = (bebida) => {
        const coincidencia = drinksConsumed.map((item) => item.bebida).lastIndexOf(bebida);
        if (coincidencia !== -1) {
            return 'El ultimo en beber ' + bebida + ' ha sido ' + drinksConsumed[coincidencia].nombre;
        }
        return 'Nadie ha consumido esta bebida ' + bebida;
    };
    console.log(ultimoBebedor('🍸'));
};
ejercicio11();
