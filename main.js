let bodyPag = document.querySelector("body");

const container = document.createElement("div")
container.classList.add("container")

const containerPoke = document.createElement("div")
containerPoke.setAttribute("id", "contPoke");

bodyPag.appendChild(container)
bodyPag.appendChild(containerPoke)



function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

function fetchPokemons(numeroPokemones) {
  for (let i = 1; i <= numeroPokemones; i++) {
    fetchPokemon(i);
  }
}

function titulo() {
  const tituloCont = document.createElement("div");
  const link = document.createElement("a")
  tituloCont.classList.add("tituloCont");
  const titulo = document.createElement("h1");
  titulo.innerText = "pokedex";

  tituloCont.appendChild(titulo);
  container.appendChild(tituloCont);
  titulo.addEventListener("click", function(){
    location.reload()
  } )
}

function buscador() {
  const contBuscador = document.createElement("div");
  contBuscador.setAttribute("class", "contBuscador");

  const form = document.createElement("form");

  const buscadorInput = document.createElement("input");
  buscadorInput.setAttribute("type", "text");
  buscadorInput.setAttribute("name", "valor");
  buscadorInput.setAttribute("id", "valor");
  buscadorInput.setAttribute("placeholder", "Ingrese Nombre o ID");

  const enviar = document.createElement("input");
  enviar.setAttribute("type", "submit");
  enviar.setAttribute("value", "Buscar");

  form.appendChild(buscadorInput);
  form.appendChild(enviar);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const valor = buscadorInput.value.trim();
    if (valor) {
      // Llamar a la función para buscar el Pokémon por nombre o ID
      searchPokemon(valor);
    }
  });

  contBuscador.appendChild(form);
  container.appendChild(contBuscador);
}

function searchPokemon(valor) {
  // Hacer una solicitud a la API para buscar el Pokémon por nombre o ID
  fetch(`https://pokeapi.co/api/v2/pokemon/${valor.toLowerCase()}/`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Pokémon no encontrado");
      }
      return res.json();
    })
    .then((data) => {
      // Crear el Pokémon encontrado
      container.innerHTML = ""; // Limpiar la lista actual de Pokémones
      titulo()
      buscador()
      createPokemon(data);
    })
    .catch((error) => {
      alert(error.message);
    });
}




function createPokemon(pokemon){

  const pokemonContainer = document.createElement("div")
  pokemonContainer.classList.add("pokemon-container")

  const card = document.createElement("div")
  card.classList.add("pokemon-block")

  const spriteContainer = document.createElement("div")
  spriteContainer.classList.add("img-container")

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id }`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  
  const nombre = document.createElement('button');
    nombre.id = 'myPokemon';
    nombre.innerText = pokemon.name;
    nombre.addEventListener('click',async() =>{
        Swal.fire({
            title: `${pokemon.name}`,
            text: 'Modal with a custom image.',
            imageUrl: `${pokemon.sprites.other.dream_world.front_default}`,
            html: `
                ${pokemon.stats.map(data=>`
                <div>
                    <input 
                        type="range" 
                        value=${data.base_stat}
                        name=${data.stat.name} />
                    <label data-name=${data.stat.name}> 
                        <b id ="valor">${data.base_stat}</b> 
                        ${data.stat.name}
                    </label>
                </div>
                `).join("")}   
            `,
            confirmButtonText: 'OK',
            cancelButtonText: 'Enviar',
            showCancelButton: true,
            showCloseButton: true,
            imageWidth: "80%",
            imageHeight: "80%",
            
        });

            let containerHtml = document.querySelector("#swal2-html-container")
            containerHtml.addEventListener("input", (e) =>{
                let myLabel = e.target.nextElementSibling;
                myLabel.innerHTML = `<b>${e.target.value}</b> ${myLabel.dataset.name}` 
            })
    })


  spriteContainer.appendChild(sprite);
  pokemonContainer.appendChild(card)
  card.appendChild(nombre)
  container.appendChild(pokemonContainer)
}




titulo()
buscador()
fetchPokemons(20)



