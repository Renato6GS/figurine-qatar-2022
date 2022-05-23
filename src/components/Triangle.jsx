import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function Triangle() {
  return <View style={styles.triangle} />;
}

const styles = StyleSheet.create({
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
});
