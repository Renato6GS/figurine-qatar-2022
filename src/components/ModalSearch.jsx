import { View, Text, Alert, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function ModalSearch({ setOpenModal, setQuerySearch, setParamsSearch }) {
  const [number, setnumber] = useState(null);
  const reg = /^\d+$/;

  const handleSearch = () => {
    if (!reg.test(number)) return Alert.alert('Error', 'Ingrese un número entero positivo válido.');
    if (number < 0 || number > 600) return Alert.alert('Error', 'Ingrese un número entre un rango del 1 al 600.');

    setQuerySearch('select * from cards where id = ?');
    setParamsSearch([number]);
    setOpenModal(false);
  };

  const handleCancel = () => setOpenModal(false);

  return (
    <Modal animationType='fade' transparent={true}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Buscar</Text>
          <Text style={styles.description}>Ingrese el número de la figura que desea buscar:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setnumber}
              value={number}
              placeholder='Ej.: 100'
              keyboardType='numeric'
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnCancel} onPress={() => handleCancel()} activeOpacity={0.7}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSearch} onPress={() => handleSearch()} activeOpacity={0.7}>
              <Text style={styles.textSearch}>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: { width: '80%', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  description: { fontSize: 16, lineHeight: 24 },
  inputContainer: { marginTop: 20 },
  btnContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 },
  btnCancel: { marginRight: 30, paddingVertical: 8, paddingHorizontal: 10 },
  textCancel: { color: '#7F1431' },
  btnSearch: { backgroundColor: '#3D7773', paddingVertical: 8, paddingHorizontal: 10 },
  textSearch: { color: '#fff' },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
