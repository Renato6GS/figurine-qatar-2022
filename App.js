import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 2,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 3,
  },
];

const CardItem = ({ title }) => {
  const [titleState, setTitleState] = useState(title);
  const aumentar = () => {
    setTitleState(titleState + 1);
  };

  const disminuir = () => {
    setTitleState(titleState - 1);
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => aumentar()}>
      <Text style={styles.title}>{titleState}</Text>
      <Button onPress={() => disminuir()} title='Disminuir' />
    </TouchableOpacity>
  );
};

export default function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  // const [data, setData] = useState(DATA);

  db.transaction((tx) => {
    tx.executeSql(
      'create table if not exists items (id integer primary key not null autoincrement, done int, value text);'
    );
  });

  const add = (text) => {
    db.transaction((tx) => {
      tx.executeSql('insert into items (done, value) values (0, ?)', [text]);
      // tx.executeSql('select * from items WHERE id = 5', [], (_, { rows }) => {
      //   console.log(JSON.stringify(rows));
      //   console.log('Sin stringify');
      //   console.log(rows);
      //   const { _array } = rows;
      //   // const { _array } = WebSQLRows;
      //   const { value } = _array[0];
      //   console.log('los valores son');
      //   console.log(value);
      // });
    }, null);
    setCount(count + 1);
    // update();
    const newValue = { id: 11, title: text };
    // setData((data) => ({
    //   ...data,
    //   ...newValue,
    // }));
  };

  const deleteItem = () => {
    db.transaction((tx) => {
      tx.executeSql('delete from items');
    });
  };

  const update = (e) => {
    db.transaction((tx) => {
      tx.executeSql('select * from items WHERE id = 5', [], (_, { rows }) => {
        console.log(JSON.stringify(rows));
        console.log('Sin stringify');
        console.log(rows);
        const { _array } = rows;
        // const { _array } = WebSQLRows;
        const { value } = _array[0];
        console.log('los valores son');
        console.log(value);
        setData({ id: count + 10, title: value });
      });
    }, null);
  };

  // const showData = () => {

  // }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SQLite Example</Text>
      <View style={styles.flexRow}>
        <TextInput
          onChangeText={(text) => setText(text)}
          onSubmitEditing={() => setText(null)}
          placeholder='what do you need to do?'
          style={styles.input}
          value={text}
        />
      </View>
      <View>
        <Button onPress={() => add(text)} title='Enviar' />
        <Button onPress={() => deleteItem(text)} title='Eliminar' />
      </View>
      <View>
        {/* <FlatList data={DATA} ItemSeparatorComponent={() => <Text></Text>} renderItem={renderItem} /> */}
        <FlatList
          data={DATA}
          ItemSeparatorComponent={() => <Text></Text>}
          renderItem={({ item }) => <CardItem key={item.id} title={item.title} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  input: {
    borderColor: '#4630eb',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
