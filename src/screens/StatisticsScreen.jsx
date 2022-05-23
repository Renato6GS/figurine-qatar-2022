import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ContentHeader from '../components/ContentHeader.jsx';
import { useFocusEffect } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

export default function StatisticsScreen() {
  const [miss, setMiss] = useState(0);
  const [obtain, setObtain] = useState(0);
  const [repeat, setRepeat] = useState(0);

  const getData = ({ data }) => {
    let obtain = 0;
    let miss = 0;
    let repeat = 0;

    data.forEach((item) => {
      const { times } = item;

      if (times === 0) miss++;
      else if (times === 1) obtain++;
      else if (times > 1) repeat++;
    });

    setMiss(miss);
    setObtain(obtain);
    setRepeat(repeat);
  };

  useFocusEffect(
    useCallback(() => {
      try {
        const db = SQLite.openDatabase('db.db');
        db.transaction((tx) => {
          tx.executeSql('select * from cards', [], (_, { rows }) => {
            // console.log(JSON.stringify(rows));
            const { _array } = rows;
            getData({ data: _array });
          });
        }, null);
      } catch (error) {
        console.log('hubo un error:');
        console.log(error);
      }
    }, [])
  );

  return (
    <ScrollView>
      <ContentHeader />
      <View style={styles.container}>
        <View style={[styles.statisticContainer, styles.obtainContainer]}>
          <Text style={styles.text}>Figuritas obtenidas: {obtain}</Text>
        </View>
        <View style={[styles.statisticContainer, styles.repeatContainer]}>
          <Text>Figuritas repetidas: {repeat}</Text>
        </View>
        <View style={[styles.statisticContainer, styles.missContainer]}>
          <Text>Figuritas faltantes: {miss}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  statisticContainer: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  obtainContainer: {
    backgroundColor: '#3D7773',
  },
  repeatContainer: {
    backgroundColor: '#F9BC4C',
  },
  missContainer: {
    backgroundColor: '#C4C4C4',
  },
  text: {
    color: '#fff',
  },
});
