import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import Card from './Card';

const DATA = [
  {
    id: 'card1',
    title: 1,
    times: 0,
  },
  {
    id: 'card2',
    title: 2,
    times: 1,
  },
  {
    id: 'card3',
    title: 3,
    times: 3,
  },
  {
    id: 'card4',
    title: 4,
    times: 2,
  },
];

export default function ListOfCards() {
  return (
    <SafeAreaView style={styles.cardsContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Card key={item.id} id={item.id} title={item.title} times={item.times} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    // flexDirection: 'row',
    flex: 1,
    // flexWrap: 'wrap',
    // paddingTop: 20,
    // paddingVertical: 20,
    // paddingHorizontal: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'blue',
  },
});

// {DATA.map(({ id, title, times }) => {
//   console.log('hola, vamos a renderizar card');
//   return <Card key={id} id={id} title={title} times={times} />;
// })}

{
  /* <FlatList
        data={DATA}
        renderItem={({ item }) => <Card key={item.id} id={item.id} title={item.title} times={item.times} />}
      /> */
}
