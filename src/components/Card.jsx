import { StyleSheet, Dimensions, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

const widthWindow = Dimensions.get('window').width;
const slices = Math.floor(widthWindow / 150);
const cardDimensions = Math.floor(widthWindow / slices) - 30;

export default function Card({ title }) {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(count + 1);
  };

  const disminuir = () => {
    if (count > 0) setCount(count - 1);
  };

  const reiniciarContador = () => {
    setCount(0);
  };

  const handleLongPress = () => {
    if (count === 0) return;
    Alert.alert('Reiniar conteo', '¿Está seguro de que quiere reiniciar con el conteo?', [
      {
        text: 'Cancela',
        style: 'cancel',
      },
      { text: 'OK', onPress: () => reiniciarContador() },
    ]);
  };

  const returnBackgroundColor = (count) => {
    if (count === 0) return styles.BGnone;
    if (count === 1) return styles.BGobtained;
    if (count === 2) return styles.BGmiddle;
    if (count > 2) return styles.BGtooMany;
  };

  const returnTextColor = (count) => {
    if (count === 1 || count > 2) return styles.ColorWhite;
  };

  const returnCardsRepeatedly = (count) => {
    if (count === 0) return 'Sin obtener';
    if (count === 1) return '¡Conseguida!';
    if (count > 1) return `Repetida ${count} veces`;
  };

  return (
    <TouchableOpacity
      style={[styles.square, returnBackgroundColor(count)]}
      onPress={() => aumentar()}
      onLongPress={() => handleLongPress()}
      activeOpacity={0.7}>
      <TouchableOpacity style={styles.btnRestar} onPress={() => disminuir()}>
        <Text style={styles.txtRestar}>{count > 0 && '-'}</Text>
      </TouchableOpacity>
      <Text style={[styles.title, returnTextColor(count)]}>{title}</Text>
      <Text style={[styles.subTitle, returnTextColor(count)]}>{returnCardsRepeatedly(count)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    width: cardDimensions,
    height: cardDimensions,
    alignSelf: 'flex-start',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    color: '#000',
  },
  subTitle: {
    marginBottom: 5,
    fontSize: 18,
    color: '#000',
  },
  tricky: {
    fontSize: 8,
    color: 'transparent',
  },
  ColorWhite: {
    color: '#fff',
  },
  BGnone: {
    backgroundColor: '#C4C4C4',
  },
  BGobtained: {
    backgroundColor: '#3D7773',
  },
  BGmiddle: {
    backgroundColor: '#F9BC4C',
  },
  BGtooMany: {
    backgroundColor: '#7F1431',
  },
  btnRestar: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    color: 'black',
    width: 30,
    height: 30,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  txtRestar: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
