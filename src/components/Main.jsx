import { View, StatusBar, Text, SafeAreaView } from 'react-native';
import RepositoryCard from './RepositoryCard.jsx';

const Main = () => {
  return (
    <SafeAreaView className="flex-1 items-center h-full bg-background/30">
        <StatusBar barStyle="dark-content" backgroundColor="hsl(185, 75%, 39%)" />
        <RepositoryCard />
    </SafeAreaView>
  );
};

export default Main;
