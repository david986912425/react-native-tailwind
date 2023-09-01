import axios from 'axios';

async function getRandomPokemon() {
  const min = 1;
  const max = 152;
  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = response.data;

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`,
      imgJuego: data.sprites.front_default,
      imgCvg: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      experiencia: data.base_experience,
      hp: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      especial: data.stats[3].base_stat,
    };

    return pokemon;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    throw error;
  }
}

export default getRandomPokemon;
