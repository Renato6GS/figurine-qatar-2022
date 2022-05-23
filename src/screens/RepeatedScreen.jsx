import React from 'react';
import ScreenTemplate from '../components/ScreenTemplate';

export default function RepeatedScreen() {
  const query = 'select * from cards where times > ?';
  const times = 1;
  const params = [times];
  const noneMessage = 'No tiene ninguna figurita repetida';
  return <ScreenTemplate query={query} params={params} noneMessage={noneMessage} />;
}
