// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var primero;
  primero = array[0];
  return primero;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo;
  ultimo = array[array.length-1];
  return ultimo;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largoa;
  largoa = array.length;
  return largoa;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var c;
  for(c=0;c<array.length;c++)
    array[c]++;
  return array;
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
  // Pista: usa el método `.unshift`
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
  var c, cadena;
  cadena=palabras[0];
  for(c=1;c<palabras.length;c++){
    cadena = cadena + " " + palabras[c];
  }
  return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var c;
  for(c=0;c<array.length;c++){
    if(array[c]===elemento)
      return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var c,suma;
  suma=0;
  for(c=0;c<numeros.length;c++)
    suma = suma + numeros[c];
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var c, suma, prom;
  suma=0;
  for(c=0;c<resultadosTest.length;c++)
    suma = suma + resultadosTest[c];
  prom=suma/resultadosTest.length;
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código
  var c, mayor;
  mayor=numeros[0];
  for(c=1;c<numeros.length;c++)
    if(numeros[c]>mayor)
      mayor=numeros[c];
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto, c;
  if(arguments.length===0)  
    return 0;
  else{
    producto=arguments[0];
    for(c=1;c<arguments.length;c++)
      producto = producto * arguments[c];
    return producto;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var c, n;
  c=0;
  for(n=0;n<arreglo.length;n++)
    if(arreglo[n]>18)
      c++;
  return c;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var respuesta;
  if(numeroDeDia===2 || numeroDeDia===3 || numeroDeDia===4 || numeroDeDia===5 || numeroDeDia===6)
    respuesta = "Es dia Laboral";
  else
    if(numeroDeDia===1 || numeroDeDia===7)
      respuesta = "Es fin de semana";
    else
      respuesta = "Numero incorrecto";
  return respuesta;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num;
  num = Math.sqrt(n*n);

  while(num>=10)
    num = (num - (num % 10)) / 10;

  if (num===9)
    return true;
  else
    return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var c;
  for(c=1;c<arreglo.length;c++)
    if(arreglo[c-1]!==arreglo[c])
      return false;
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var MisMeses = new Array();
  var c, cr, ce, cm, cn;         //Contadores de los meses
  cr=0; 
  ce=0; 
  cm=0; 
  cn=0;
  for(c=0;c<array.length;c++){
    if(array[c]==="Enero" || array[c]==="Marzo" || array[c]==="Noviembre"){
      MisMeses[cr]=array[c];
      cr++;
      switch(array[c]){
        case "Enero":
          ce=1;
          break;
        case "Marzo":
          cm=1;
          break;
        case "Noviembre":
          cn=1;
          break;
        default:
      }
    }
  }
  if(cr===3 && ce===1 && cm===1 && cn===1)
    return MisMeses;
  else
    return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayc = new Array();
  var c, cm;
  cm=0;
  for(c=0;c<array.length;c++){
    if(array[c]>100){
      mayc[cm]=array[c];
      cm++;
    }
  }
  return mayc;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i, respuesta;
  var nums = new Array();
  for(i=0;i<10;i++){
    numero = numero + 2;
    nums[i]=numero;
    if(i===numero){
      respuesta = "Se interrumpió la ejecución";
      break;
    }
    respuesta = nums;
  }
  return respuesta;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var i,c, respuesta;
  var nums = new Array();
  c=0;
  nums[c]=numero;
  for(i=1;i<=10;i++){
    if(i===5){
      continue;
    }
    numero = numero + 2;
    nums[c]=numero;
    c++;
  }
  return nums;
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
