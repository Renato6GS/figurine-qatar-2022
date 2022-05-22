import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ HomeScreen, About }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7F1431',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Todas las figuras' }} />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  );
}
