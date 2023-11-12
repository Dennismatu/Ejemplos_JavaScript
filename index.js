console.log('Ejercicio de Clases')

//Definimos Clase Animal

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(){
        console.log(`${this.nombre} esta comiendo`)
    }

    dormir(){
        console.log(`${this.nombre} esta durmiendo`)
    }
}


//Definicion de clase perro que hereda de Animal

class Perro extends Animal{
    constructor(nombre, edad, raza){
        super(nombre, edad)
        this.raza = raza
    }
}

//Creacion de instancias

const animalGenerico = new Animal('Criatura', 5)
const miPerro = new Perro('Solovino', 3, 'Pura')

console.log(animalGenerico)

animalGenerico.comer()
animalGenerico.dormir()

miPerro.comer()
miPerro.dormir()
