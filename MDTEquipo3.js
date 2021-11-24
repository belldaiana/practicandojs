/*Arrow function.
Tal vez los siguientes enunciados resulten familiares, solo que esta vez la realizaremos
utilizando arrow function en vez de la forma tradicional.

1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/

let pulgadas= cm => cm / 2.54 ;
console.log( pulgadas (1));

/*
2. Crear una función que recibe un string y lo convierte en una una URL.
ej: “pepito” es devuelto como “http://www.pepito.com”*/

let url= texto => "https://www." + texto + ".com";
console.log(url("pepa"));



/*. 3Crear una función que recibe un string y devuelve la misma frase pero con
admiración.*/

let frase= texto => texto + "!";
console.log(frase("hola"));

/*4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/

let perro= edad=> edad * 7;
console.log(perro(10)); 

/*5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considera que tu mes de trabajo tiene 40 horas.*/

let horaTrabajo= sueldo=> sueldo/ 40;
console.log(horaTrabajo(1000));
/*6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el imc de una persona. Luego, ejecutar la función
probando diferentes valores.*/


let imc= (altura, peso)=> peso/ altura;
console.log(imc(1.70, 80));
/*7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investiga que hace el método de strings .toUpperCase()*/

let aMayus= texto=> texto.toUpperCase();
console.log(aMayus("hola mundo"));
/*8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar que hace la palabra reservada typeof.*/
let tipo= texto=> typeof(texto);
console.log(tipo("hola"));

/*9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia
Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi*/
let circu= numero=> (Math.PI * 2) * numero

console.log(circu(10)); 

/*A partir del siguiente array de nombres, crear una función que reciba un
parámetro string, para realizar la búsqueda de elementos que coincidan con
dicho parámetro, y retorna un mensaje en caso de encontrarlo .*/


//Array de nombres
const nombres = ['Martin','Homero','Cosme','Steven','Adam'];
function buscarNombre(nombre){
 for (let i = 0; i < nombres.length; i++) {
     if (nombre== nombres[i]){
         return "El nombre "+ nombre + " fue encontrado!"
     }
     
 }
}
//Ejemplo de invocacion
console.log( buscarNombre('Martin')); //El nombre Martin fue encontrado

/*Para manejar el error en caso de no encontrar coincidencias crearemos una
función llamada mostrarResultado que reciba un parámetro, la misma deberá
consultar si el parámetro es un string vacío mostrar un mensaje de “Nombre no
encontrado”, en caso contrario mostrar el mensaje “El nombre fue encontrado”.*/

function mostrarResultado (texto){
    if ( typeof(texto)!== "string"){
        return "Nombre no encontrado";
    } else{
        return "El nombre fue encontrado";
    }
}
console.log(mostrarResultado("Martin"));



