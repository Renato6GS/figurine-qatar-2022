import React from 'react';
import ScreenTemplate from '../components/ScreenTemplate';

export default function ObtainedScreen() {
  const query = 'select * from cards where times = ?';
  const times = 1;
  const params = [times];
  const noneMessage = 'No ha conseguido ninguna figurita';
  return <ScreenTemplate query={query} params={params} noneMessage={noneMessage} />;
}
