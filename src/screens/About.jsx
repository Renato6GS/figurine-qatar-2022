import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function About() {
  const GITHUB = 'https://github.com/renato6gs';
  const LINKEDIN = 'https://www.linkedin.com/in/renato-granados-636935233/';

  const goTo = ({ url }) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de</Text>
      <View style={styles.informationContainer}>
        <Text style={styles.description}>
          Aplicación desarrollada en React Native para el curso de Compiladores de la Universidad Mariano Gálvez de
          Guatemala
        </Text>
      </View>
      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.link} onPress={() => goTo({ url: LINKEDIN })}>
          <Ionicons name='logo-linkedin' size={32} color='#7F1431' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => goTo({ url: GITHUB })}>
          <Ionicons name='logo-github' size={32} color='#7F1431' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  informationContainer: {
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 27,
  },
  linksContainer: {
    flexDirection: 'row',
  },
  link: {
    marginLeft: 10,
  },
});
