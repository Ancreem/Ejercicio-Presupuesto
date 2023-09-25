let bodyPag = document.querySelector("body");


// Realizar una solicitud a la API de Pokémon
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((res)=> res.json())
  .then(data => {
    

    const carta = document.createElement(`div`)
    carta.classList.add("Pokemones")


    // Recorrer los resultados
    data.results.forEach(pokemon => {
      const botPoke = document.createElement(`button`)
      botPoke.id = "myPokemon"
      botPoke.innerText = pokemon.name
      botPoke.addEventListener(`click`, () => {
        Swal.fire({
            title: `${pokemon.name}`,
            text: 'Modal with a custom image.',
            
        });
      })

      carta.appendChild(botPoke)
      
      bodyPag.appendChild(carta)
    });
  })
  .catch(error => {
    console.error('Error al obtener datos de la API de Pokémon:', error);
  });

