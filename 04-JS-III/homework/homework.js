// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  // ES5
  // for (let i = 0; i < array.length; i++) {
  //   array[i] += 1;
  // }

  // return array;

  // array.forEach( (element, index, array) => {
  //   array[index] = element + 1;
  // } )

  // return array;

  // ES6
  const result = array.map(e => e + 1)
  return result;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método
  // Tu código:

  array.unshift(elemento);
  return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  const frase = palabras.join(' ');
  return frase;

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  return array.includes(elemento);

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  const reduc = (prev, curr) => prev + curr;
  const result = numeros.reduce(reduc);
  return result;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  // let result = 0;
  // let i = 0;

  // for(i ; i < resultadosTest.length ; i++) {
  //   const e = resultadosTest[i];
  //   result = result + e;
  // }

  // const average = result / resultadosTest.length;
  // return average;

  const callBack = (prev, curr) => prev + curr;
  const reduce = resultadosTest.reduce(callBack);
  const average = reduce / resultadosTest.length;
  return average

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  numeros.sort((a, b) => b - a);
  return numeros[0];

}


function multiplicarArgumentos(...args) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  // 2 ms
  // if ( args.length === 0 ) {
  //   return 0;
  // }else if( args.length === 1) {
  //   return args[0];
  // }

  // 2 ms
  if ( args.length === 0 ) return 0;
  
  const callBack = (prev, curr) => prev * curr;
  const product = args.reduce(callBack);
  return product;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  // ES5
  // var arr = []
  
  // for (let i = 0; i < arreglo.length; i++) {
    
  //   var element = arreglo[i];

  //   if (element > 18) {
  //     arr.push(element);
  //   }
      
  // }

  // return arr.length;

  // ES6
  const eighteen = arreglo.filter(e => e > 18);
  return eighteen.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  

  const laboral = [2, 3, 4, 5, 6];
  const fin = [1, 7];
  const c1 = laboral.includes(numeroDeDia);
  const c2 = fin.includes(numeroDeDia);

  // if (c1) {
  //   return 'Es dia Laboral';
  // }else if (c2) {
  //   return 'Es fin de semana';
  // }

  switch (true) {
    case c1:
      return 'Es dia Laboral';
    case c2:
      return 'Es fin de semana';
  }

  // return c1 ? 'Es dia Laboral' : 'Es fin de semana';
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  const letter = n.toString();
  const vocal = letter.charAt(0);
  if (vocal === '9') return true;

  return false;

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  const orden = (el, el2) => el - el2;
  arreglo.sort(orden);

  return arreglo[0] === arreglo[arreglo.length - 1] ? true : false;

}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  const meses = ['Enero', 'Marzo', 'Noviembre'];
  const [enero, marzo, abril] = meses;
  const busqueda = [];

  let i = 0;

  for (i; i < array.length; i++) {

    const element = array[i];
    
    if (element === enero || element === marzo || element === abril) {
      busqueda.push(element);
    }
        
  }

  return busqueda.length >= meses.length ? busqueda.sort((a, b) => b - a) : "No se encontraron los meses pedidos";

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  // ES5
  /*
  var mayores = [];
  var LIM = 100;
  for (let i = 0; i < array.length; i++) {
    
    const element = array[i];
    
    if ( element > LIM ) {
      mayores.push(element);
    }
    
  }
  
  return mayores; */
  

  // ES6
  const LIMITE = 100;
  const mayoresACien = array.filter( e => e > LIMITE );
  
  return mayoresACien;
  
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let breaks = [];
  let e = 0;
  let curr;
  let next;

  
  while (e < 10) {
    
      if ( breaks.length === 0 ) {
          breaks.push(numero+2);
          e++;
      }

      curr = breaks[e - 1];
      next = curr + 2;
      breaks.push(next);
      e++;
      
      if ( breaks.length === 10 ) {
          return breaks;
      }

      if ( e === next ) {
          break;
      }

  }
  
  return "Se interrumpió la ejecución";

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let flow = [];
  let e = 0;
  let curr;
  let next;
  
  while (e < 9) {
    
    if ( flow.length === 0 ) {
        flow.push(numero+2);
        e++;
    }

    curr = flow[e - 1];
    next = curr + 2;
    flow.push(next);
    e++;
      
    if ( e === 5 ) {
        continue;
    }

  }

  return flow;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
