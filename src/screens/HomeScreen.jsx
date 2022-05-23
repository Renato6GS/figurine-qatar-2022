import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import Card from '../components/Card.jsx';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');

const Triangle = () => {
  return <View style={styles.triangle} />;
};

const ContentHeader = () => {
  const [widthWindow, setWidthWindow] = useState(Dimensions.get('window').width);
  const [quantity, setQuantity] = useState(0);
  const triangleWidth = 32;

  useEffect(() => {
    Dimensions.addEventListener('change', (e) => {
      setWidthWindow(e.window.width);
    });
    const result = Math.ceil(widthWindow / triangleWidth);
    setQuantity(result);
  }, [widthWindow]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Figuritas del Mundial Qatar 2022</Text>
      </View>
      <View style={styles.containerTriangles}>
        {Array.from({ length: quantity }).map((e, i) => (
          <Triangle key={i} />
        ))}
      </View>
    </>
  );
};

export default function HomeScreen() {
  const [widthWindow, setWidthWindow] = useState(Dimensions.get('window').width);
  // const slices = Math.floor(widthWindow / 150);
  const [slices, setSlices] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    Dimensions.addEventListener('change', (e) => {
      setWidthWindow(e.window.width);
    });
    const result = Math.floor(widthWindow / 150);
    setSlices(result);
  }, [widthWindow]);

  useEffect(() => {
    try {
      db.transaction((tx) => {
        tx.executeSql('select * from cards', [], (_, { rows }) => {
          console.log(JSON.stringify(rows));
          console.log('Sin stringify');
          console.log(rows);
          const { _array } = rows;
          console.log('array es');
          console.log(_array);
          setData(_array);
        });
      }, null);
    } catch (error) {
      console.log('hubo un error:');
      console.log(error);
    }
  }, []);

  return (
    <FlatList
      key={slices}
      ListHeaderComponent={ContentHeader}
      ListHeaderComponentStyle={styles.headerStyle}
      data={data}
      numColumns={slices}
      columnWrapperStyle={styles.listStyle}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card key={item.id} id={item.id} title={item.id} times={item.times} />}
    />
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
  containerTriangles: {
    flexDirection: 'row',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#7F1431',
    transform: [{ rotate: '180deg' }],
    marginLeft: -15,
  },
  headerStyle: {
    marginBottom: 15,
  },
  listStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
