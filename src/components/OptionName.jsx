import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OptionName = (props) => {
    const [seleccionado , setSeleccionado ] = useState([false,false,false]);
    const [condition , setCondition ] = useState(null);
    const pokemonsName = props.dataProp;
    const nameReal = props.nameReal;
    



    const validarName = async (id , data) => {
      const nuevosSeleccionados = [...seleccionado];
      nuevosSeleccionados[id] = true;
      setSeleccionado(nuevosSeleccionados);
      if(data == nameReal){
        setCondition(true)
        console.log(id,true)
      }else{
        setCondition(false);
        console.log(id,false)
      }
    };


    return (
      <View className="w-full">
        <View>
        {seleccionado[0] ? (
          condition ? (
            <TouchableOpacity className="bg-background border-solid border-2 border-green-500 w-full items-center rounded-xl mt-4">
              <Text className="text-green-500 text-xl my-2">{pokemonsName[0].name}</Text>
            </TouchableOpacity>
            
          ) : (
            <TouchableOpacity className="bg-background border-solid border-2 border-red-500 w-full items-center rounded-xl mt-4" >
              <Text className="text-red-500 text-xl my-2">{pokemonsName[0].name}</Text>
            </TouchableOpacity>
          )
        ):(
          <TouchableOpacity className="bg-background w-full items-center rounded-xl mt-4" onPress={() => validarName(0,pokemonsName[0].name)}>
              <Text className="text-xl my-2">{pokemonsName[0].name}</Text>
          </TouchableOpacity>
        )}
        {seleccionado[1] ? (
          condition ? (
            <TouchableOpacity className="bg-background border-solid border-2 border-green-500 w-full items-center rounded-xl mt-4">
              <Text className="text-green-500 text-xl my-2">{pokemonsName[1].name}</Text>
            </TouchableOpacity>
            
          ) : (
            <TouchableOpacity className="bg-background border-solid border-2 border-red-500 w-full items-center rounded-xl mt-4" >
              <Text className="text-red-500 text-xl my-2">{pokemonsName[1].name}</Text>
            </TouchableOpacity>
          )
        ):(
          <TouchableOpacity className="bg-background w-full items-center rounded-xl mt-4" onPress={() => validarName(1,pokemonsName[1].name)}>
              <Text className="text-xl my-2">{pokemonsName[1].name}</Text>
          </TouchableOpacity>
        )}
        {seleccionado[2] ? (
          condition ? (
            <TouchableOpacity className="bg-background border-solid border-2 border-green-500 w-full items-center rounded-xl mt-4">
              <Text className="text-green-500 text-xl my-2">{pokemonsName[2].name}</Text>
            </TouchableOpacity>
            
          ) : (
            <TouchableOpacity className="bg-background border-solid border-2 border-red-500 w-full items-center rounded-xl mt-4" >
              <Text className="text-red-500 text-xl my-2">{pokemonsName[2].name}</Text>
            </TouchableOpacity>
          )
        ):(
          <TouchableOpacity className="bg-background w-full items-center rounded-xl mt-4" onPress={() => validarName(2,pokemonsName[2].name)}>
              <Text className="text-xl my-2">{pokemonsName[2].name}</Text>
          </TouchableOpacity>
        )}
      
        </View>
        
      </View>
        
    )
}
export default OptionName