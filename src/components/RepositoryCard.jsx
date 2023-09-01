import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import getRandomPokemon from '../data/data.js';

const RepositoryCard = () => {
  const [dataPokemon, setDataPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getRandomPokemon();
      setDataPokemon(pokemonData);
    };

    fetchData();
  }, []);
  if (dataPokemon === null) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
        <Image
            source={{ uri: dataPokemon.img }}
            style={{ width: 200, height: 200 }}
        />
        <Text>Nombre: {dataPokemon.nombre}</Text>
        <Text>HP: {dataPokemon.hp}</Text>
    </View>
  );
};

export default RepositoryCard;
