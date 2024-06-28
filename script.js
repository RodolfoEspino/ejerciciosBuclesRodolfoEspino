// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).
// Pedir al usuario que ingrese un número
// let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));


// console.log("Tabla de multiplicar del número" + numero)


// for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i
//     console.log( numero + " x " + i  +" = " + resultado)
// }


// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.


// let suma = 0;


// for (;;) {
//     let numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"))
    
 
//     if (numero === 0) {
//         break;
//     }
    
   
//     suma += numero
// }


// console.log("La suma de los números ingresados es " + suma)






// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.




// let numeroSecreto = Math.floor(Math.random() * 100) + 1
// let intentos = 0

// console.log("Bienvenido al juego de adivinar el número secreto entre 1 y 100.")

// for (;;) {
//     let intento = parseInt(prompt("Ingrese un número (entre 1 y 100):"))

//     if (intento < 1 || intento > 100 || isNaN(intento)) {
//         alert("Por favor ingrese un número válido entre 1 y 100.")
//         continue
//     }

//     intentos++;

//     if (intento === numeroSecreto) {
//         console.log("¡Felicitaciones! Adivinaste el número secreto" + numeroSecreto + " en " + intentos  " intentos.")
//         break; 
//     } else if (intento < numeroSecreto) {
//         alert("El número ingresado es menor que el número secreto. Intenta nuevamente.")
//     } else {
//         alert("El número ingresado es mayor que el número secreto. Intenta nuevamente.")
//     }
// }

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

// let numero = parseInt(prompt("Ingrese un número (entre 1 y 100):"))

// function esPrimo(numero)  {
//     if (numero <= 1) {
//         return false
//     }

//     for (let i = 2; i <= numero / 2; i++) {
//         if (numero % i === 0) {
//             return false
//         }
//     }

//     return true;
// }

// console.log(esPrimo(numero))

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.



// let numero = parseInt(prompt("ingrse un numero para saber todos sus divisores"))


// function mostrarDivisores(numero) {
//     if (numero <= 0) {
//         return;
//     }

//     console.log("Divisores de " + numero)
    
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             console.log(i) 
//         }
//     }
// }

// console.log(mostrarDivisores(10))




// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

// let mascotas = ["perro", "gato", "hámster", "hurón", "pez veta", "tarantula", "camaleon", "boa", "conejo", "loro"]

// for (let i = 1; i < mascotas.length; i++) {
//     console.log("Elemento " + i + " " + mascotas[i])
// }


// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

// let numeros = [200, 10, 150, 65, 13, 30, 375, 408, 908, 999]

// for (let i = 0; i < numeros.length; i++) {
//     let doble = numeros[i] * 2;
//     console.log("El doble de " + numeros[i] + " es: " + doble)
// }




// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

// let familia = [
//     { nombre: 'Juan', edad: 35, parentesco: 'Padre', profesion: 'Ingeniero' },
//     { nombre: 'María', edad: 32, parentesco: 'Madre', profesion: 'Doctora' },
//     { nombre: 'Pedro', edad: 10, parentesco: 'Hijo', profesion: 'Estudiante' },
//     { nombre: 'Ana', edad: 8, parentesco: 'Hija', profesion: 'Estudiante' },
//     { nombre: 'Carlos', edad: 65, parentesco: 'Abuelo', profesion: 'Jubilado' }
// ]

// for (let i = 0; i < familia.length; i++) {
//     let persona = familia[i]
//     console.log("Hola, soy " + persona.nombre + " tengo " + persona.edad + " años " + " soy " + persona.parentesco + " y mi profesión es " + persona.profesion)
// }






// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

// let numeros = [7, 14, 21, 8, 5, 12, 19, 30, 11, 16]

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) {
//         console.log(numeros[i])
//     }
// }



// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.

// function calculaSumaParesImpares() {
//     let numero
//     let sumaPares = 0
//     let sumaImpares = 0

//     while (true) {
//         numero = parseInt(prompt("Ingrese un número (0 para finalizar):"))

//         if (numero === 0) {
//             break;
//         }

//         if (numero % 2 === 0) {
//             sumaPares += numero
//         } else {
//             sumaImpares += numero
//         }
//     }

//     console.log("La suma de los números pares ingresados es " + sumaPares)
//     console.log("La suma de los números impares ingresados es: " + sumaImpares)
// }

// calculaSumaParesImpares()


// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.


// let numeros = [37, 15, 29, 48, 62, 84, 19, 53, 71, 96];
// let maximo = numeros[0]

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > maximo) {
//         maximo = numeros[i];
//     }
// }

// console.log("El número más grande en el array es: " + maximo)





// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.

// let numeros = [37, 15, 29, 48, 62, 84, 19, 53, 71, 96]

// let minimo = numeros[0]

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] < minimo) {
//         minimo = numeros[i];
//     }
// }

// console.log("El número más pequeño en el array es: " + minimo)




// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

// function jugarPiedraPapelTijeras() {
//     let jugador1 = prompt("Ingrese el nombre del jugador 1:")
//     let jugador2 = prompt("Ingrese el nombre del jugador 2:")

//     while (true) {
//         let manoJugador1 = prompt(jugador1 + " elige piedra, papel o tijeras: ").toLowerCase()
//         let manoJugador2 = prompt(jugador2 + " elige piedra, papel o tijeras: ").toLowerCase()

//         if (manoJugador1 !== "piedra" && manoJugador1 !== "papel" && manoJugador1 !== "tijeras") {
//             console.log(jugador1 +  " ingresó una opción inválida! Inténtalo de nuevo.")
//             continue;
//         }
//         if (manoJugador2 !== "piedra" && manoJugador2 !== "papel" && manoJugador2 !== "tijeras") {
//             console.log(jugador2 + " ingresó una opción inválida! Inténtalo de nuevo.")
//             continue;
//         }

//         if (manoJugador1 === manoJugador2) {
//             console.log("¡Empate! Vuelve a intentarlo.");
//         } else if ((manoJugador1 === "piedra" && manoJugador2 === "tijeras") ||
//                    (manoJugador1 === "papel" && manoJugador2 === "piedra") ||
//                    (manoJugador1 === "tijeras" && manoJugador2 === "papel")) {
//             console.log(jugador1 + " gana este turno");
//             break; 
//         } else {
//             console.log(jugador2 + " gana este turno")
//             break;
//         }
//     }
// }

// jugarPiedraPapelTijeras()




// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.


// for (let i = 1; i <= 5; i++) {
//     let linea = '';
//     for (let j = 1; j <= i; j++) {
//         linea += '* '
//     }
//     console.log(linea)

// }

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.


// for (let i = 5; i >= 1; i--) {
//     let linea = '';
//     for (let j = 1; j <= i; j++) {
//         linea += '* ';
//     }
//     console.log(linea);
// }



// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR




let numeros = [3, 180, 264, 479, 629, 814, 19, 903, 7, 996]

let n = numeros.length

for (let i = 1; i < n; i++) {
    let acomodar = numeros[i]
    let j = i - 1;

    while (j >= 0 && numeros[j] > acomodar) {
        numeros[j + 1] = numeros[j]
        j--
    }

    numeros[j + 1] = acomodar
}

console.log("Array ordenado:", numeros)


