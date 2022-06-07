/* Iteración #4: Probando For...in */
/* Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto: */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log("Propiedad: " + key + ", valor: " + alien[key]);
  };