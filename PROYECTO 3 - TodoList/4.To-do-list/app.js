console.log('funciona')

const formulario = document.getElementById('formulario');
const input = document.getElementById('input')
const listaTarea = document.getElementById('listaTareas');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();
let tareas = {
    160599062039: {
        id: 160599062039,
        texto: 'tarea #1',
        estado: false 
    },
    1605990682337: {
        id:1605990682337,
        texto: 'Tarea #2',
        estado:false
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pintarTareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

 console.log(Date.now());
formulario.addEventListener('submit', e => {
    e.preventDefault()
     console.log(e.target[0].value)
    console.log(e.target.querySelector('input5').value)
    console.log(input.value)
    setTarea(e)
})

const setTarea = e => {
    if(input.value.trim() === '') {
        console.log('está vacío')
        return
    }

    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }

    tareas[tarea.id] = tarea
    formulario.reset()
    input.focus()
    pintarTareas()

}

const pintarTareas = () => {
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        fragment.appendChild(clone)
    })

    listaTarea.appendChild(fragment)
}