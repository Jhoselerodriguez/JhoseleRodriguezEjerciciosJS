// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos).


// let ingresarNumero = parseInt(prompt("ingresa un numero"))

// for(let i = 1; i <= 10; i++){
//    let multiplos = ingresarNumero*i
//    console.log(ingresarNumero + "* " + i +" = " + multiplos)
// }



// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

// let suma = 0
// let numero

// while(true){
//     let numero = parseInt(prompt("ingresa un numero"))

//     if(numero == 0){
//         alert("Por favor, ingresa un número válido.");
//         break;
//     }else{
//        suma = suma + numero
//        console.log(suma)
//     }
// }



// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una variable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha  cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado.

//  let numeroSecreto = 43;
//  let intentos = 0;

//  for(let i = 0; i < 100000; i++){
//      let ingresar = parseInt(prompt("Adivine el numero del 1 al 100"));

//      intentos++;

//      if(numeroSecreto<ingresar){
//          alert("El numero ingresado es mayor");
//      }
//      else if(numeroSecreto>ingresar){
//          alert("El numero ingresado es menor");
//      }
//      else{
//          alert("Felicidades, adivinaste el numero en " + intentos + " intentos");
//          break;
//      }
//  }



// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el numero ya no es primo.

//  function esPrimo(numero) {

//      if (numero <= 1) {
//          return false;
//      }

//      for (let i = 2; i <= Math.sqrt(numero); i++) {
//          if (numero % i === 0) {
//              return false;
//          }
//      }

//      return true;
//  }


//  let numero = parseInt(prompt("ingresa un numero"));
//  if (esPrimo(numero)) {
//      console.log(`${numero} es un número primo.`);
//  } else {
//      console.log(`${numero} no es un número primo.`);
//  }



// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

//  let numero = parseInt(prompt("Introduce un número"));

//  let divisores = [];

//  for (let i = 1; i <= numero; i++) {
//      if (numero % i === 0) {
//          divisores.push(i);
//      }
//  }

//  console.log(`Los divisores de ${numero} son: ${divisores.join(', ')}`);



// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array.

//  let array = ["Nombre", "Apellido", "Edad", "Nacimiento", "DNI", "Estado_Civil", "Direccion", "Celular", "Hijos", "Antecedentes"];


//  for (let i = 0; i < array.length; i++) {
//     console.log(`Elemento ${i + 1}: ${array[i]}`);
//   }



// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.

// let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  for (let i = 0; i < miArray.length; i++) {
//     console.log(`Elemento ${i + 1}: ${miArray[i]*2}`);
//  }



// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array.


//  let persona1 = {nombre:"Jose",  edad: 64, altura: 161, papel: "Padre" }
//  let persona2 = {nombre:"Osnay",  edad:42, altura:163, papel:"Esposa"}
//  let persona3 = {nombre:"Jose Thomas", edad:7, altura:110, papel:"hijo3",}
//  let persona4 = {nombre:"Juan Jose", edad: 8, altura:130, papel:"hijo2"}
//  let persona5 = {nombre:"Jose David", edad:14, altura:165, papel:"hijo mayor"}

// let familia = [persona1, persona2, persona3, persona4, persona5]

//  for(let i = 0; i < familia.length; i++){
//      let presentacion = `Mi nombre es ${familia[i].nombre}, tengo ${familia[i].edad} años, soy ${familia[i].papel} y mido ${familia[i].altura}cm`
//      console.log(presentacion)
// }



// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares.

//  let array = [1,2,3,4,5,6,7,8,9,10]
//  let impares = []
//  for(let i = 0; i <= array.length; i++){

//      let residuo = array[i] % 2
//      if(residuo == 0){
//      }else{
//          impares[i] = array[i]
//      }
//  }
//  console.log(impares)



// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.

//  let array = []

//  for(let i = 0; i < 100000; i++){
//      let numero = parseInt(prompt("ingresa un numero"))
//      array[i] = numero
    
//      if(numero == 0){
//          console.log(array)
//          break
//      }
    
//  }

//  let suma = 0
//  for(let i = 0; i < array.length; i++){
//      let residuo = array[i] % 2
//      if(residuo == 0){

//      }
//      else{
//          suma = suma + array[i]
//      }
//  }
//  console.log("La sumatoria de los impares es: " +suma)

//  let suma2 = 0
//  for(let i = 0; i < array.length; i++){

//      let residuo = array[i] % 2
//      if(residuo == 0){
//          suma2 = suma2 + array[i]
//      }
//      else{
       
//      }
//  }
//  console.log("La sumatoria de los pares es: " + suma2)



// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande.

//  let array = [34,85,45,36,47,15,22,65,56,54]
//  let numeroMayor = Math.max(...array)
//  console.log("El numero mayor es: " + numeroMayor)



// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico.

// let array = [34,85,45,36,47,15,22,65,56,54]
// let numeroMenor = Math.min(...array)
// console.log("El numero menor es: " + numeroMenor)



// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora.

// let player1 = prompt("Nombre player 1")
// let player2 = prompt("Nombre player 2")

// let elegir1 = prompt("Player 1, Piedra, papel o tijeras").toUpperCase()
// let elegir2 = prompt("Player 2, Piedra, papel o tijeras").toUpperCase()


// if((elegir1 == "TIJERAS" && elegir2 == "PAPEL") || (elegir1 == "PIEDRA" && elegir2 == "TIJERA") || (elegir1 == "PAPEL" && elegir2 == "PIEDRA")){
//     alert(`El jugador ${player1} gano`)
// }
// else if((elegir2 == "TIJERAS" &&elegir1 =="PAPEL")||(elegir2 == "PIEDRA" && elegir1 == "TIJERA") || (elegir2 == "PAPEL" && elegir1 == "PIEDRA")){
//     alert(`El jugador ${player2} gano`)
// }
// else if((elegir2 == "TIJERAS" &&elegir1 =="TIJERAS")||(elegir2 == "PIEDRA" && elegir1 == "PIEDRA") || (elegir2 =="PAPEL" && elegir1 == "PAPEL")){
//     alert("Sigan jugando, hubo un empate")
//     while(true){
//         let elegir1V2 = prompt("Player 1, Piedra, papel o tijeras").toUpperCase()
//         let elegir2V2 = prompt("Player 2, Piedra, papel o tijeras").toUpperCase()
//     if((elegir1V2=="TIJERAS"&&elegir2V2=="PAPEL")||(elegir1V2=="PIEDRA"&&elegir2V2=="TIJERA")||(elegir1V2=="PAPEL"&& elegir2V2 == "PIEDRA")){
//             alert(`El jugador ${player1} gano`)
//             break
//         }
//     else if((elegir2V2=="TIJERAS"&&elegir1V2=="PAPEL")||(elegir2V2=="PIEDRA"&&elegir1V2=="TIJERA")||(elegir2V2=="PAPEL"&&elegir1V2=="PIEDRA")){
//             alert(`El jugador ${player2} gano`)
//             break
//         }
//     else if((elegir2V2=="TIJERAS"&&elegir1V2=="TIJERAS")||(elegir2V2=="PIEDRA"&&elegir1V2=="PIEDRA")||(elegir2V2=="PAPEL"&& elegir1V2=="PAPEL")){
//             alert("Sigan jugando, hubo un empate")
            
//         }
//     }
// }


// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

//  for(let i = 0; i < 5;i++){
//      let asteriscos = ["*","**", "***", "****", "*****"]
//      console.log(asteriscos[i])
//  }

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido.

// for(let i = 0; i < 5;i++){
//     let asterisco = ["*","**", "***", "****", "*****"].reverse()
//     console.log(asterisco[i])
// }

// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)
