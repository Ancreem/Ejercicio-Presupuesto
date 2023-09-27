let bodyPag = document.querySelector("body");

const container = document.createElement("div")
container.classList.add("container")



bodyPag.appendChild(container)


function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);});
}

function fetchPokemons(numeroPokemones) {
  for (let i = 1; i <= numeroPokemones; i++) {
    fetchPokemon(i);
  }
}


function titulo (){

  const tituloCont = document.createElement("div")
  tituloCont.classList.add("tituloCont")
  const titulo = document.createElement("h1")
  titulo.innerText = "Pokedex"

  tituloCont.appendChild(titulo)
  container.appendChild(tituloCont)
}



function buscador(){

  const contBuscador = document.createElement("div")
  contBuscador.setAttribute("class", "contBuscador") 

  const buscador = document.createElement("input")
  buscador.setAttribute("type", "number");
  buscador.setAttribute("name", "valor");
  buscador.setAttribute("id", "valor");
  buscador.setAttribute("placeholder", "Ingrese Nombre o ID");
  contBuscador.appendChild(buscador)

  const enviar = document.createElement("input");
  enviar.setAttribute("type", "submit");
  enviar.setAttribute("value", "Enviar");
  contBuscador.appendChild(enviar)
  
  container.appendChild(contBuscador)
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


