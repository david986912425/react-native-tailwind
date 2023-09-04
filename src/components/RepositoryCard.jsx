import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import getRandomPokemon from '../data/data.js';
import OptionName from './OptionName.jsx';
import Score from './Score.jsx';
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
    <View className="w-10/12 px-5 flex-col">
      <Score/>
      <View className="w-full justify-center h-full">
        <Image
            source={{ uri: dataPokemon.img }}
            className="w-full h-72"
            style={{ resizeMode: 'contain'}}
        />
        <Text className="text-center font-bold text-xl mt-2 text-black/70">Como se llama: </Text>
        <OptionName dataProp={dataPokemon.pokemonsName} nameReal={dataPokemon.real}/>
      </View>
    </View>
  );
};

export default RepositoryCard;
