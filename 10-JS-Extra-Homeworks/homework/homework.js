// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //Debemos utilizar una función que recorra las propiedades de un objeto
  var matriz = [];
  var c;
  // console.log("OBJETO:");
  // console.log(objeto);
  for(const propiedad in objeto){ //Recorre todas las propiedades en el 'objeto'
    matriz.push([propiedad, objeto[propiedad]]);
  }
  // console.log("MATRIZ:");
  // console.log(matriz);
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var Conteo = {};
  var Respuesta = Object.create(Conteo);
  var c;
  var cads = string.split("");
  for(c=0;c<cads.length;c++){
    if(Conteo[cads[c]]===undefined)
      Conteo[cads[c]]=1;
    else
      Conteo[cads[c]]++;
  }
  // console.log("Conteo => " + Conteo);
  return Conteo;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cadena = s.split("");
  //console.log("Cadena Inicial = " + cadena);
  var n = cadena.length; 
  var c =0, p=0;
  while(c<n){
    if(cadena[p]!==cadena[p].toUpperCase()){
      cadena.push(cadena[p]);
      cadena.splice(p,1);
    }
    else{
      p++;
    }
    c++;
  }
  cadena = cadena.join("");
  //console.log("Cadena Final   = " + cadena);
  return cadena;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //console.log("Frase Inicial => " + str);
  var cadena = str.split(" ");
  var cad2, cartemp;
  var c1, c2;
  for(c1=0;c1<cadena.length;c1++){
    cad2 = cadena[c1].split("");
    for(c2=0;c2<(cad2.length/2);c2++){
      cartemp = cad2[c2];
      cad2[c2] = cad2[cad2.length-1-c2];
      cad2[cad2.length-1-c2] = cartemp;
    }
    cadena[c1] = cad2.join("");
  }
  cadena = cadena.join(" ");
  //console.log("Frase Final   => " + cadena);
  return cadena;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var nrosep = [];
  var c=0;

  while(numero>=10){
    nrosep.unshift(numero % 10);
    c++;
    numero = (numero - (numero % 10)) / 10;
  }
  nrosep.unshift(numero % 10);

  for(c=0;c<(nrosep.length/2);c++){
    if(nrosep[c]!==nrosep[nrosep.length-1-c]){
      break;
    }
  }
  if(c<nrosep.length/2){
    return "No es capicua";
  }
  else{
    return "Es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadaux;
  var i, c, n;
  cadaux = cadena.split("");
  i=1;
  c=0;
  n=cadaux.length;
  while(i<=n){
    if(cadaux[c].toUpperCase()==='A' || cadaux[c].toUpperCase()==='B' || cadaux[c].toUpperCase()==='C')
      cadaux.splice(c,1);
    else
      c++;
    i++;
  }
  cadaux = cadaux.join("");
  return cadaux;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux = [];
  var a, b;
  for(a=0;a<arr.length-1;a++){
    for(b=a+1;b<arr.length;b++){
      if(arr[a].length>arr[b].length){
        aux = arr[a];
        arr[a] = arr[b];
        arr[b] = aux;
      }
    }
  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var c1, c2;
  var arreglor = [];
  for(c1=0;c1<arreglo1.length;c1++){
    for(c2=0;c2<arreglo2.length;c2++){
      if(arreglo1[c1]===arreglo2[c2]){
        arreglor.push(arreglo1[c1]);
      }
    }
  }
  return arreglor;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

