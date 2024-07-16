// 1. Crear una aplicación que calcule el índice de masa corporal.

let estatura = document.getElementById("validation01")
let peso = document.getElementById("validation02")
let calcular = document.getElementById("calcular")
let resultado = document.getElementById("resultadoIM")

calcular.addEventListener("click", operacion);

function operacion() {
  resultado.value = (validation02.value / Math.pow((validation01.value/100), 2)).toFixed(2) + " es tu Indice de Masa Corporar."

}

// 2. Crear una aplicación de conversion de divisa.

let validation03 = document.getElementById("validation03")
let validation04 = document.getElementById("validation05")

validation03.addEventListener("keyup", myFunction1);

function myFunction1 () {
  let oper1 = validation03.value * 0.00109098843552258346061531747763
    validation04.value = oper1.toFixed(3)
}

validation04.addEventListener("keyup", myFunction2);

function myFunction2 () {
  let oper2 = validation04.value * 916.60
    validation03.value = oper2.toFixed(3)
}


// 3. Realizar una aplicación de notas.

let idGlobal = 1;
let notas = [];
let titulo = document.querySelector(".nombre");
let texto = document.querySelector(".area");
let guardar = document.querySelector(".guardar");
let borrar = document.querySelector(".borrar");

let cajaP = document.querySelector(".cartas");
let palabra = document.createElement("h4");
if (notas.length === 0) { 
    palabra.textContent = "NO HAY CARTAS PARA MOSTRAR";
    cajaP.appendChild(palabra);
}

function crearNota() {
    let carta = document.createElement("div");
    let nuevaNota = {
        id: idGlobal,
        titulo: titulo.value,
        texto: texto.value,
        realizada: false
    };
    
    notas.push(nuevaNota);

    carta.setAttribute("class", "card text-center cards");
    carta.innerHTML = `<div class="card-header">
                       <input onClick="marcarRealizada(${nuevaNota.id})" type="checkbox" ${nuevaNota.realizada ? "checked" : ""} class="chekear">
                      <label for="chekear" class="tex1 ${nuevaNota.realizada ? 'text-decoration-line-through':''}"  ${nuevaNota.realizada ? 'text-decoration-line-through':''}>${nuevaNota.titulo}</label>
                    </div>
                    <div class="card-body">
                      <p class="card-text tex2 ${nuevaNota.realizada ? 'text-decoration-line-through':''}">${nuevaNota.texto}</p>
                    </div>
                      <button type="button" class="btn btn-danger borrarN" onclick="borrarNota(${nuevaNota.id})">Borrar</button>`;
                      
    cajaP.appendChild(carta);

    idGlobal++;

    borrarText()
    cajaP.removeChild(palabra);
    
  
    
}


let agregarNota = () => {
    if (titulo.value.trim() === "") {
        titulo.value = "";
        titulo.setAttribute("placeholder", "No has agregado nada en este campo");
    } else if (texto.value.trim() === "") {
        texto.value = "";
        texto.setAttribute("placeholder", "No has agregado nada en este campo");
    } else {

        crearNota();


    }
    

   
   
};




function borrarNota(id) {
    notas = notas.filter(note => note.id !== id);
    applyFilters();
}

let borrarText = () => {
    titulo.value = "";
    texto.value = "";
};


borrar.addEventListener("click", borrarText);
guardar.addEventListener("click", agregarNota);

function marcarRealizada(id) {
    let note = notas.find(note => note.id === id);
    if (note) {
        note.realizada = !note.realizada;

    }
    
    applyFilters();
}

function filterByCompleted(array) {
    return array.filter(note => note.realizada);
}

function filterByText(array, text) {
    if (!text) return array;
    return array.filter(note => note.titulo.includes(text) || note.texto.includes(text));
}

function applyFilters() {
    const searchText = document.querySelector(".buscar").value;
    const filterCompleted = document.querySelector(".realizadas").checked;

    let filteredNotes = notas;
    if (filterCompleted) {
        filteredNotes = filterByCompleted(filteredNotes);
    }
    filteredNotes = filterByText(filteredNotes, searchText);

    renderNotes(filteredNotes);
}

function renderNotes(notas) {
    const container = document.querySelector(".cartas");
    container.innerHTML = '';

    notas.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note card text-center cards' + (note.realizada ? ' completed' : '');
        noteElement.innerHTML = `
            <div class="card-header">
                <input onClick="marcarRealizada(${note.id})" type="checkbox" ${note.realizada ? "checked" : ""} class="chekear">
                <label for="chekear" class="${note.realizada ? 'text-decoration-line-through':''}">${note.titulo}</label>
            </div>
            <div class="card-body">
                <p class="card-text ${note.realizada ? 'text-decoration-line-through':''}">${note.texto}</p>
            </div>
            <button type="button" class="btn btn-danger borrarN" onclick="borrarNota(${note.id})">Borrar</button>
        `;
        container.appendChild(noteElement);
    });

    if (notas.length === 0) {
        palabra.textContent = "NO HAY CARTAS PARA MOSTRAR";
        container.appendChild(palabra);
    }
}

document.querySelector(".buscar").addEventListener('input', applyFilters);
document.querySelector(".realizadas").addEventListener('change', applyFilters);

renderNotes(notas);