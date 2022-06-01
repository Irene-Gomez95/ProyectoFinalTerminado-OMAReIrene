/* Iteración #2: Buscar la palabra más larga */
/* Completa la función que tomando un array de strings como argumento devuelva 
el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(array) {
  let palabraMasLarga = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > palabraMasLarga.length) {
      palabraMasLarga = array[i];
    } else {
      continue;
    }
  }

  console.log(palabraMasLarga);
}

findLongestWord(avengers);
