import React from 'react';
import ScreenTemplate from '../components/ScreenTemplate';

export default function MissingScreen() {
  const query = 'select * from cards where times = ?';
  const times = 0;
  const params = [times];
  return <ScreenTemplate query={query} params={params} />;
}
