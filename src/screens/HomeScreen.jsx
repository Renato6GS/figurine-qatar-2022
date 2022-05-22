import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ListOfCards from '../components/ListOfCards';

const widthWindow = Dimensions.get('window').width;

const Triangle = () => {
  return <View style={styles.triangle} />;
};

export default function HomeScreen() {
  const triangleWidth = 32;
  const quantity = Math.ceil(widthWindow / triangleWidth);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Figuritas del Mundial Qatar 2022</Text>
      </View>
      <View style={styles.containerTriangles}>
        {Array.from({ length: quantity }).map((e, i) => (
          <Triangle key={i} />
        ))}
      </View>
      <ListOfCards />
    </ScrollView>
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
});
