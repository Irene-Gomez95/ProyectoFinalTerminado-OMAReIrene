/* Iteración #2: Condicionales avanzados */
/* Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. */
/* Puedes usar este array para probar tu función: */

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

function trimestres() {
	for (let i = 0; i < alumns.length; i++) {
	alumn = alumns[i];

	let alumnoAprobado = 0;

	alumnoAprobado = alumn.T1 ? alumnoAprobado + 1 : alumnoAprobado;
	alumnoAprobado = alumn.T2 ? alumnoAprobado + 1 : alumnoAprobado;
	alumnoAprobado = alumn.T3 ? alumnoAprobado + 1 : alumnoAprobado;
	alumnoAprobado = alumnoAprobado >= 2 ? true : false;
	}

	console.log(alumns)

}
