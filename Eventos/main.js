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

let idGlobal = 1

let notas = []
let titulo = document.querySelector(".nombre")
let texto = document.querySelector(".area")
let guardar = document.querySelector(".guardar")
let borrar = document.querySelector(".borrar")

let borrarN = document.querySelector(".borrarN")

let cajaP = document.querySelector(".cartas")
let palabra = document.createElement("h4")
if(notas == ""){ 
    palabra.textContent = "NO HAY CARTAS PARA MOSTRAR"
    cajaP.appendChild(palabra)
}

function crearNota(){
    let caja = document.querySelector(".cartas")
    let carta = document.createElement("div")
    
            
            notas.push({
                id:idGlobal,
                titulo:titulo.value,
                texto:texto.value,
                realizada: false
            })

            carta.setAttribute("class", "card text-center cards")
            carta.innerHTML = `<div class="card-header">
                               <input onClick="marcarRealizada(${notas.id})" type="checkbox" ${notas.realizada? "checked": ""} class:"chekear">
                              <label for="chekear">${notas[notas.length - 1].titulo}</label>
                            </div>
                            <div class="card-body">
                              <p class="card-text">${notas[notas.length - 1].texto}</p>
                            </div>
                              <button type="button" class="btn btn-danger borrarN"  onclick="borrarNota(${notas[notas.length - 1].id})">Borrar</button>`
                              
        
            caja.appendChild(carta)
            
        }

let agregarNota = ()=>{

    
    if(titulo.value=="" ||titulo.value== " " ||titulo.value== "  "){
        titulo.value = ""
        titulo.setAttribute("placeholder", "No has agregado nada en este campo")
        if(texto.value=="" ||texto.value== " " ||texto.value== "  "){
            texto.value = ""
            texto.setAttribute("placeholder", "No has agregado nada en este campo")
        }
    }else if(texto.value=="" ||texto.value== " " ||texto.value== "  "){
        texto.value = ""
        texto.setAttribute("placeholder", "No has agregado nada en este campo")
    }
    else{

        crearNota()
        borrarText()
        console.log(notas)
        idGlobal++
        cajaP.removeChild(palabra)
        
    }

       
}
function borrarNota(id){
    notas[id-1] = ""
    console.log(notas)
    let cajaP = document.querySelector(".cartas")
    cajaP.innerHTML = ""

    for(let i = 0; i < notas.length; i++){
       
    if(notas[i] == ""){
        
    } else{
        let caja = document.querySelector(".cartas")
    let carta = document.createElement("div")
        carta.setAttribute("class", "card text-center cards")
        carta.innerHTML = `<div class="card-header">
                          <input onClick="marcarRealizada(${notas[i].id})" type="checkbox" ${notas[i].realizada? "checked": ""} class:"chekear">
                          <label for="chekear">${notas[i].titulo}</label>
                        </div>
                        <div class="card-body">
                          <p class="card-text">${notas[i].texto}</p>
                        </div>
                          <button type="button" class="btn btn-danger borrarN"  onclick="borrarNota(${notas[i].id})">Borrar</button>`
                          
    
        caja.appendChild(carta)
    }

        
   }


  }

let borrarText = ()=>{
    titulo.value = ""
    texto.value = ""
    console.log(notas)
}

borrar.addEventListener("click", ()=>{borrarText()})
guardar.addEventListener("click", ()=>{agregarNota()})

    

