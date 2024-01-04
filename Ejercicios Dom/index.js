// 1:

const titulo = document.getElementById('title')

// 2:

titulo.innerText = "Frutas"

// 3:

const  contenedores = document.querySelectorAll('.bgcolor')
 for (let contenedor of contenedores) {
    contenedor.className = "bg-orange-600" ;
}

// 4:

const parrafoFooter = document.getElementById('pfooter')
parrafoFooter.innerText = "Juan Jose Faella Cohort: 53"
console.log(parrafoFooter)

// 5:

const crearDiv = document.createElement("div")
const traerMain = document.getElementById('idMain')
crearDiv.id = "contenedor"
traerMain.appendChild(crearDiv)
const capturarDiv = document.getElementById("contenedor")

// 6: 

function card(nombre, foto, descripcion){
    return `<article class="cartaFrutas">
    <h2>${nombre}</h2>
    <img src=${foto} alt="Frutas">
    <p>${descripcion}</p>
    </article>`
}

//7:

function dataCard(frutas){
    let returnCartas = ""
    for (const fruta of frutas) {
        returnCartas += card(fruta.nombre, fruta.foto, fruta.descripcion)
    }
    capturarDiv.innerHTML += returnCartas
    console.log(returnCartas)
}

dataCard(frutas)

// 9: 



const titleFrutas = document.createElement("h2")
const crearDivLista = document.createElement("div")
crearDivLista.id = "lista"
titleFrutas.textContent = "Frutas Dulces"
crearDivLista.appendChild(titleFrutas)
traerMain.appendChild(crearDivLista)
const capturarDivLista = document.getElementById("lista")

// 10 :

function crearLista (frutas){
    const frutasDulces = frutas.filter(fruta => fruta.esDulce)
    const listaDesordenada = document.createElement('ul')
    frutasDulces.forEach(fruta => {
        const elementoLista = document.createElement('li')
        elementoLista.textContent = fruta.nombre
        listaDesordenada.appendChild(elementoLista)
    });
    return listaDesordenada
}
// 11 :
const listaFrutasDulces = crearLista(frutas);
const divLista = document.getElementById("lista")
divLista.appendChild(listaFrutasDulces)
