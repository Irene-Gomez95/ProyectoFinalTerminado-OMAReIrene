/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let countryList = document.createElement("ul");
for (const country of countries) {
  let countryItem = document.createElement("li");
  countryItem.textContent = country;
  countryList.appendChild(countryItem);
}
document.body.appendChild(countryList);



/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

let text$$ = document.querySelector(".fn-remove-me");
text$$.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let selectDiv = document.querySelector('[data-function="printHere"]');

let createCarList = document.createElement("ul");

for (const car of cars) {
  let createCarItem = document.createElement("li");
  createCarItem.textContent = car;
  createCarList.appendChild(createCarItem);
}

selectDiv.appendChild(createCarList);

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; */

const pictures = [
  { title: "Titulo 1", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Titulo 2", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Titulo 3", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Titulo 4", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Titulo 5", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const picture of pictures) {
  let picturelist = document.createElement("div");
 /*  picturelist.innerHTML = `<h4>${picture.title}</h4><img src=${picture.imgUrl} />`; */
 /* 1.6 */
  let titulo = document.createElement("h4");
  titulo.textContent = picture.title;
  picturelist.appendChild(titulo);
  let imagen = document.createElement("img");
  imagen.src = picture.imgUrl;
  picturelist.appendChild(imagen);
  let buttonlist = document.createElement("button");
  buttonlist.textContent = "Elimina esta imagen";
  picturelist.appendChild(buttonlist);
  buttonlist.addEventListener("click", 
    function(){
      imagen.remove();
    }) 
  document.body.appendChild(picturelist);
}


/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

const lastElementButton = document.querySelector("#delete-last-element");
lastElementButton.addEventListener("click", function () {
  const selectDivs = document.querySelectorAll("div");
  selectDivs[selectDivs.length - 1].remove();
});


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries) {
  let createCountryItem = document.createElement("div");
  createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";

  createCountryItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    createCountryItem.remove();
  });

  document.body.appendChild(createCountryItem);
}