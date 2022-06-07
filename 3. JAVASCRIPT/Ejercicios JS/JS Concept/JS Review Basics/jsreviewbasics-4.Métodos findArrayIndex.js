/* Iteración #4: Métodos findArrayIndex */
/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */
/* Sugerencia de función: */

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    if (obj === text) {
      return i;
    }
  }
}

const index = findArrayIndex(
  ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
  "Ajolote"
);
console.log(index);

const index2 = findArrayIndex(
  ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
  "Mosquito"
);
console.log(index2);
