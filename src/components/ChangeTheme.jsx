import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useGlobalState } from '../store/globalState';

const ChangeTheme = () => {
  const { globalTheme, toggleTheme } = useGlobalState();

  return (
    <View>
      <Text>Global Theme: {globalTheme}</Text>
      <Switch value={globalTheme === 'dark'} onValueChange={toggleTheme} />
    </View>
  );
};

export default ChangeTheme;
