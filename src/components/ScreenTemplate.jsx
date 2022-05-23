import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Dimensions, FlatList } from 'react-native';
import Card from '../components/Card.jsx';
import * as SQLite from 'expo-sqlite';
import ContentHeader from '../components/ContentHeader.jsx';
import { useFocusEffect } from '@react-navigation/native';
import NoneCard from './NoneCard.jsx';

export default function ScreenTemplate({ query = '', params = [], noneMessage }) {
  const [widthWindow, setWidthWindow] = useState(Dimensions.get('window').width);
  const [slices, setSlices] = useState(2);
  const [data, setData] = useState([]);
  const [querySearch, setQuerySearch] = useState(query);
  const [paramsSearch, setParamsSearch] = useState(params);

  useEffect(() => {
    Dimensions.addEventListener('change', (e) => {
      setWidthWindow(e.window.width);
    });
    const result = Math.floor(widthWindow / 150);
    setSlices(result);
  }, [widthWindow]);

  useEffect(() => {
    try {
      const db = SQLite.openDatabase('db.db');
      db.transaction((tx) => {
        tx.executeSql(querySearch, paramsSearch, (_, { rows }) => {
          // console.log(JSON.stringify(rows));
          const { _array } = rows;
          setData(_array);
        });
      }, null);
    } catch (error) {
      console.log('hubo un error:');
      console.log(error);
    }
  }, [querySearch, paramsSearch]);

  useFocusEffect(
    useCallback(() => {
      try {
        const db = SQLite.openDatabase('db.db');
        db.transaction((tx) => {
          tx.executeSql(query, params, (_, { rows }) => {
            // console.log(JSON.stringify(rows));
            const { _array } = rows;
            setData(_array);
          });
        }, null);
      } catch (error) {
        console.log('hubo un error:');
        console.log(error);
      }
    }, [])
  );

  return (
    <>
      {data.length === 0 ? (
        <NoneCard noneMessage={noneMessage} />
      ) : (
        <FlatList
          key={slices}
          ListHeaderComponent={<ContentHeader setQuerySearch={setQuerySearch} setParamsSearch={setParamsSearch} />}
          ListHeaderComponentStyle={styles.headerStyle}
          data={data}
          numColumns={slices}
          columnWrapperStyle={styles.listStyle}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card key={item.id} id={item.id} title={item.id} times={item.times} />}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7F1431',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontSize: 28,
    lineHeight: 44,
  },
  headerStyle: {
    marginBottom: 15,
  },
  listStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
