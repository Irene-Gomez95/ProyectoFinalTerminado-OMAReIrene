/* Iteración #6: Función swap */
/* Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante. */
/* Sugerencia de array: */
let Array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

swap = (array, firstIndex, secondIndex) => {
    const fisrtElement = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = fisrtElement;

    return array;
};

const newListArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], (0 , 2));

    console.log(newListArray);
