let bodyPag = document.querySelector("body");

function buscador(){
  const buscador = document.createElement("input")
  buscador.setAttribute("type", "number");
  buscador.setAttribute("name", "valor");
  buscador.setAttribute("id", "valor");
  buscador.setAttribute("placeholder", "Ingrese Nombre o ID");
  bodyPag.appendChild(buscador)

  const enviar = document.createElement("input");
  enviar.setAttribute("type", "submit");
  enviar.setAttribute("value", "Enviar");
  bodyPag.appendChild(enviar)
}

buscador()


function numPokemonesMostrar(Num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${Num}/`)
  .then(respuesta => respuesta.json())
  .then(data => createPokemon(data))
}

function recorrerJson(cuantosRecorrera){
  for (let i = 1; i < cuantosRecorrera; i++) {
    numPokemonesMostrar(i)
  }
}

function crearPoke(pokemon){

  const container = document.createElement("div")
  container.classList.add("container")
  
  const tituloCont = document.createElement("div")
  tituloCont.classList.add("tituloCont")

  const titulo = document.createElement("h1")
  titulo.innerText = "Pokedex"

  const carta = document.createElement(`div`)
  carta.classList.add("pokemones")
  


  tituloCont.appendChild(titulo)
  container.appendChild(tituloCont)
  container.appendChild(carta)
  bodyPag.appendChild(container)

}

