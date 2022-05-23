import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Triangle from './Triangle';

export default function ContentHeader() {
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
});
