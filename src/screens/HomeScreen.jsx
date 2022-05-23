import React from 'react';
import ScreenTemplate from '../components/ScreenTemplate';

export default function HomeScreen() {
  const query = 'select * from cards';
  const params = [];
  return <ScreenTemplate query={query} params={params} />;
}
