import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Triangle from './Triangle';
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalSearch from './ModalSearch';

export default function ContentHeader({ setQuerySearch, setParamsSearch }) {
  const [widthWindow, setWidthWindow] = useState(Dimensions.get('window').width);
  const [quantity, setQuantity] = useState(0);
  const triangleWidth = 32;
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    Dimensions.addEventListener('change', (e) => {
      setWidthWindow(e.window.width);
    });
    const result = Math.ceil(widthWindow / triangleWidth);
    setQuantity(result);
  }, [widthWindow]);

  const alertSearch = () => {
    setOpenModal(true);
  };

  return (
    <>
      {openModal && (
        <ModalSearch setOpenModal={setOpenModal} setQuerySearch={setQuerySearch} setParamsSearch={setParamsSearch} />
      )}
      <View style={styles.container}>
        <Text style={styles.title}>Figuritas del Mundial Qatar 2022</Text>
        <TouchableOpacity style={styles.search} onPress={() => alertSearch()}>
          <Ionicons style={styles.searchIcon} name='ios-search-outline' size={24} color='#fff' />
        </TouchableOpacity>
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
  searchIcon: {
    alignSelf: 'flex-end',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
