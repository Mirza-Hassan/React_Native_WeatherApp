import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import ErrorScreen from '../components/ErrorScreen';
import WeatherScreen from '../components/WeatherScreen';

const Stack = createStackNavigator(); // Create stack navigator

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home screen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Error screen */}
        <Stack.Screen name="Error" component={ErrorScreen} />
        {/* Weather screen */}
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; // Export navigator
