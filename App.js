import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import About from './src/screens/About';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <NavigationContainer>
        <TabNavigator HomeScreen={HomeScreen} About={About} />
      </NavigationContainer>
    </>
  );
}
