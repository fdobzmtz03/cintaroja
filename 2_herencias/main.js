/*
class Vehiculo {
    constructor(color = 'azul', marca = 'W', ruedas = 4, tamano = 'sedan'){
        this.color = color;
        this.marca = marca;
        this.ruedas = ruedas;
        this.tamano = tamano;
    }

    avanzar(){
        console.log(`Esta avanzando`)
    }
}

class Automovil extends Vehiculo{
    constructor(color, marca, ruedas, tamano, motor){
        super(color, marca, ruedas, tamano)
        this.motor = motor;

    }

}

var vehiculo = new Vehiculo()

console.log(vehiculo)
var moto = new Automovil('Negra', 'Ducali', 2, 'Pista', '200cc');

console.log(moto);
moto.avanzar();


class jugador{
    constructor(nombre = 'Kyriel', especie = 'Hechicero', arma = 'Arco y Flechas', salud = 80, magia = true, combate = False){
        this.nombre = nombre
        this.especie = especie
        this.arma = arma
        this.salud = salud
        this.magia = magia
        this.combate = combate

    }
    curar(nombre, salud){
        console.log(`${nombre} aumento su salud de ${salud} a ${salud+20}`);
    }


}

class jugador2 extends jugador{
    constructor(nombre, especie, arma, salud, magia, combate){
        super(nombre, especie, arma, salud, magia, combate)
    }
}

var jugador3 = new jugador ('Arya', 'Humana', 'Veneno', 30, false, true)


console.log(jugador3)
jugador3.curar('fer', 50)
*/

class Maestro{
    constructor(materia, calificaciones = [10, 6, 9, 7, 5, 9, 10, 7, 3, 8]){
        this.materia = materia
        this.calificaciones = calificaciones
    }
    promediar(){
        let Sumatotal = 0

        for(let i = 0; i < this.calificaciones.length; i++){
            Sumatotal += this.calificaciones[i];

        }
        return (Sumatotal/this.calificaciones.length)
    }



}

class Fisica extends Maestro{
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones)
        this.antiguedad = antiguedad
    }
}

class Musica extends Maestro{
    constructor(materia, calificaciones, edad){
        super(materia, calificaciones)
        this.edad = edad 
        
    }
}

const profe_1 = new Fisica('fisica', [7,8,5,1,10,5,2,3,5], 8);
const profe_2 = new Musica('musica', [9,10,9,8,9,9,6,7,10], 25);

console.log( profe_1.promediar(), profe_1.materia, profe_1.antiguedad);
console.log( profe_2.promediar() );


class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }

    getConsumoEnergetico(){
        return this.consumoEnergetico;
    }

    setConsumoEnergetico(precio){
        this.consumoEnergetico = precio;
    }
}

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }

    precioFinal() {
        return 'Total: $' + this.getConsumoEnergetico() * this.carga;
    }
}

const lavadora = new Lavadora(15440, 'gris', 18, 5);
lavadora.setConsumoEnergetico(100);
console.log( lavadora.precioFinal())




