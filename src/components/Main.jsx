import { View, StatusBar, Text } from 'react-native';
import RepositoryCard from './RepositoryCard.jsx';

const Main = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
        <RepositoryCard />
        <RepositoryCard />
    </View>
  );
};

export default Main;
