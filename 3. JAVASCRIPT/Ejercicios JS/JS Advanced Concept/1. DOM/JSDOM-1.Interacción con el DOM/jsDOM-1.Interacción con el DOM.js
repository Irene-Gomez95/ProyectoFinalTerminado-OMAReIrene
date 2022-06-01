/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme** */

showButton = document.querySelector(".showme");
console.log(showButton);

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado);

/* 1.3 Usa querySelector para mostrar por consola todos los p */

allPElements = document.querySelectorAll("p");
console.log(allPElements);


/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

pokemonClassElements = document.querySelectorAll(".pokemon");
console.log(pokemonClassElements);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */

showAllFunction = document.querySelectorAll('[data-function="testMe"]');

console.log(showAllFunction);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

showBatman = document.querySelectorAll('[data-function="testMe"]');

console.log(showBatman[2]);
