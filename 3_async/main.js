/*const mensaje = (msg) => {
    return`${msg}`
}

const funcionOrderSuperior = (Funcioncallback, msgg) => {
    return Funcioncallback(msgg)
}

f


// Crear una función de orden superior que reciba como 
// argumentos dos números y un callback. Según el callback
// que se pase a la función, se devuelve la suma de los
// dos números, la resta de los dos números o la
// multiplicación de los dos números.
*/

const resultado = (operacion,num1,num2) => {
    return operacion(num1,num2)
}


const resta = (num1, num2) => {
    return num1 - num2
}

const suma = (num1, num2) => {
    return num1 + num2
}

const multi = (num1, num2) => {
    return num1 * num2
}

console.log(resultado(multi, 3, 8))

hacerfuncion=(num1,num2,operacion)=>{
   return operacion(num1,num2)
}

sumar = (num1,num2) =>{
    return (num1 + num2)
}

multiplica = (num1,num2) => {
    return (num1, num2)
}

console.log(hacerfuncion(3,40,multiplica))

/*
Escribe una funcion de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayusculas o en minusculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELAGARTO
*/

const ordenSuperior = (palabra, forma) => {
  return forma(palabra)
}

function mayusculas(texto){
  return texto.toUpperCase();
}

function minusculas (texto){
    return texto.toLowerCase();
  }

console.log(ordenSuperior('PejelagARto', mayusculas))

//Hacer arreglo de 4 cantidades de tiempo en minutos y tomar solo cantidades mayores a dos horas hacer la comparacion en horas mediante callback

/*
let newarray=[]

const doshoras = (array, callback) =>{
    return(callback(array))
}

function compararHoras(arreglo) {

    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {

        if (arreglo[i] >= 120) {
            nuevoArreglo.push(arreglo[i]);
        }
    }

    return nuevoArreglo;
}

console.log(doshoras([50, 130, 40, 500, 60],comparacion()))
*/



const Doshoras = (array, callback) => {
    return callback(array);
}

function comparar(array) {

    let newarray = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] >= 120) {
            newarray.push(array[i]);
        }
    }

    return newarray;
}

const arrayyei = Doshoras([300, 140, 90, 500, 490], comparar);
console.log(arrayyei);































