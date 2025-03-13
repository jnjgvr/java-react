let var1, var2, var3, var4, var5, var6, var7, var8;

var1 = "String";
var2 = 1;
var3 = true;
var4 = null;
var5 = undefined;
var6 = Symbol('something');
var7 = {key: 'value'};
var8 = [var1, var2, var3, var4, var5, var6, var7];

const mostrarValorElementos = elemento => {
    elemento.forEach(item => {
        console.log(item)
    })

    console.log(elemento);
}

const mostrarTipoElementos = elemento => {
    let var9Local = "test";
    elemento.forEach(item => {
        console.log(typeof item)
    })

    console.log(typeof elemento);
}

mostrarValorElementos(var8);
mostrarTipoElementos(var8);
console.log(var9Local);