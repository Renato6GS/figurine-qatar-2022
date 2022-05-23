import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import About from './src/screens/About';
import * as SQLite from 'expo-sqlite';

export default function App() {
  // 'create table if not exists cards (id integer primary key not null autoincrement, times integer, state integer);'
  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaa');
    const db = SQLite.openDatabase('db.db');
    db.transaction((tx) => {
      tx.executeSql('drop table cards');
      tx.executeSql('create table cards (id integer primary key not null, times integer, state integer);');
      tx.executeSql('insert into cards (id, times, state) values (1, 0, 1)');
      tx.executeSql('insert into cards (id, times, state) values (2, 2, 1)');
      tx.executeSql('insert into cards (id, times, state) values (3, 5, 1)');
      tx.executeSql('insert into cards (id, times, state) values (4, 2, 1)');
      tx.executeSql('insert into cards (id, times, state) values (5, 0, 1)');
      tx.executeSql('insert into cards (id, times, state) values (6, 2, 1)');
      tx.executeSql('insert into cards (id, times, state) values (7, 1, 1)');
      tx.executeSql('insert into cards (id, times, state) values (8, 3, 1)');
    });
  }, []);

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <NavigationContainer>
        <TabNavigator HomeScreen={HomeScreen} About={About} />
      </NavigationContainer>
    </>
  );
}
