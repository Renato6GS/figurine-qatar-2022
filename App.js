import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import About from './src/screens/About';
import * as SQLite from 'expo-sqlite';
import ObtainedScreen from './src/screens/ObtainedScreen';
import RepeatedScreen from './src/screens/RepeatedScreen';
import MissingScreen from './src/screens/MissingScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import { INIT_DATA } from './DATA';

export default function App() {
  useEffect(() => {
    const db = SQLite.openDatabase('db.db');
    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists cards (id integer primary key not null, times integer, state integer);'
      );
      tx.executeSql(`insert into cards (id, times, state) values ${INIT_DATA}`);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <NavigationContainer>
        <TabNavigator
          HomeScreen={HomeScreen}
          About={About}
          ObtainedScreen={ObtainedScreen}
          RepeatedScreen={RepeatedScreen}
          MissingScreen={MissingScreen}
          StatisticsScreen={StatisticsScreen}
        />
      </NavigationContainer>
    </>
  );
}
