let bodyPag = document.querySelector("body");


// Realizar una solicitud a la API de Pokémon
fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then((res)=> res.json())
  .then(data => crearPoke(data))

function apiCont(namePoke){
  fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
  .then((res)=> res.json())
  .then(data => console.log(data))
}


  function crearPoke(data){
    
    const tituloCont = document.createElement("div")
    const titulo = document.createElement("h1")
    const container = document.createElement("div")
    const carta = document.createElement(`div`)
    tituloCont.classList.add("tituloCont")
    titulo.innerText = "Pokedex"
    carta.classList.add("pokemones")
    container.classList.add("container")

    
    
    // Recorrer los resultados
    data.results.forEach(pokemon => {
      const botPoke = document.createElement(`button`)
      const nombrePoke = pokemon.name
      botPoke.id = "myPokemon"
      botPoke.innerText = pokemon.name
      apiCont(nombrePoke)

      botPoke.addEventListener(`click`, () => {
        Swal.fire({
            title: `${pokemon.name}`,

        });
      })

      tituloCont.appendChild(titulo)
      carta.appendChild(botPoke)
      container.appendChild(tituloCont)
      container.appendChild(carta)
      
      bodyPag.appendChild(container)
    });
  }

