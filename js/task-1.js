async function getRandomPokemon() {
  const randomPokemonId = Math.floor(Math.random() * 898) + 1; // Es gibt 898 Pokémon
  const pokemonInfoContainer = document.getElementById('pokemonInfo');
  const pokemonDetailsContainer = document.getElementById('pokemonDetails');

  // API-Aufruf für Grundinformationen
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
  const data = await response.json();

  // Pokémon-Daten verarbeiten und anzeigen
  const pokemonName = data.name;
  const pokemonImage = data.sprites.front_default;
  const pokemonTypes = data.types.map(type => type.type.name).join(', ');

  const pokemonInfoHTML = `
      <p>Name: ${pokemonName}</p>
      <p>Types: ${pokemonTypes}</p>
      <img src="${pokemonImage}" alt="${pokemonName}">
  `;

  pokemonInfoContainer.innerHTML = pokemonInfoHTML;

  // API-Aufruf für weitere Details (Fähigkeiten)
  const abilities = data.abilities.map(ability => ability.ability.name).join(', ');

  const pokemonDetailsHTML = `
      <h2>Details</h2>
      <p>Abilities: ${abilities}</p>
  `;

  pokemonDetailsContainer.innerHTML = pokemonDetailsHTML;
}
