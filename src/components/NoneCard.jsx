import { View, Text } from 'react-native';
import React from 'react';
import ContentHeader from './ContentHeader';

export default function NoneCard({ noneMessage }) {
  return (
    <>
      <ContentHeader />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>{noneMessage}</Text>
      </View>
    </>
  );
}
