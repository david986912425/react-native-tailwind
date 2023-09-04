import axios from 'axios';

async function getRandomPokemon() {
  const getRandomId = () => {
    const min = 1;
    const max = 152;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomPokemonData = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      throw error;
    }
  };

  const randomIds = [getRandomId(), getRandomId(), getRandomId()];

  const [data, data_2, data_3] = await Promise.all(randomIds.map((id) => getRandomPokemonData(id)));

  const pokemonsName = [{id: 1 , name: data.name}, {id: 2 , name:data_2.name}, {id:3 ,name:data_3.name}].sort(() => Math.random() - 0.5);
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomIds[0]}.png`;
  const real = data.name;

  return {
    img,
    real,
    pokemonsName,
  };
}

export default getRandomPokemon;
