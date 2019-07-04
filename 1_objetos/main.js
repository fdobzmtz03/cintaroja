// var nombreobjeto= {
//     identificador1: valor1,
//     llave: propiedad
// }

// var perro = {
//     pelo: 'café',
//     mamifero: true,

// }
//constructor construye las instancias, agregamos os atributos y metodos

let obj = {
    nombre: 'Fernando',
    edad: 25,
    caracteristicas:{
      pelo: 'negro',
      estatura: 1.73
    }
}


class Perro{
    constructor(nombre,cola, patas, nariz, pelaje,estatura){
        this.nombre=nombre
        this.cola = cola
        this.patas = patas
        this.nariz = nariz
        this.pelaje = pelaje
        this.estatura = estatura
    }

    moverse(){
        return `Estoy brincando`
    }

    habla(){
        return `Hola soy un perro y mi nombre es ${this.nombre}`
    }
    
    crece(){
        this.estatura += 30
        return `${this.nombre} a tocado una piedra que brilla y lo hace crecer ${this.estatura} cm en una noche`
    }


}

const firulais = new Perro('Firulais',true,4,'redonda','corto',50)

const Pancho = new Perro('Pancho',true,4,'grande','largo',30)

const Clifford = new Perro('Clifford',true,4,'negra','rojo',40)

console.log(firulais.habla())
console.log(Pancho.moverse())
Clifford.crece()
//Clifford.crece()
//Clifford.crece()
console.log(Clifford.crece())

