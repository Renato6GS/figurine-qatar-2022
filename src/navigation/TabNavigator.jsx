import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator({
  HomeScreen,
  About,
  ObtainedScreen,
  RepeatedScreen,
  MissingScreen,
  StatisticsScreen,
}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Obtain') {
            iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
          } else if (route.name === 'Repeat') {
            iconName = focused ? 'repeat' : 'repeat-outline';
          } else if (route.name === 'Missing') {
            iconName = focused ? 'md-close-sharp' : 'md-close';
          } else if (route.name === 'Statistics') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: '#7F1431',
        },
        tabBarActiveTintColor: '#7F1431',
        tabBarInactiveTintColor: 'gray',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Todas las figuras' }} />
      <Tab.Screen name='Obtain' component={ObtainedScreen} />
      <Tab.Screen name='Repeat' component={RepeatedScreen} />
      <Tab.Screen name='Missing' component={MissingScreen} />
      <Tab.Screen name='Statistics' component={StatisticsScreen} />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  );
}
