// const pokemonID = document.getElementById('pokemon-id');
// const pokemonName = document.getElementById('pokemon-name');
// const spriteContainer = document.getElementById('sprite-container');
// const types = document.getElementById('types');
// const height = document.getElementById('height');
// const weight = document.getElementById('weight');
// const hp = document.getElementById('hp');
// const attack = document.getElementById('attack');
// const defense = document.getElementById('defense');
// const specialAttack = document.getElementById('special-attack');
// const specialDefense = document.getElementById('special-defense');
// const speed = document.getElementById('speed');
// const searchForm = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.querySelector('.output');

searchButton.addEventListener('click', searchPokemon);

async function searchPokemon(e) {
  e.preventDefault();
  const pokemon = searchInput.value.toLowerCase();

  if (!pokemon) {
    alert('Please enter a Pokémon name or ID');
    return;
  }

  try {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
    if (!response.ok) throw new Error('Pokémon not found');
    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    alert(error.message);
    resultsDiv.innerHTML = '';
  }
}

function displayPokemon(data) {
  resultsDiv.innerHTML = `
    <h2 id="pokemon-name">${data.name.toUpperCase()}</h2>
    <p id="pokemon-id">#${data.id}</p>
    <p id="weight">Weight: ${data.weight}</p>
    <p id="height">Height: ${data.height}</p>
    <div id="types">${data.types.map(type => `<span>${type.type.name.toUpperCase()}</span>`).join('')}</div>
    <img id="sprite" src="${data.sprites.front_default}" alt="${data.name}">
    <h3>Base Stats:</h3>
    <p id="hp">HP: ${data.stats[0].base_stat}</p>
    <p id="attack">Attack: ${data.stats[1].base_stat}</p>
    <p id="defense">Defense: ${data.stats[2].base_stat}</p>
    <p id="special-attack">Special Attack: ${data.stats[3].base_stat}</p>
    <p id="special-defense">Special Defense: ${data.stats[4].base_stat}</p>
    <p id="speed">Speed: ${data.stats[5].base_stat}</p>
  `;
}