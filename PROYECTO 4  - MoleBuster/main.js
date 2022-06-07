/* Estoy llamando a los elementos del html con DOM*/
const holes = document.querySelectorAll(".hole");
const timeLeft = document.querySelector("#timeLeft");
const scoreBoard = document.querySelector(".score");

let mole = null;
let scoreFinal = 0;
let hitPosition = null;
let currentTime = 60;
let timerId =
  null; /* Creamos varibale para poder finalizar el juego en 0 (Utilizo línea 20) */
let intervalMole = null;

/* Parte 1 - Contador del juego */

/* Estoy pintando las variables al html (nunca creo nada), (cada inner solo se ejecuta una vez) */
scoreBoard.innerHTML = scoreFinal;
timeLeft.innerHTML = currentTime; /* añande con innerHtml */

/* Tengo que poner const para hacer la variable en js despues poner el igual antes de parentesis para poder crear nuestra función que le queremos indicar */
/* cuando ponemos const en la función indicamos donde la guardamos */
const startGame = () => {
  if (currentTime === 60) {
    timerId = setInterval(
      contadorAtras,
      1000
    ); /* cada 1 segundo me ejecuta contadorAtrás */

    setTimeout(
      finalGame,
      60000
    ); /* Al finalizar los 60 segundos se ejecuta final Game*/
    
    intervalMole = setInterval(moveMole, 750);

    document
      .querySelector(".mole")
      .addEventListener(
        "click",
        scoreMole
      ); /* Parte 5 - hago que me escuhe el evento del clik y sume la puntuación */
  }
};

/* Creamos intervalo en la función de arriba para saber que hacer en el tiempo que indicamos para hacer nuestra cuentra atrás con los 60 segundos */
const contadorAtras = () => {
  currentTime--;
  timeLeft.innerHTML =
    currentTime; /* El innerHtml solo se ejecuta una vez por eso lo volvemos a incluir en la función donde se ejecuta el intervalo */
};

const finalGame = () => {
  clearInterval(timerId);
  console.log("Game Over!");
  currentTime = 60;
  clearInterval(intervalMole);
  document
    .querySelector(".mole")
    .removeEventListener(
      "click",
      scoreMole
    ); /* Parte 5 - Hacemos que pare la función de puntuación y de click */
  timeLeft.innerHTML = currentTime;
};

/* Parte 2- Crear al topo*/

mole = document.createElement("img");
mole.className = "mole";
holes[0].appendChild(
  mole
); /* Inner inserta en la izquierda lo que tengas en la derecha (en la izquierda es donde quiero insertar mi elemento y después del = es lo que yo quiero insertar)*/

console.log(holes);

/* Parte 3 - Hacer que el topo se mueva linealmente*/
let min = 0;
let max = 6;
const getRandomInt = (minhole, maxhole) => {
  return Math.floor(Math.random() * (maxhole - minhole)) + minhole;
  
};

const moveMole = () => {
   let randomNumber = getRandomInt(min , max);
    holes[randomNumber].appendChild(mole);
};


/*  Parte 4 - Click del topo para obtener puntos*/
const scoreMole = () => {
  scoreFinal++;
  console.log(scoreFinal);
  scoreBoard.innerHTML = scoreFinal;
};

/* tengo que hacer que la funcion solo se ejecuta una vez cuando se le al starty que de igual cuantas veces se ejecute el start para que solo haga la funcion una vez y topos aleatorios */

/*
const randomHole = () => {
    holes.forEach(hole => {
        hole.classList.remove("mole") //se remueven los topos
    })
   let randomPosition = holes[Math.floor(Math.random()*6)] //recorre aleatoriamente y multiplicar el numero de ollos y redondea, porque multiplica.
   randomPosition.classList.add("mole")
}
randomHole();
//   hitPosition = randomSquare.id


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

console.log("hola")
 */

/*****************************************************************/
/* let lastHole;

let isFinished = false; */

// let score = 0;
// let result = 0

// const timeForHansTopo = () => {
//     //Esta función creará el tiempo randomizado para que los Hans Topo salgan de los hoyos aleatoriamente
//     //Usando el método Math.random()
// }

// const randomHole = () => {
//     holes.forEach(hole => {
//         hole.classList.remove("mole") //se remueven los topos
//     })
//    let randomPosition = holes[Math.floor(Math.random()*6)] //recorre aleatoriamente y multiplicar el numero de ollos y redondea, porque multiplica.
//    randomPosition.classList.add("mole")
// }
// randomHole();

// const timeOutside = () => {
//Esta función determina el tiempo que los topos deben estar asomados
// }

// const startGame = () => {
//     scoreBoard.textContent = 0;
//     isFinished = false;
//     score = 0;
//     peep();
//     setTimeout(() => timeUp = true, 15000)
//muestra topos aleatoriamente durante 15 segundos
// }

// const wack = () => {
//Esta función sumará un punto al marcador y quitará la clase "up" del elemento clickado para ocultar al topo
// }

//Con un bucle for each asignamos la función "wack" al evento "click" en cada topo
// moles.forEach(mole => mole.addEventListener('click', wack));
