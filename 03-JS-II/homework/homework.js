// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if ( x === y ) return x;
  return x > y ? x : y;

}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  const EDAD_MIN = 18;
  return edad >= EDAD_MIN ? 'Allowed' : 'Not allowed';

}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devo lver el estado de conexión de usuario en cada uno de los casos.
  switch (true) {
    case status === 1:
      return 'Online';
    case  status === 2:
      return 'Away';
    default:
      return 'Offline';
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  const languages = [{lang: 'aleman', greeting: 'Guten Tag!'},{lang: 'mandarin', greeting: 'Ni Hao!'},{lang: 'ingles', greeting: 'Hello!'}];
  let index = 0;

  for (index; index < languages.length; index++) {  
    const element = languages[index];
    if ( idioma === element.lang ) return element.greeting;
  }

  return 'Hola!'
}


function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch (true) {
    case color === 'blue':
      return 'This is blue';
    case color === 'red':
      return 'This is red';
    case color === 'green':
      return 'This is green';
    case color === 'orange':
      return 'This is orange';
    default:
      return 'Color not found';
  }
  
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero < 50 && numero > 20;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  // return Math.floor(numero) === numero
  return Number.isInteger(numero);
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  const test = [3, 5];
  const [three, five] = test;
  const r1 = numero % three;
  const r2 = numero % five;


  // if ( r1 === r2 ) return 'fizzbuzz';
  
  // if ( r1 === 0 ) {
  //   return 'fizz';
  // } else if ( r2 === 0 ) {
  //   return 'buzz';
  // }

  switch (true) {
    case r1 === r2:
      return 'fizzbuzz';
    case r1 === 0:
      return 'fizz';
    case r2 === 0:
      return 'buzz';
  }

  return numero;
  
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  // Rules
  const c1 = num1 > num2 && num1 > num3 && num1 >= 1;
  const c2 = num1 < 0 || num2 < 0 || num3 < 0;
  const c3 = num3 > num1 && num3 > num2;
  const c4 = num1 === 0 || num2 === 0 || num3 === 0;

  switch (true) {
    case c4:
      return 'Error';
    case c2:
      return 'Hay negativos';
    case c1:
      return 'Número 1 es mayor y positivo';
    case c3:
      num3 += 1;
      return num3;
    default:
      return false;
  }

}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  // REVISAR 
  let div = 2;

  if ( numero < 2 ) return 'Los numeros primos solo pueden empezar desde el num. dos';
  if ( numero % div === 1 ) {
    return true
  }else {
    return false
  }
  // if ( numero % div === 0 ) return false;

}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if ( valor === 0 ) return 'Neutro';
  return valor >= 1 ? 'Soy verdadero' : 'Soy falso'

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let seis = [];

  if ( seis.length === 0 ) {
    for (let index = 0; index <= 10; index++) {
      seis.push(index * 6)
    }

    return seis;
  }
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  if ( isNaN(numero) && (numero??false) ) return 'No es un numero o no se encuentra definido';
  let container = numero.toString().trim();
  return container.length === 3 ? true : false;

}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

  let i = 0;

  do {
    i += 1;
    numero += 5;
  } while(i < 8);
  
  return numero;
  

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
