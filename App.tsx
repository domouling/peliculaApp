import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { FadeScreen } from './src/screens/FadeScreen';
import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
