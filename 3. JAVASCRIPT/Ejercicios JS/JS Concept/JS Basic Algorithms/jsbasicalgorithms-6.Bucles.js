/* Iteración #6: Bucles */
/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */
for (let index = 0; index <= 9; index++){
    let element = index;
    console.log(element);
}

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */
for (let index = 0; index <= 9; index++){
    let element = index % 2 == 0;
    console.log(element);
}

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'. */
for (index = 0; index < 10; index++){
    if (index === 9){
        console.log("dormido!");
    } else {
        console.log("Intentando dormir")
    }
}
