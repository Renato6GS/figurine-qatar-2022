import { View, StyleSheet } from 'react-native';
import React from 'react';
import Card from './Card';

export default function ListOfCards() {
  return (
    <View style={styles.cardsContainer}>
      {Array.from({ length: 600 }).map((e, i) => (
        <Card key={i} title={i} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
