import React from 'react';
import ScreenTemplate from '../components/ScreenTemplate';

export default function MissingScreen() {
  const query = 'select * from cards where times = ?';
  const times = 0;
  const params = [times];
  const noneMessage = 'Ya no le hace falta ninguna figurita';
  return <ScreenTemplate query={query} params={params} noneMessage={noneMessage} />;
}
