/* Ejercicio 1 => Crea una función que tome como parámetro un número. Si es un número entero (sin
decimales) muestra por consola true. Si no, muestra por consola false. */

function isinteger(x) {
    if (Number.isInteger(x)) {
      return "true";
    }
    return "false";
  }
  console.log(fits(5));

/* Ejercicio 2 => Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Si
a contiene b, añade b al principio de a. Si no, añade b al final. Por ejemplo:

(“cheese”, “cake”) => output: “cheesecake”
(“Java”, “script”) => output: “JavaScript”

(“therefore I am”, “I think”) => output: “I think, therefore I am” */

function wordsTogether(a,b){

  if(a.includes(b)){

      return b +" "+ a;

  }else {

      return a +""+ b;

  }

}

console.log(wordsTogether('cheese', 'cake'));
 
/* Ejercico 3 => Crea una función que tome como parámetro un número y lo divida en dígitos
individuales dentro de un array. Tip: puedes usar el método split(); Por ejemplo:

(10) => output: [1,0] */

function toArray(num) {
  const newArr = String (num).split("");
  console.log (newArr);
  const arr = [];
  // arrow functions - constarrowFunction = a => {console.log(a)} un solo parametro
  //  (a, b) => {a + b} varios parametros

newArr.forEach((item) => {
  arr.push(Number(item))
});
  }
  console.log(arr);
  toArray (1234);
  

/* Ejercicio 4  => Crea una función que tome como parámetro un array. Si todos los elementos del
array son estrictamente iguales, muestra por consola true, de lo contrario muestra
false. Por ejemplo:

([true, true, true, true]) => output: true
(['10',10,10,10]) => output: false*/

functionareEqual(array) {
  for (Let i = 1; i < array.lenght; i++) {
    if (array[0] === array [i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(areEqual (["10", 10, 10])); 

/* Ejercicio 5 => Dado un array de números, muestra por consola un array con dichos números
ordenados en forma descendente.*/

function orderedNumbers(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}
console.log(orderedNumbers ([56, 0, 12, 4, 31]));

/* Ejercicio 6 => Dado un array de strings, muestra por consola un array con sus valores ordenados
alfabéticamente. Por ejemplo:

['b', 'c', 'd', 'a'] => output: ['a', 'b', 'c', 'd'] */

const myArray2 = ["a", "e", "b", "d", "c"];

console.log(myArray2.sort());


/* Ejercicio 7 => Crea una función que tome como parámetro un array de strings y muestra por
consola el string más largo. Por ejemplo:

(['help', 'me']) => output: “help”
●*/
function longestStr(arr) {
  let longestword = "";
  arr.foreach((word) => {
    if (word.lenght > longestword.lenght) {
      longestWorld = world;
    }
  });
  return longestWorld = word;
}
console.log(longestStr(["help", "me"]));

/* Ejercicio 8 => Crea una función que tome dos arrays de números como parámetros. Une ambos
arrays, remueve valores duplicados (si hay alguno) y ordena los números en orden
ascendente. */

let co = [9, 2, 3, 4];

let so = [1, 2, 6, 7];

const newfunction = (a, b) => {
  let por = a.concat(b);

  let result = por.filter((item, index) => {
    return por.indexOf(item) === index;
  });
  return result.sort();
};

console.log(newfunction(co, so))

/* Ejercicio 9 => Crea una función que tome un objeto como parámetro. Remueve la propiedad
“country” y su valor y muestra el resultado por consola. Por ejemplo:
const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'North
America' }

=> output: { city: 'Sacramento', */

const myObj = {
    city: "Sacramento",
    state: "California",
    country: "USA",
    continent: "NorthAmerica",
  };
  
  delete myObj.country;
  
  console.log(myObj);

/* Ejercicio 10 => Trabajando con el mismo array anterior, muestra por consola el valor de la propiedad
“city”*/

console.log(myObj.city);


/* Ejercicio 11 => Algunas de las propiedades de los siguientes objetos son strings vacíos.
Reemplazalos por el valor “null”, empleando para ello una función que tome como
parámetro dichos objetos. Muestra por consola el objeto resultante

{ a: 'a', b: 'b', c: '' }
{ a: '', b: 'b', c: ' ', d: 'd' }
{ a: 'a', b: 'b ', c: ' ', d: '' }
=> output: { a: 'a', b: 'b', c: null }*/

function changeNull(array) {
    for (clave in array) {
        if (array[clave] == '')
            array[clave] = null;
    };
    return array;
}

var x = changeNull({'a': 'a', 'b': 'b', 'c': ''});
console.log(x);

 /* Ejercicio 12 => Crea una función que tome como parámetros un array de objetos y un string. Agrega
a cada uno de los objetos la propiedad “continent” que tome como valor el parámetro
de string. Muestra por consola el nuevo array.

([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
=> output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country:
'Thailand', continent: 'Asia' }]

([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
=> output: [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country:
'France', continent: 'Europe' }] */

 function addContinent(arrayData, continent) {
    arrayData.forEach(element => {
        element['continent'] = continent;
    });
    return arrayData;
}

var y = addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia');
console.log(y);

var x = addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe');
console.log(x);

/* Ejercicio 13 => Dado el siguiente HTML, crea una función que, a través de la manipulación del
DOM, cambie el color de fondo de los párrafos, cada uno con colores diferentes.
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Set the background color of a paragraph</title>
</head>
<body>
<input type="button" value="Click to set paragraph background
color" onclick="setBackground()">
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</body>
</html> */


function setBackground() {
    var resultado = document.getElementsByTagName("p");
    for(let i = 0;i < resultado.length; i++) {
        if (i == 1)
            resultado[i].style.background = '#000';
        else
            resultado[i].style.background = '#836aca';
    }
}

/* Ejercicio 14 => Dado el siguiente array de objetos, manipula el DOM para imprimir en el html como
un h1 los valores de cada una de las propiedades del objeto.Tip: debes hacer uso de
appendChild().*/

const dogslist = document.querySelector(".dogs-list");

const dogs = [
  {name="balto", type:"chihuahua"},
  {name=" loli", type:"puddle"},
]
 for (Let i = 0; i < dogs.lenght; i++) {
  //seleccionar perro y guardarlo en una variable
  const dog = dogs[i];

   dogData.innerText = `${dogs.name} es un ${dogs.type}`; // template strings
   dogslist.appendChild(dogData);
 }
